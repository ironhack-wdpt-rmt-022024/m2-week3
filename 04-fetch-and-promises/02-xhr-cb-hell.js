const API_URL_MISSIONS = "https://api.spacexdata.com/v3/missions";
const API_URL_LAUNCHES = "https://api.spacexdata.com/v5/launches";

const xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {
  if (xhr.status == 200) {
    const data = JSON.parse(xhr.responseText);
    console.log("Mission Data received: ", data);

    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", API_URL_LAUNCHES, true);

    xhr2.addEventListener('load', function() {
      if (xhr2.status == 200) {
        const launchesData = JSON.parse(xhr2.responseText);
        console.log("Launches Data received: ", launchesData);

        // Render the launches data
        data.forEach((launch) => {
          if (!launch.links || !launch.links.patch || !launch.links.patch.small) {
            return;
          }

          const launchPatch = document.createElement("img");
          launchPatch.src = launch.links.patch.small;
          const container = document.getElementById("container");
          container.appendChild(launchPatch);
        });
      }
    });

    xhr2.send();
  } else {
    console.log(`Error: HTTP request failed with status ${xhr.status}`);
  }
});

xhr.addEventListener('error', function() {
  console.log('An error occurred while making the request.');
});

xhr.open("GET", API_URL_MISSIONS, true);
xhr.send();