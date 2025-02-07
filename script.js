// script.js

// Function to handle button click events
// Function to handle option selection


function selectOption(option) {
    
    if (option === 'yes') {
        // Flash rainbow colors
        var yesSound = new Audio('yes-sound.mp3'); // Assuming the file exists
        yesSound.volume = 0.3;
        yesSound.play();
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
                    // Play a sound effect each time "No" is clicked

            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'SICHER??'; 
        
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
        
        // Play a sound effect each time "No" is clicked
        var noSound = new Audio('no-sound.mp3'); // Assuming the file exists
        noSound.volume = 0.3;
        noSound.play();
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    
    // Get the container where the content will be displayed
    var imageContainer = document.getElementById('image-container');
    
    // Create a new text element above the image
    var topText = document.createElement('div');
    topText.textContent = 'Yippieeeeeeeeeeeeeeeeeeeh';
    topText.style.position = 'absolute';
    topText.style.fontSize = '100px';
    topText.style.fontWeight = 'bold';
    
    // Function to animate the text movement
    let xPos = 0;
    let yPos = 0;
    let xDirection = 1;
    let yDirection = 1;
    function moveText() {
        xPos += xDirection * 5;
        yPos += yDirection * 5;
        
        if (xPos > window.innerWidth - 200 || xPos < 0) xDirection *= -1;
        if (yPos > window.innerHeight - 50 || yPos < 0) yDirection *= -1;
        
        topText.style.left = xPos + 'px';
        topText.style.top = yPos + 'px';
        requestAnimationFrame(moveText);
    }
    requestAnimationFrame(moveText);
    
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.style.display = 'block';
    catHeartImage.style.margin = '0 auto';
    catHeartImage.style.transition = 'transform 1s ease-in-out';
    
    // Function to animate the image size
    let scale = 1;
    let growing = true;
    function animateImageSize() {
        if (growing) {
            scale += 0.1;
            if (scale >= 1.5) growing = false;
        } else {
            scale -= 0.1;
            if (scale <= 1) growing = true;
        }
        catHeartImage.style.transform = `scale(${scale})`;
        setTimeout(animateImageSize, 1000);
    }
    
    // Create a new text element below the image
    var bottomText = document.createElement('div');
    bottomText.textContent = 'Ich liebe dich <3';
    bottomText.style.textAlign = 'center';
    bottomText.style.fontSize = '40px';
    bottomText.style.fontWeight = 'bold';
    
    // Create an audio element for background music
    var audio = document.createElement('audio');
    audio.src = 'background-music.mp3'; // Assuming the music file is named "background-music.mp3"
    audio.autoplay = true;
    audio.loop = true;
    
    // When the cat-heart image is fully loaded, add everything to the container
    catHeartImage.onload = function() {
        document.body.appendChild(topText);
        imageContainer.appendChild(catHeartImage);
        imageContainer.appendChild(bottomText);
        imageContainer.appendChild(audio);
        animateImageSize();
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}



// Display the cat.gif initially
displayCat();
