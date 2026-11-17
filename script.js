// Open and close the mobile nav menu with javascript
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navMenu = document.getElementById("navMenu");

// Open the side Menu
menuBtn.addEventListener('click' , ()=>{
    navMenu.classList.add("active");
});

//Close the side menu with the x button inside it
closeBtn.addEventListener("click" , ()=>{
    navMenu.classList.remove("active")
})

// Close the menu when a link clikced
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link)=>{
    link.addEventListener("click" , ()=>{
        navMenu.classList.remove("active");
    })
})


