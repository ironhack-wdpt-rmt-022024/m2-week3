const API_URL_LAUNCHES = "https://api.spacexdata.com/v5/launches";

fetch(API_URL_LAUNCHES)
  .then((response) => {
    console.log('response', response);
    return response.json(); // Create a promise and return for chaining
  })
  .then((data) => {
    console.log('data', data);

    const container = document.querySelector('#container');
    
    // Loop over the data array
    data.forEach((obj) => {
      // Create a new img element and set its source to show the patch image  
      const img = document.createElement('img');
      img.src = obj.links.patch.small;
      
      // Append new image to the container div
      container.appendChild(img);
    })

  })
  .catch((error)=> {
    console.log('error', error)
  })