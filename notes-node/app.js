console.log("Starting app.js!")

const fs = require("fs")
const _ = require("lodash")
const yargs = require("yargs")

const notes = require("./notes")

const argv = yargs.argv
var command = argv._[0].toLowerCase()
//var command = process.argv[2].toLowerCase()
// console.log("regular", process.argv)
// console.log("yargs", argv)

switch (command) {
    case "add":
        notes.addNote(argv.title, argv.body)
        break
    case "list":
        notes.getAll()
        break
    case "read":
        notes.getNote(argv.title)
        break
    case "remove":
        notes.removeNote(argv.title)
        break
    default:
        console.log(`Command \"${command}\" not recognized`)
        break
}