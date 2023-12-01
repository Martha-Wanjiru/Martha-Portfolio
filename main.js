// Read more button

document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(function(button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const modalcontainer = button.parentElement.querySelector(".additional-info-modal");
            modalcontainer.style.display = (modalcontainer.style.display === "block") ? "none" : "block";
        });
    });



// toggle icon bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

// scroll sections avtive link
let sections = document.querySelectorAll ('section');
let navLinks = document.querySelectorAll ('header nav a');

Window.onscroll = () => {
       sections.forEach(sec => {
        let top = Window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach (links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='  + id + ']').classList.add('active');
            });
        };
      });

//       sticky nav bar
let header =document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

//  remove toggle icon and navbar qwhen click navbar link (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
 };

//  scroll reveal
ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration:2000,
  delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-img h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-img p, .about-content', { origin: 'right' });
});

// typed js
const typed =new Typed('.multiple-text', {
  strings:['Frontend Developer.', 'Graphic Designer.', 'Video Editor.', 'Digital marketer.'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:true
});





    // document.getElementById('cvButton').addEventListener('click', function() {
    //     // Replace 'path_to_your_cv.pdf' with the actual path to your CV PDF file
    //     var pdfPath = 'path_to_your_cv.pdf';
    //     window.open(pdfPath);
    // });



// // Get the elements
// const readMoreBtn = document.querySelector('.read-more-btn');
// const shortDescription = document.querySelector('.short-description');
// const fullDescription = document.querySelector('.full-description');

// // Toggle the display of full description on button click
// readMoreBtn.addEventListener('click', function() {
//     if (fullDescription.style.display === 'none') {
//         fullDescription.style.display = 'block'; // Change the display to whatever is appropriate for your layout
//         shortDescription.style.display = 'none'; // Hide the short description
//         readMoreBtn.textContent = 'Read Less'; // Change button text to 'Read Less'
//     } else {
//         fullDescription.style.display = 'none'; // Hide the full description
//         shortDescription.style.display = 'block'; // Show the short description
//         readMoreBtn.textContent = 'Read More'; // Change button text back to 'Read More'
//     }
// });

