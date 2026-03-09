// script.js

// JavaScript functionality for photo gallery

// Array of image objects
const images = [
    { src: 'image1.jpg', alt: 'Image 1 description' },
    { src: 'image2.jpg', alt: 'Image 2 description' },
    { src: 'image3.jpg', alt: 'Image 3 description' },
    // Add more images as needed
];

// Function to create image elements
function createImageElement(image) {
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    return img;
}

// Function to display images in the gallery
function displayGallery() {
    const gallery = document.getElementById('gallery');
    images.forEach(image => {
        const imgElement = createImageElement(image);
        gallery.appendChild(imgElement);
    });
}

// Call the displayGallery function on page load
window.onload = displayGallery;