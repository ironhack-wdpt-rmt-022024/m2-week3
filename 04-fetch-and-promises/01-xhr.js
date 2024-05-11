const API_URL_MISSIONS = "https://api.spacexdata.com/v3/missions";

const xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
  if (xhr.status == 200) {  // status 200 means the request was successful

    const data = JSON.parse(xhr.responseText);
    console.log("Mission Data received: ", data);
    
  } else {
    console.log(`Error: HTTP request failed with status ${xhr.status}`);
  }
});

xhr.addEventListener('error', function() {
  console.log('An error occurred while making the request.');
});

xhr.open("GET", "https://api.spacexdata.com/v3/missions", true);
xhr.send();