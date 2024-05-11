// 1. Calling fetch() makes a request to the server/API
// 2. fetch() returns a Promise -> Promise is a wrapper around an asynchronous operation 
// 3. Once the request Promise is resolved or rejected, we can consume it:
//  - .then() -> specify what to do if the request is fullfilled (successful)
//  - .catch() -> specify what to do in case of a request error (rejected)

// Promise can be in one of 3 states: 1. pending 2. fullfiled (resolved) 3. rejected (failed)

const API_URL_MISSIONS = "https://api.spacexdata.com/v3/missions";

fetch(API_URL_MISSIONS) // HTTP Request
  .then((response)=> {
    console.log('response', response);

    return response.json(); // Create a promise and return for chaining
  })
  .then((data) => {
    console.log('data', data)
    // Loop over the array with data objects
    data.forEach((obj) => {
      // Get the container div
      const container = document.querySelector('#container');
      // Create a new p element and add mission_name text to it
      const p = document.createElement('p');
      p.textContent = obj.mission_name;
      // Append it to the container div element to show it
      container.appendChild(p)
    })
  })
  .catch((error)=> {
    console.log('error', error)
  })