//Объект процесса
console.log(process.argv);


function getValue(flag) {
    const index = process.argv.indexOf(flag);
    return index > -1 ?  process.argv[index + 1] : null;
}

const message = getValue('-m') || 'Hello';
console.log(message);