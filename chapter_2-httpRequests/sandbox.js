const request = new XMLHttpRequest(); // Built-in JavaScript request object

// Adds an event listener to run a function whenever the request's state changes
// There are 4 readyState values, and 4 means the request is complete and the data is ready to be used
request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200){ 
        // When the request is complete and successful, log the response data
        console.log(request, request.responseText); // This is where the response data is stored
    } else if (request.readyState === 4) {
        // If the request is finished but something went wrong
        console.log('could not fetch the data');
    }
});

// Setting up the request: defining the HTTP method (GET) and the endpoint URL
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); 
request.send(); // Sends the request to the server
