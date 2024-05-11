// Promise.all( [] ) - used for grouping multiple promises
// and listeneing for their fullfilment or rejection

const API_URL_MISSIONS = "https://api.spacexdata.com/v3/missions";
const API_URL_LAUNCHES = "https://api.spacexdata.com/v5/launches";

const pr1 = fetch(API_URL_MISSIONS);
const pr2 = fetch(API_URL_LAUNCHES);
console.log('pr1', pr1)
console.log('pr2', pr1)


Promise.all( [ pr1, pr2 ] )
  .then(( [response1, response2] ) => {

    const prJson1 = response1.json();
    const prJson2 = response2.json();
    
    return Promise.all( [prJson1, prJson2 ] )
  })
  .then(( [data1, data2] ) => {
    console.log('data1', data1)
    console.log('data2', data2)

    const container = document.querySelector('#container');

    // Loop over response 1 data and show it
    data1.forEach((obj) => {
      const h2 = document.createElement('h2');
      h2.textContent = obj.mission_name;
      container.appendChild(h2);
    })

    // Loop over response 2 data and show images
    data2.forEach((obj) => {
      const img = document.createElement('img');
      img.src = obj.links.patch.small;
      container.appendChild(img);
    })

  })
  .catch((error) => {
    console.log('error', error);
  })


