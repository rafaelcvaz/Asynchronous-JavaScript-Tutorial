const getTodos = (callback) => {
    const request = new XMLHttpRequest(); // Creating a new request object to make an HTTP request

    // Adding an event listener to track the request's state changes
    request.addEventListener('readystatechange', () => {
        // When the request is complete (readyState 4), check if the request was successful (status 200)
        if(request.readyState === 4 && request.status === 200){ 
            // If the request was successful, parse the response text as JSON
            const data = JSON.parse(request.responseText);
            // Call the callback function with the parsed data
            callback(undefined, data);
        } else if (request.readyState === 4) { 
            // If the request finished but there was an error, pass the error to the callback
            callback('could not fetch data', undefined);
        }
    });

    // Setting up the request (GET method and the path to the JSON file)
    request.open('GET', 'todos.json');
    // Sending the request to fetch the data
    request.send();
};

console.log(1);
console.log(2);

// Calling the getTodos function and passing a callback to handle the response
getTodos((error, data) => {
    console.log('callback fired');
    if(error){
        // If there's an error, log it
        console.log(error); 
    } else {
        // If successful, log the parsed data
        console.log(data); 
    }
});

console.log(3);
console.log(4);

