const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=> {
        // Palanca de navegacion
        nav.classList.toggle('nav-active');

        //Anamacion de los links
        navLinks.forEach((link, index) => {
           if(link.style.animation){
               link.style.animation = ''
           }else{
            link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;
           }
        });
        // Burger animacion 
        burger.classList.toggle('toggle');

    });
}

navSlide()

// Navegador