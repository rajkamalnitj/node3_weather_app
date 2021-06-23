
  /* const chalk = require('chalk');
// Node.js program to demonstrate the
// fs.writeFileSync() method
   //const name=require('./util.js');
   const note=require('./notes.js');
   const validator=require('validator')
   const yargs=require('yargs')*/
// Import the filesystem module

/*
const fs = require('fs');
  
let data = "This is a file containing a collection"
           + " of programming languages.\n"
 + "1. C\n2. C++\n3. Python";
  
fs.writeFileSync("programming.txt", data);
fs.appendFileSync('programming.txt', 'data to append');
*/
//console.log(name(2,3));

/*
const msg=getnote();
console.log(msg);
 console.log(validator.isEmail('foo@bar.com'));
 console.log(validator.isURL
   ('https://www.w3schools.com/nodejs/swnodejs_cmd.asp?filename=demo_create_db'));


console.log(chalk.bold.blue.inverse('success'));

 console.log(chalk.rgb(25, 100, 204).inverse('Hello!'));*/

//var  command=process.argv[2];
//console.log(process.argv);

/*
if(command=="add")
console.log("adding a note");
else
console.log(" else part \n");
*/
/*
yargs.command({
command: 'add',
describe:'add a new node',
handler:function()
{
   console.log("adding a new number");
}
})
yargs.command({
   command: 'remove',
   describe:'add a new node',
   handler:function()
   {
      console.log("remove a new number");
   }
   })

   yargs.command({
      command: 'listing',
      describe:'add a new node',
      handler:function()
      {
         console.log("listing a note");
      }


      })


      yargs.command({
         command: 'read',
         describe:'add a new node',
         builder:
         {
title:
{
describe:'note title',
demandOption: true
}
         },
         handler:function(argv)
         {
            console.log("read a note",argv);
         }
         })


//const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
	command: 'add',
	describe: 'Adds two number',
	builder: {
		firstNumber: {
			describe: 'First Number',
			demandOption: true, // Required
			type: 'number'	
		},
		secondNumber: {
			describe: 'Second Number',
			demandOption: true,
			type: 'number'
		}
	},

	// Function for your command
	handler :function(argv) {
note.addnote(argv.firstNumber,argv.secondNumber);

		console.log("Result:",
			(argv.firstNumber+argv.secondNumber))
	}
})

yargs.parse() // To set above changes*/
/*
yargs.command({
	command: 'add',
	describe: 'Adds two number',
	builder: {
		title: {
			describe: 'note title',
			demandOption: true, // Required
			type: 'string'	
		},
		body: {
			describe: 'note body',
			demandOption: true,
			type: 'string'
		}
	},

	// Function for your command
	handler :function(argv) {
note.addnote(argv.title,argv.body);

		console.log("Result:",
			(argv.title+argv.body))
	}
})













yargs.command({
	command: 'remove',
	describe: 'Adds two number',
	builder: {
		title: {
			describe: 'note title',
			demandOption: true, // Required
			type: 'string'	
		}
	
	},

	// Function for your command
	handler :function(argv) {
note.removenote(argv.title);

		console.log("Result:",
			(argv.title+argv.body))
	}
})








yargs.command({
	command: 'list',
	describe:'listing nodes',
	handler:function()
	{
		note.listnode();
	   //console.log("adding a new number");
	}
	})
yargs.parse()



*/


const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
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

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
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





