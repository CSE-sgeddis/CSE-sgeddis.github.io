document.addEventListener('DOMContentLoaded', function(){
    const profileImages = document.querySelectorAll('.profile-image');
    const memberInfos = document.querySelectorAll('.member-info');
    const currentMemberSpan = document.querySelector('.current-member');
    const prevButton = document.querySelector('.prev-member');
    const nextButton = document.querySelector('.next-member');

    let currentIndex = 0;
    const members = [
        { name: 'Bang Chan', id:'bangchan'},
        { name: 'Lee Know', id: 'leeknow'},
        { name: 'Changbin', id: 'changbin'},
        { name: 'Hyunjin', id: 'hyunjin'},
        { name: 'Han', id: 'han'},
        { name: 'Felix', id: 'felix'},
        { name: 'Seungmin', id: 'seungmin'},
        { name: 'I.N', id: 'jeongin'}
    ];

    function showMember(index){
        if (index < 0 || index >= members.length){
            console.error('Invalid member index:', index);
            return;
        }
        //Hide Member info
        memberInfos.forEach(info => info.classList.remove('active'));
        profileImages.forEach(img => img.classList.remove('active'));

        //Show selected member
        const memberId = members[index].id;
        const memberInfo = document.getElementById(memberId);
        const profileImage = document.querySelector(`[data-member="${memberId}"]`);

        if (memberInfo) {
            memberInfo.classList.add('active');
        }
        if (profileImage) {
            profileImage.classList.add('active');
        }

        // update pagination
        currentMemberSpan.textContent = `${members[index].name} (${index + 1}/8)`;
        currentIndex = index;

        const memberContent = document.querySelector('.member-content');
        if (memberContent){   
            memberContent.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }

    window.showMember = showMember;

    //Profile image clicks
    profileImages.forEach((img, index) => {
        img.removeAttribute('onclick');

        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showMember(index);
        });
    });

    function navigateMember(direction){
        let newIndex = currentIndex + direction;

        if (newIndex < 0){
            newIndex = members.length - 1;
        } else if (newIndex >= members.length){
            newIndex = 0;
        }

        showMember(newIndex);
    }

    window.navigateMember = navigateMember;
    //Pagination buttons
    if (prevButton) {
        prevButton.removeAttribute('onclick');
        
        prevButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navigateMember(-1);
        });
    }
    
    if (nextButton) {
        nextButton.removeAttribute('onclick');
        
        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navigateMember(1);
        });
    }

    // Initialize with Bang Chan (first member)
    showMember(0);

    //Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('footer nav ul');

    if (hamburger && navMenu){
        hamburger.addEventListener('click', function(e){
            e.stopPropagation();
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
}});