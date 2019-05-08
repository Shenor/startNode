const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('start', (message) => {console.log(message);}); //emiter.once - единичный вызов события.
emitter.emit('start', 'Started 1');
emitter.emit('start', 'Started 2');
emitter.emit('start', 'Started 3');