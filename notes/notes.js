const fs = require('fs');
const data = require('./notes.json');


const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

switch (command) {
    case 'list':
        list();
        break;

    case 'view':
        view(title, (error, note) => {
            if (error) return console.error(error.message);

            console.log(`# ${note.title} \r\n\r\n---\r\n\r\n${note.content}`);
        });
        break;

    case 'create':
        create(title, content, error => {
            if (error) return console.error(error.message);
            console.log("Заметка создана");
        });
        break;

    case 'remove':
        remove(title, error => {
            if (error) return console.error(error.message);

            console.log("Заметка была удалена")
        });
        break;
    
    default:
    console.log(data);
}

function list() {
    for (let i  = 0; i < data.length; i++) {
        console.log(`${i + 1}. ${data[i].title}`);
    }
}

function create (title, content, done){
       fs.readFile('notes.json', (error, data) => {
        if (error) return done(error);

        const notes = JSON.parse(data);
        notes.push({title, content});
        const json = JSON.stringify(notes);
        fs.writeFile('notes.json', json, error => {
            if (error) return done(error);

            done();
        });
       });
}

function view (title, done) {
    fs.readFile('notes.json', (error, data) => {
        if (error) return done(error);

        const notes = JSON.parse(data);
        const note = notes.find(note => note.title === title);

        if(!note) return done(new Error("Заметка не найдена"));

        done(null, note);
       });
}

function remove (title, done){
    fs.readFile('notes.json', (error, data) => {
     if (error) return done(error);

     let notes = JSON.parse(data);
     notes = notes.filter(note => note.title !== title);

     const json = JSON.stringify(notes);
     fs.writeFile('notes.json', json, error => {
         if (error) return done(error);

         done();
     });
    });
}

// function load (done) {
//     fs.readFile('notes.json', (error, data) => {
//         if (error) {
//             if (error.code === 'ENOENT') {
//                 return done (null, []);
//             } else {
//                 return done(error);
//             }
//         }
        
//         try {
//             const notes = JSON.parse(data);
//             done(null, notes);
//         } catch (error) {
//             done(error);
//         }     
//        });
// }

// function save() {
//     try {
//         const json = JSON.stringify(notes);
//      fs.writeFile('notes.json', json, error => {
//          if (error) return done(error);

//          done();
//         });
//     } catch (error) {
//         done(error);
//     }
// }