// fetch API - the only time we get a rejection is if there's a network error
// If we mistype the endpoint or get a bad status like 404, the promise resolves, but with an unsuccessful status (it doesn't actually fetch the data)
fetch('todos/luigi.json').then((response) => {
    // If the request resolves, we get the response object.
    console.log('resolved', response);

    // To access the data, we need to convert the response body into JSON format.
    // This is asynchronous, so it returns a promise, which we handle with another 'then()' method to get the response object.
    return response.json(); 
}).then(data => {
    // After the JSON is parsed, we can access and log the data. 
    console.log(data);
}).catch((error) => {
    // If something goes wrong (like a network failure), the promise will be rejected,
    // and this catch block will be triggered.
    console.log('rejected', error);
});

