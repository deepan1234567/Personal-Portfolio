// JavaScript code for any interactive features

// Example of a POST request to submit the contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Get form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Create an HTTP request
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/contact', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  // Set up the response handler
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert('Message sent successfully!');
    } else {
      alert('An error occurred. Please try again.');
    }
  };

  // Send the request
  xhr.send('name=' + encodeURIComponent(name) +
    '&email=' + encodeURIComponent(email) +
    '&message=' + encodeURIComponent(message));
});
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Sticky navigation bar
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var stickyNav = document.querySelector('.sticky-nav');
  var body = document.querySelector('body');

  if (window.pageYOffset > header.offsetHeight) {
    stickyNav.classList.add('d-block');
    body.classList.add('sticky-nav-padding');
  } else {
    stickyNav.classList.remove('d-block');
    body.classList.remove('sticky-nav-padding');
  }
});
// Smooth Scrollspy
document.addEventListener('scroll', function () {
  var sections = document.querySelectorAll('section');
  var scrollPosition = window.pageYOffset;

  sections.forEach(function (current) {
    if (current.offsetTop <= scrollPosition + 200 && (current.offsetTop + current.offsetHeight) > scrollPosition) {
      var navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(function (link) {
        if (current.getAttribute('id') === link.getAttribute('href').substring(1)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
});
// Example of using AOS library
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});
$(document).ready(function() {
  // Select the projects section and apply the animation
  $("#projects").animate(
    {
      top: "50px", // Adjust the desired floating distance
      opacity: "0.8", // Adjust the desired opacity
    },
    2000, // Adjust the desired animation duration
    "easeOutQuad" // Adjust the desired easing effect
  );
});
jQuery(document).ready(function($) {
  // Select the projects section and apply the animation
  $("#projects").animate(
    {
      top: "50px", // Adjust the desired floating distance
      opacity: "0.8", // Adjust the desired opacity
    },
    2000, // Adjust the desired animation duration
    "easeOutQuad" // Adjust the desired easing effect
  );
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
