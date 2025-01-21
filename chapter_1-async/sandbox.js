console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired'); // This will run after 2 seconds
}, 2000);

console.log(3);
console.log(4); 

// setTimeout is asynchronous, so it doesn't block the execution of the next code.
// The callback inside setTimeout will be executed after 2 seconds, but the rest of the code keeps running.
