const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()// it will load the notes
    const duplicateNotes = notes.find((note) =>  note.title === title) // this funcx will be called each time 
      // check the duplicacy in notes
    if (!duplicateNotes) {
        notes.push({ // it will push the content to the notes
            title: title,
            body: body
        })
        saveNotes(notes)// it will save the content in the notes
        console.log(chalk.greenBright.inverse('New notes is Added Successfully !'))
    } else {
        console.log(chalk.red.inverse('Notes Already added  !'))
    }
}

// for removing the notes
const removeNote = (title) => {
const notes =loadNotes()
const notesToKeep = notes.filter((note) => note.title !== title)

if (notes.length > notesToKeep.length){//to check weather then notes is removed or not
    console.log(chalk.magenta.inverse ('Notes Removed Successfully'))
    saveNotes(notesToKeep)
}else {
      console.log(chalk.blue.inverse('No notes found !'))
}

}


const listNotes = () =>{
    const notes = loadNotes()

    console.log(chalk.inverse('Below mention is the notes on JSONDB : -'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(`The title :`, chalk.inverse(note.title))
        console.log(`The  body :`, chalk.inverse(note.body))
    } else {
        console.log(chalk.red.inverse('Note not found !'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)// to write the data on the file
}


const loadNotes  = () => {// it will check whether the file is created or not
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
        
    }
}


module.exports = {
    addNote: addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote: readNote
}