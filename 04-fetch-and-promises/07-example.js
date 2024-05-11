const URL = "https://gist.githubusercontent.com/ironhack-edu/8b7c90c909f70039e9f21c8ee191b0e5/raw/dc911f6c563a8514bbefc4d23b5ae252723e5162/products.json";

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('data', data)
    data.forEach((product) => {
      const body = document.querySelector('body');
      const img = document.createElement('img');
      img.src = product.images[0];
      body.appendChild(img)
    })
  })
  .catch((error) => {})