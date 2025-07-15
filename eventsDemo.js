import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hello World' + name);
}

function goodByeHandler(name){
    console.log('Good Bye  ' + name);
}

// Register event Listeners = this will call the function when the event is emitted
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye',goodByeHandler);

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');


// Error handling

myEmitter.on('error', (err) => {
    console.log('An Error Occured:', err);
});

// Simulate Error
myEmitter.emit('error', new Error('Something went wrong!'));