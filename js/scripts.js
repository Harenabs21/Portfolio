/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 



    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    //Typing animation
    var typed = new Typed(".multiple-text",{
        strings : ["Developer","Web Designer","Freelancer"],
        typeSpeed: 50,
        backSpeed : 50,
        backDelay:1000,
        loop : true
    })
    // grayscale animation when hovering the image
    var image = document.getElementById("myself");

image.addEventListener("mouseover", function() {
  image.style.filter = "none";
});

image.addEventListener("mouseout", function() {
  image.style.filter = "grayscale(100%)";
});
// Initialization Data AOS
AOS.init();
window.addEventListener('resize', function() {
    // Si la largeur de la fenêtre est inférieure à 768 pixels
    if (window.innerWidth < 768) {
      // Désactiver les animations AOS
      AOS.disable();
    } 
  });
//chart configuration with chartjs
const chartData = {
    labels : ["Frontend","Backend","Database"],
    data : [60,16,24]
}
const mychart = document.querySelector('.mychart');
new Chart(mychart,{
    type : "pie",
    data : {
        labels : chartData.labels,
        datasets : [{
            label : "skills",
            data : chartData.data,
            backgroundColor: ["#0ef", "#e63946", "#dfa408"],
            borderColor : "transparent"
        }]
    },
    options : {
        borderWidth : 10,
        borderRadius : 2,
        hoverBorderWidth : 0,
        plugins:{
            legend : {
                display : false
            }
        }
    }
   
})
//scrollTop event
let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos *100)/calcHeight);
    pos > 100 ? scrollProgress.style.display = "grid" : scrollProgress.style.display = "none";
    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = `conic-gradient(#1abc9c ${scrollValue}%, #2c3e50 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
//mastheading skaking animation parameter
const word = document.getElementsByClassName('masthead-heading');

for(let i =0; i< word.length;i++){
    word[i].addEventListener('animationend',()=>{
        word[i].classList.remove('animated');
    })
    word[i].addEventListener('mouseover',()=>{
        word[i].classList.add('animated')
    })
}
//loader js
const loader = document.getElementById("loader")
window.addEventListener('load',()=>{
    //document.body.style.display = "block";
    loader.style.display = "none";
})