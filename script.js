const gallery = document.getElementById('gallery');

// List of images
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
    'images/image10.jpg',
    'images/image11.jpg',
    'images/image12.jpg',
    'images/image13.jpg',
    'images/image14.jpg',
    'images/image15.jpg',
    'images/image16.jpg',
    'images/image17.jpg',
    'images/image18.jpg',
    'images/image19.jpg',
    'images/image20.jpg',
    'images/image21.jpg',
    'images/image22.jpg',
    'images/image23.jpg',
    'images/image24.jpg',
    'images/image25.jpg'
];

// Function to load images into the gallery
function loadImages() {
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        gallery.appendChild(img);
    });
}

// Load images when the page loads
window.onload = loadImages;