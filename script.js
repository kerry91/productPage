function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
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
  if(count === 0){
    return false
  }
  else{
    count--;
  }

  totalCount.innerHTML = count;
};


const button = document.getElementById("add2cart");
const hideEmptyCartTxt = document.getElementById('emptyCartTxt')
const box = document.getElementsByClassName("box");
const ul = document.querySelector("ul");
const dPrice = document.getElementById('d-price').textContent;
const ePrice = dPrice * count.value;
const cartCheckout = document.getElementById('cartCheckout');

function createCartElement (){
  const li = document.createElement("li"); //creates LI
  var img = document.createElement("img");
  var text = document.createElement("p");
  var priceInfo = document.createElement("p");
  var span = document.createElement("span"); // creates Span
  var btn = document.createElement("button"); // creates button tag
  var icon = document.createElement("i")
  hideEmptyCartTxt.style.visibility = "hidden";
  cartCheckout.style.visibility = "visible";
  btn.setAttribute("class", "box");
  icon.setAttribute("class", "fa-solid fa-trash-can");
  img.setAttribute("src", "images/image-product-1-thumbnail.jpg");
  text.setAttribute("class", "cartText");
  text.innerHTML = "Fall Limited Edition...";
  priceInfo.setAttribute("class", "cartPrice");
  priceInfo.innerHTML = `${dPrice}  X ${count}   ${ePrice}`;
  img.style.width = "50px";
  img.style.height = "50px";
  img.style.float = "left";
  li.appendChild(span); // adds the span inside the LI
  span.appendChild(img);
  span.appendChild(text);
  text.appendChild(priceInfo);
  span.appendChild(btn); // adds the button inside the LI
  btn.appendChild(icon);
  ul.appendChild(li); // appends the LI to the UL


  //Add functionality to remove the li item with the X button
    for (var i = 0; i < box.length; i++) {
      var delLi = box[i];
      delLi.addEventListener("click", function(event) {
        event.currentTarget.parentElement.remove();
        hideEmptyCartTxt.style.visibility = "visible";
        cartCheckout.style.visibility = "hidden";
      });
    }
    console.log(ePrice, dPrice, count);
  }

  function addListAfterClick() {
  let i = 1;
  if (i = 1) {
    createCartElement();
  }
  else{
    console.log("error");
  }

}


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


// Add click event to buttons
plus.addEventListener("click", handleIncrement);
minus.addEventListener("click", handleDecrement);
button.addEventListener("click", addListAfterClick);
