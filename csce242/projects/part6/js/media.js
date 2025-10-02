document.addEventListener('DOMContentLoaded', function(){
    let currentLightboxIndex = 0;
    const mediaItems = document.querySelectorAll('.media-item');

    //Lightbox functionality
    window.openLightbox = function(element){
        const img = element.querySelector('img');
        const title = element.querySelector('.media-title').textContent;
        const date = element.querySelector('.media-date').textContent;

        document.getElementById('lightboxImage').src = img.src;
        document.getElementById('lightboxTitle').textContent = title;
        document.getElementById('lightboxDate').textContent = date;

        //Find current index
        currentLightboxIndex = Array.from(mediaItems).indexOf(element);

        const modal = document.getElementById('lightboxModal');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function(){
        const modal = document.getElementById('lightboxModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    window.navigateLightbox = function(direction){
        const visibleItems = Array.from(mediaItems).filter(item =>
            item.style.display !== 'none'      
        );

        currentLightboxIndex += direction;
        if (currentLightboxIndex < 0) currentLightboxIndex = visibleItems.length - 1;
        if (currentLightboxIndex >= visibleItems.length) currentLightboxIndex = 0;

        openLightbox(visibleItems[currentLightboxIndex]);
    };
    
    //Hamburger menu
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