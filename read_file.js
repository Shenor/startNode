//Чтение файлов
const fs = require('fs');

function getValue(flag) {
    const index = process.argv.indexOf(flag);
    return (index > -1) ? process.argv[index + 1] : null;
}

const fileName = getValue('-f');

fs.readFile(fileName, 'utf-8', (error, data) => {
    if(error) return console.log("Данного файла не существует");;

    console.log(data);
    console.log(process.argv);
});