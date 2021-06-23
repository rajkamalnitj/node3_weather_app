
/*
  const chalk = require('chalk');
const fs = require('fs');
const getnotes=function()
{
    return 'your wishes';
}
const addnote=function(title,body)
{

const notes=loadnotes();

const duplicatenotes=notes.filter(function(notes)
{
return notes.title==title;

})

if(duplicatenotes.length==0)
{

    notes.push(

        { title:title,
            body:body
        }
    )
    savenotes(notes);
    
    console.log(notes);


}


else 
{
    console.log("note title taken");
}

}




const savenotes=function(notes)
{
const datajson=JSON.stringify(notes);
fs.writeFileSync("1-json.json",datajson);


}
const loadnotes=function()
{
    try{
        const databuffer=fs.readFileSync(1-json.json);
        const datajson=databuffer.toString();
        return JSON.parse(datajson);

    }
    catch(e)
    {

return [];


    }


}

const removenote=function(title)
{
console.log(title);
const notes=loadnotes();
const notestokeep=notes.filter(
    function(notes)
    {

        return notes.title!=title;
    }
)
if(notes.length>notestokeep.length)
{

    console.log(chalk.green.inverse("notes removed"));
    savenotes(notestokeep);
}
else 
{

    console.log(chalk.green.inverse(" no notes  found"));   
}


}


const  listnode= ()=>
{
    const notes=loadnotes();

    console.log(chalk.inverse("your notes"));
notes.array.forEach(notes => {
   console.log(notes.title) ;
});


}



module.exports={
getnotes: getnotes,
addnote: addnote,
removenote:removenote,
listnode:listnode
};

const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}*
const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
debugger


    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('1-json.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('1-json.json')
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
}*/
const request = require('request');
const geocode = require('./1-json.js');
const forecast = require('./1-json.js');

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })
    })
}
