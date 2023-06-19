// ! Preliminary operations

//  I get prev and next
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


// I get the gallery from the DOM
const gallery = document.querySelector('.gallery');

// preparing the images
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// preparing HTML for the images
let imageElements = '';

//for every source i create a tag img
for (let i = 0; i < sources.length; i++) {
    imageElements += `<img src=" ${sources[i]}" alt="Videogame ${i + 1}"> `;
}

// I insert the images into the DOM
gallery.innerHTML = imageElements;


// Preparing Index
let currentIndex = 0;
console.log (currentIndex);

// I get the images from the DOM
const images = document.querySelectorAll('#carousel img');

// setting up the first image as active 
images[currentIndex].classList.add('active');
console.log (images);


// ! Reasoning logic

// Set next button to listen
nextButton.addEventListener('click', function() {
    // Remove the active class from the current image
    images[currentIndex].classList.remove('active');

    // Increment the current index
    currentIndex++;

    // If the current index exceeds the last index, set it to 0 to wrap around
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Add the active class to the new currentIndex image
    images[currentIndex].classList.add('active');
});

// Set prev button to listen
prevButton.addEventListener('click', function() {
    // Remove the active class from the current image
    images[currentIndex].classList.remove('active');

    // Decrement the current index
    currentIndex--;

    // If the current index is less than 0, set it to the last index to wrap around
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    // Add the active class to the new currentIndex image
    images[currentIndex].classList.add('active');
});
