let currentImageIndex = 0;
const images = document.querySelectorAll('.thumbnail'); // Get all the gallery images

// Open the lightbox and load the specific image index passed to it
function openLightbox(index) {
    document.getElementById('lightbox').style.display = 'block';
    showImage(index); 
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function showImage(index) {
    // Handle wrap-around bounds safely
    if (index < 0) {
        currentImageIndex = images.length - 1;
    } else if (index >= images.length) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = index;
    }
    
    // Update the lightbox image source with the correct thumbnail source
    document.getElementById('lightboxImage').src = images[currentImageIndex].src;
}

function changeImage(direction) {
    showImage(currentImageIndex + direction);
}

// Automatically attach click event listeners to all thumbnails (cleaner than inline onclick)
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        openLightbox(index);
    });
});