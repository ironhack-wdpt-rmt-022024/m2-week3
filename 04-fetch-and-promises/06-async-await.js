// ES 2017
// async await

// 'async' keyword is used to create async functions
// async functions allow us to use 'await' keyword to handle promises

const API_URL_LAUNCHES = "https://api.spacexdata.com/v5/launches";


// We first need a async function wrapper

async function doAsyncWork () {
  try {
    const response = await fetch(API_URL_LAUNCHES);

    const data = await response.json();
    const container = document.querySelector('#container');
  
    // Loop over the data array
    data.forEach((obj) => {
      // Create a new img element and set its source to show the patch image  
      const img = document.createElement('img');
      img.src = obj.links.patch.small;
      
      // Append new image to the container div
      container.appendChild(img);
    })
  }
  catch (error) {
    console.log('error', error)
  }
}

doAsyncWork();
