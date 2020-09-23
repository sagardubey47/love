
const navSlide = () => {

    const burger  = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        //toggle nav-links
       nav.classList.toggle("nav-active");

       // animate nav-links

       const navLinks = document.querySelectorAll(".nav-links li");

       navLinks.forEach((link , index) => {
           
           if(link.style.animation) {
               link.style.animation = '';
           } else {
               link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.6}s`;
               
           }
           
       });

        burger.classList.toggle("toggle");
       
    });
}

navSlide();