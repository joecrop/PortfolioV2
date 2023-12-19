// Check if we are near midnight once every 2 hours
setInterval(function() {
  // is the date within 1 hour of midnight?
  if(new Date().getHours() === 0) {
    // reload the page
    window.location.reload();
  }
}, 1000 * 60 * 60 * 2);

async function getImageDimensions(src){
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve({height: img.height, width: img.width})
    img.onerror = reject
    img.src = src
  })
}


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
        img.src = `originals/${randomNumber}.png`;
      });
      path = `originals/${randomNumber}.png`;
    } catch (error) {
      try {
        await new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = `originals/${randomNumber}.jpg`;
        });
        path = `originals/${randomNumber}.jpg`;
      } catch (error) {
        path = "";
      }
    }
  }

  // calculate dimensions
  const dimensions = await getImageDimensions(path);

  const totalHeight = window.innerHeight;
  const totalWidth = window.innerWidth;
  let artWidth = 0;
  let artHeight = 0;
  if(dimensions.height/totalHeight > dimensions.width/totalWidth) {
    // shrink height and scale width accordingly
    artHeight = totalHeight * 0.95;
    const scale = artHeight / dimensions.height;
    artWidth = dimensions.width * scale;
  } else {
    // shrink width and scale height accordingly
    artWidth = totalWidth * 0.95;
    const scale = artWidth / dimensions.width;
    artHeight = dimensions.height * scale; 
  }

  // Set the current image
  document.getElementById("art").src = path;
  // Set the width and height of the image
  console.log(dimensions)
  document.getElementById("art").style.width = artWidth + "px";
  document.getElementById("art").style.height = artHeight + "px";
  document.getElementById("content").style.width = artWidth + "px";
  document.getElementById("content").style.height = artHeight + "px";
  document.getElementById("content").style.display = "block";
  
}

// Get a new image
changeImage();

document.body.addEventListener("click", changeImage);