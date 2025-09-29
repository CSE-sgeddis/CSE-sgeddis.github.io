document.addEventListener('DOMContentLoaded', function(){
    let currentLightboxIndex = 0;
    const mediaItems = document.querySelectorAll('.media-item');

    //Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            mediaItems.forEach(item => {
                if (filter == 'all' || item.dataset.category == filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

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

        document.getElementById('lightboxModal').style.display = 'flex';
    };

    window.closeLightbox = function(){
        document.getElementById('lightboxModal').style.display = 'none';
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