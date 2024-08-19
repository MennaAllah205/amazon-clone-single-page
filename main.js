// Select all necessary elements
const imgs = document.querySelectorAll('.header-slider ul img'); // Use querySelectorAll to select all images
const prevBtn = document.querySelector('.control-prev');
const nextBtn = document.querySelector('.control-next');

let n = 0; // Track the current slide index

// Function to show the current slide
function changeSlide() {
	for (let i = 0; i < imgs.length; i++) {
		imgs[i].style.display='none';
		
	}
	imgs[n].style.display='block'
}

// Initialize the slider by showing the first slide
changeSlide();

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
    n = (n > 0) ? n - 1 : imgs.length - 1; // Move to the previous slide or loop to the last
    changeSlide(); // Update the displayed slide
});

// Event listener for the next button
nextBtn.addEventListener('click', () => {
    n = (n < imgs.length - 1) ? n + 1 : 0; // Move to the next slide or loop to the first
    changeSlide(); // Update the displayed slide
});
