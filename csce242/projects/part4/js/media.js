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


    // video modal functionality
    const videoData = {
       'LALALALA': {
            title: 'Stray Kids "LALALALA" M/V',
            description: 'The energetic title track from ROCK-STAR album',
            embedId: 'https://www.youtube.com/embed/dBDkYofMUs4?si=v6YIgtTGTWldldGa' 
        },
        'S-Class': {
            title: 'Stray Kids "S-Class" M/V', 
            description: 'Lead single from the 5-STAR album',
            embedId: 'https://www.youtube.com/embed/JsOOis4bBFg?si=C-asC58p7I6Wm6-O'
        },
        'MANIAC': {
            title: 'Stray Kids "MANIAC" M/V',
            description: 'Title track from ODDINARY album',
            embedId: 'https://www.youtube.com/embed/OvioeS1ZZ7o?si=AXgw4boyWEwpEZmE'
        },
        'Thunderous': {
            title: 'Stray Kids "Thunderous" M/V',
            description: 'Powerful title track from NOEASY album',
            embedId: 'https://www.youtube.com/embed/EaswWiwMVs8?si=tdc65utbbKHnBJhx'
        }
    };
             
    window.playVideo = function(videoKey) {
        const video = videoData[videoKey];
        if (!video) return;

        document.getElementById('videoModalTitle').textContent = video.title;
        document.getElementById('videoModalDescription').textContent = video.description;
        document.getElementById('videoFrame').src = `https://www.youtube.com/embed/${video.embedId}?autoplay=1`;

        document.getElementById('videoModal').style.display = 'block';
    };

    window.closeVideoModal = function(){
        document.getElementById('videoModal').style.display = 'none';
        document.getElementById('videoFrame').src = '';
    };

    //Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const lightboxModal = this.document.getElementById('lightboxModal');
        const videoModal = this.document.getElementById('videoModal');

        if (event.target == lightboxModal){
            closeLightbox();
        }
        if (event.target == videoModal){
            closeVideoModal();
        }
    });

    //Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('footer nav ul');

    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});