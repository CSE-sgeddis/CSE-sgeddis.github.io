document.addEventListener('DOMContentLoaded', function(){
    const profileImages = document.querySelectorAll('.profile-image');
    const memberInfos = document.querySelectorAll('.member-info');
    const currentMemberSpan = document.querySelector('.current-member');
    const preButton = document.querySelector('.prev-member');
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
        //Hide Member info
        memberInfos.forEach(info => info.classList.remove('active'));
        profileImages.forEach(img => img.classList.remove('active'));

        //Show selected member
        const memberId = members[index].id;
        const memberInfo = document.getElementById(memberId);
        const profileImage = document.querySelector(`[data-member="${memberId}"]`);

        if (memberInfo) memberInfo.classList.add('active');
        if (profileImage) profileImage.classList.add('active');

        // update pagination
        currentMemberSpan.textContent = `${members[index].name} (${index + 1}/8)`;
        currentIndex = index;
    }

    //Profile image clicks
    profileImages.forEach((img, index) => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            showMember(index);
        });
    });

    //Pagination buttons
    prevButton.addEventListener('click', function(){
        const newIndex = currentIndex > 0 ? currentIndex - 1 : members.length - 1;
        showMember(newIndex);
    });

    nextButton.addEventListener('click', function(){
        const newIndex = currentIndex < members.length - 1 ? currentIndex + 1 : 0;
        showMember(newIndex);
    });

    //Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('footer nav ul');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});