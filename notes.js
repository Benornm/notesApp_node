const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)        
        console.log(chalk.green.inverse('New note added'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
}

const removeNote = (titleToRemove) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== titleToRemove)
    
    if(notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse(`Note Removed`));
    } else {
        console.log(chalk.red.inverse(`Note Not Found`));
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length) {
        console.log(chalk.inverse(`Your Notes (${notes.length}): `));
        notes.forEach((note) => console.log(note.title))
    } else {
        console.log(chalk.orange.inverse('You have 0 notes'));
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const currentNote = notes.find((note) => note.title === title)
    if(currentNote) {
        console.log(chalk.inverse(currentNote.title));
        console.log(currentNote.body);
    } else {
        console.log(chalk.red.inverse('Note not found.'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
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
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}