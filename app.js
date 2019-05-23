const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

// customize yargs version 
yargs.version('1.1.0')

// create add commnad
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title', 
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function() {
        console.log('Removing the note');
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function() {
        console.log('Reading A note');
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log('Listing all notes');
    }
})

// add, remove, read, list

yargs.parse()
// console.log(yargs.argv)

