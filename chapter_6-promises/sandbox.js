const getTodos = (resource) => {
    // Returning a new promise to handle asynchronous operations
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest(); 

        // Adding an event listener to track the request's state changes
        request.addEventListener('readystatechange', () => {
            // When the request is complete (readyState 4), check if it was successful (status 200)
            if(request.readyState === 4 && request.status === 200){ 
                // Parse the response text (which is a JSON string) into a JavaScript object
                const data = JSON.parse(request.responseText);
                // Resolve the promise and pass the data to the next step
                resolve(data);
            } else if (request.readyState === 4) { 
                // If the request finished but failed, reject the promise and pass an error message
                reject('could not fetch data');
            }
        });

        // Open a GET request to fetch data from the given resource (path)
        request.open('GET', resource);
        // Send the request to the server
        request.send();
    });
};

// Chaining promises together: 
// - We use 'then()' to handle the resolved promise.
// - Each 'then()' returns a new promise, allowing us to chain multiple asynchronous operations.
getTodos('todos/luigi.json').then(data => {
    console.log('promise 1 resolved:', data);
    // After resolving the first promise, return the second promise (another getTodos call)
    return getTodos('todos/mario.json'); 
}).then(data => {
    console.log('promise 2 resolved:', data);
    // After resolving the second promise, return the third promise
    return getTodos('todos/shaun.json');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(err => {
    // If any promise is rejected (an error happens), this will catch the error
    console.log('promise rejected:', err);
});

// Notes:
// - The 'then()' method is used to handle the successful resolution of each promise.
// - We chain the 'getTodos' function calls, passing the result of each one to the next.
// - The 'catch()' at the end will catch any error (rejected promise) from the previous steps.
// - The promises are handled asynchronously, so the console logs in 'then()' happen after the promises are resolved.













