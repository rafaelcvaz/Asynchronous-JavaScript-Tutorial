const getTodos = (callback) => {
    const request = new XMLHttpRequest(); // Creating a new request object to make an HTTP request

    // Adding an event listener to track the request's state changes (this happens multiple times as the request is processed)
    request.addEventListener('readystatechange', () => {
        // When the request is complete (readyState 4), we check the status of the response
        if(request.readyState === 4 && request.status === 200){ 
            // If the request was successful (status 200), we call the callback with the data (responseText)
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) { 
            // If the request is complete, but there was an error (any other status), we pass the error to the callback
            callback('could not fetch data', undefined);
        }
    });

    // Setting up the request with the HTTP method (GET) and the URL we're requesting data from
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send(); // Sending the request to the server
};

console.log(1);
console.log(2);

// Calling the getTodos function and passing a callback function to handle the response
getTodos((error, data) => {
    console.log('callback fired');
    if(error){
        // If there's an error, log it
        console.log(error); 
    } else {
        // If the data is successfully retrieved, log the data
        console.log(data); 
    }
});

console.log(3);
console.log(4);

// The callback allows us to handle both the error and the data once the request is done.