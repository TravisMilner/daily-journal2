import {saveJournalEntry} from "./JournalDataProvider.js"

const JournalForm = document.querySelector("#form")

const eventHub = document.querySelector("#container")

export const JournalFormComponent = () => {
    JournalForm.innerHTML += `<form class = "formClass" action="#">
    <div class= "entry">
    <label for="date">Date:</label>
    <input type="date" id="date" name="date">
    </div>

    <div class = "entry"
    <label for="concept">Concept Covered:</label>
    <input type="text" id="concept" name="concept">
    </div>

    <div class = "entry">
    <label for="mood">Mood:</label>
    <select name="mood" id="mood">
        <option>Happy</option>
        <option>Sad</option>
        <option>Okay</option>
        <option>Nervous</option>
        <option>Accomplished</option>
    </select>
    <div class = "textArea">
    <textarea id="journalEntry" name="journalEntry" placeholder="Thoughts?"></textarea>
    </div>
    

</form>`
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submit") {
        const date = document.querySelector("#date").value 
        const concept = document.querySelector("#concept").value
        const mood = document.querySelector("#mood").value
        const text = document.querySelector("#journalEntry").value
        console.log("button was clicked")

        const NewJournal = {
            date,
            concept,
            mood,
            text

        }
         saveJournalEntry(NewJournal)
        console.log(NewJournal)
        
    }
})

export const journalForm = () => {
    JournalFormComponent;
}