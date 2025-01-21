// Async and Await

const getTodos = async () => {

    const response = await fetch('todos/luigi.json'); 

    if(response.status != 200) {
        throw new Error('Cannot fetch the data');
    }

    const data = await response.json();
    return data;
};

getTodos()
    .then(data => console.log('resolved', data))
    .catch(error => console.log('rejected', error.message));

// Await is a method that substitute the .then(). It awaits so the request is fetched, and then execute the Javascript code. 
// Using this await method, we don't have to use .then().

// Async makes the function asynchronous and non blocking. Since we use await to block the code inside the {} until the request is done, the
// async garantees that the rest of the Javascript code still runs freely. 

// In this case, the luigi is requested before mario, the await garantees that it blocks the request of mario before luigi is done, but since
// we use async, the rest of the code is free ouside the {}.