import {saveJournalEntry} from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./MoodDataProvider.js"

const JournalForm = document.querySelector("#form")

const eventHub = document.querySelector("#container")

export const JournalFormComponent = (moodArr) => {
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
    <select id = "mood">
    <option value = "0" > Mood</option>
    ${moodArr.map(mood => {
        return `<option value = "${mood.id}">${mood.label}</option>`
    }).join("")
}
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
    getMoods()
    .then(() => {
        console.log(useMoods())

        JournalFormComponent(useMoods());
    })
}