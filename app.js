const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//custonmize the yargs version
yargs.version('1.2.0')

// Adding command
yargs.command({
    command: 'add',
    describe: 'Adding a new  notes',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: true, // applied the validation so that the title can not be empty
            type: 'string'
        }, body: {
            describe: 'Note Body content',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// REMOVING notes

yargs.command({
    command: 'remove',
    describe: 'Removing a notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Listing command

yargs.command({
    command: 'list',
    describe: 'Listing all notes ',
    handler() {
        notes.listNotes()
    }
})

//Read the command

yargs.command({
    command: 'read',
    describe: 'Read a content',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv)// to parse the content in cLA