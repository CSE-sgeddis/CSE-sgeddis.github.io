document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('footer nav ul');

    if (hamburger && navMenu){
        hamburger.addEventListener('click', function(){
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', function(e){
            if(!hamburger.contains(e.target) && !navMenu.contains(e.target)){
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});