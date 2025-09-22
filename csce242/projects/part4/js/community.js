document.addEventListener('DOMContentLoaded', function() {
    //Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('footer nav ul');

    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

})