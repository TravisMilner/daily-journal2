const eventHub = document.querySelector("#container")

const dispatchStateChangeEvent = () => {
    const journalStateChangedEvent = new CustomEvent("journalStateChanged")
    eventHub.dispatchEvent(journalStateChangedEvent)
}

export const saveJournalEntry = (newJournalEntry) => {
    fetch("http://localhost:8088/entries" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}


/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let journal = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(
        entries => {
            journal = entries
        }
    )
} 

export const useEntries = () => {
    return journal.slice()
}