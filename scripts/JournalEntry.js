/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            
            <h1>Entry Concepts</h1>
            <h2>${entry.concept}</h2>
            <h3>Entry</h3>
            <p>${entry.entry}</p>
            <h3>Mood</h3>
            <p>${entry.mood}</p>
            
        </section>
    `
}