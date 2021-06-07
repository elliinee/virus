let lang = document.querySelector('.lang-click');
let drop = document.querySelector('.drop-lang');
lang.onclick = function(){
    drop.classList.toggle('db');
}

// let ru = document.querySelector('.ru');
// let en = document.querySelector('.en');
// let chi = document.querySelector('.chi');
// en.onclick = function(){
//     ru.textContent = "en";
// }




// nav
window.onscroll = function() {myFunction()};
var nav = document.querySelector(".nav");
var sticky = nav.offsetTop;
function myFunction() {
  if (window.pageYOffset >= 300) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}



// lang









// Add smooth scrolling to all links
$("a").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
} // End if
});



