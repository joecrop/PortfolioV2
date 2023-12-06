// refresh the page every day
setTimeout(function() {
    window.location.reload();
}, 1000 * 60 * 60 * 24);
    


// Function to change the image every 10 minutes
async function changeImage() {

  let path = "";
  while(path.length === 0) {
    // generate a random between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    try {
        await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = `matted/${randomNumber}.png`;
      });
      path = `matted/${randomNumber}.png`;
    } catch (error) {
      try {
        await new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = `matted/${randomNumber}.jpg`;
        });
        path = `matted/${randomNumber}.jpg`;
      } catch (error) {
        path = "";
      }
    }
  }
  
  // Set the current image
  document.body.style.backgroundImage = `url('${path}')`;
}

// Get a new image
changeImage();