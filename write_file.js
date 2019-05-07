const fs = require('fs');

function getValue(flag) {
    const index = process.argv.indexOf(flag);
    return (index > -1) ? process.argv[index + 1] : null;
}

const fileName = getValue('-f');
const content = getValue('-c');

fs.appendFile(fileName, content, error => {
         if (error) throw error;
    
         console.log("File Created!");
     });

//Записать и перезаписать фаил
// fs.writeFile('note.txt', 'Hello OGG Node.js', error => {
//     if (error) throw error;

//     console.log("File Created!");
// });