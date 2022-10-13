let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let modelSlides = document.getElementsByClassName("modelSlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (n > modelSlides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = modelSlides.length}
  for (i = 0; i < modelSlides.length; i++) {
    modelSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  modelSlides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Select increment and decrement buttons
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

// Select total count
const totalCount = document.getElementById("count-result");

// Variable to track count
var count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
function handleIncrement (){
  count++;
  totalCount.innerHTML = count;
};

// Function to decrement count
function handleDecrement(){
  count--;
  totalCount.innerHTML = count;
};

// Add click event to buttons
plus.addEventListener("click", handleIncrement);
minus.addEventListener("click", handleDecrement);
