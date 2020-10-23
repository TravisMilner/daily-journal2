/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries, useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// // DOM reference to where all entries will be rendered
// const entryLog = document.querySelector("#entryLog")

// export const EntryListComponent = () => {
//     // Use the journal entry data from the data provider component
//     const entries = useJournalEntries()

//     for (const entry of entries) {
//         /*
//             Invoke the component that returns an
//             HTML representation of a single entry
//         */
//         entryLog.innerHTML += JournalEntryComponent(entry);
//     }
// }

const eventHub = document.querySelector("#container")
const journalContainer = document.querySelector("#entryLog")
eventHub.addEventListener("journalStateChanged", () => JournalList())

export const JournalList = () => {
    getEntries()
    .then (() => {
        const allEntries = useEntries()
        render(allEntries)
    })
}

const render = (entryArray) => {
    let journalHTMLRepresentations = ""
    for (const entry of entryArray) {
        journalHTMLRepresentations += JournalEntryComponent(entry)
    }
    journalContainer.innerHTML = `
            ${journalHTMLRepresentations}
            `
}