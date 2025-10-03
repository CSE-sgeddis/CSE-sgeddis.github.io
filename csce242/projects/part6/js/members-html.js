document.addEventListener('DOMContentLoaded', function(){
    let membersData = [];
    let currentIndex = 0;

    
    const JSON_URL = 'https://CSE-sgeddis.github.io\csce242\projects\part6\json\members.json';

    // Fetch and load members data from JSON
    fetch(JSON_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            membersData = data;
            initializeMembers();
        })
        .catch(error => {
            console.error('Error loading members data:', error);
            document.querySelector('.current-member').textContent = 'Error loading data';
        });

    function initializeMembers() {
        if (membersData.length === 0) {
            console.error('No members data available');
            return;
        }

        // Create profile images
        createProfileImages();
        
        // Create member info sections
        createMemberInfoSections();
        
        // Show first member
        showMember(0);
        
        // Set up navigation
        setupNavigation();
    }

    function createProfileImages() {
        const container = document.getElementById('profileImagesContainer');
        container.innerHTML = '';

        membersData.forEach((member, index) => {
            const profileLink = document.createElement('a');
            profileLink.href = `#${member.memberId}`;
            profileLink.className = 'profile-image';
            profileLink.dataset.member = member.memberId;
            profileLink.dataset.index = index;

            const img = document.createElement('img');
            img.src = member.img_name;
            img.width = 200;
            img.height = 200;
            img.alt = member.name;

            const span = document.createElement('span');
            span.textContent = member.name;

            profileLink.appendChild(img);
            profileLink.appendChild(span);
            container.appendChild(profileLink);

            // Add click event
            profileLink.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                showMember(index);
            });
        });
    }

    function createMemberInfoSections() {
        const container = document.getElementById('memberContentContainer');
        container.innerHTML = '';

        membersData.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'member-info';
            memberDiv.id = member.memberId;

            memberDiv.innerHTML = `
                <h2>${member.name}</h2>

                <div class="member-stats">
                    <div class="stat-item">
                        <div class="stat-label">Position</div>
                        <div class="stat-value">${member.position}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Birthday</div>
                        <div class="stat-value">${member.birthday}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Height</div>
                        <div class="stat-value">${member.height}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Nationality</div>
                        <div class="stat-value">${member.nationality}</div>
                    </div>
                </div>

                <h3>About</h3>
                <p>${member.about}</p>
                ${member.about2 ? `<p>${member.about2}</p>` : ''}

                <h3>Career Highlights</h3>
                <p>${member.careerHighlights}</p>

                <h3>Fun Facts</h3>
                <p>${member.funFacts}</p>
            `;

            container.appendChild(memberDiv);
        });
    }

    function showMember(index) {
        if (index < 0 || index >= membersData.length) {
            console.error('Invalid member index:', index);
            return;
        }

        // Hide all member info
        const memberInfos = document.querySelectorAll('.member-info');
        const profileImages = document.querySelectorAll('.profile-image');
        
        memberInfos.forEach(info => info.classList.remove('active'));
        profileImages.forEach(img => img.classList.remove('active'));

        // Show selected member
        const memberId = membersData[index].memberId;
        const memberInfo = document.getElementById(memberId);
        const profileImage = document.querySelector(`[data-member="${memberId}"]`);

        if (memberInfo) {
            memberInfo.classList.add('active');
        }
        if (profileImage) {
            profileImage.classList.add('active');
        }

        // Update pagination
        const currentMemberSpan = document.querySelector('.current-member');
        currentMemberSpan.textContent = `${membersData[index].name} (${index + 1}/${membersData.length})`;
        currentIndex = index;

        // Scroll to member content
        const memberContent = document.querySelector('.member-content');
        if (memberContent) {
            memberContent.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    function setupNavigation() {
        const prevButton = document.querySelector('.prev-member');
        const nextButton = document.querySelector('.next-member');

        if (prevButton) {
            prevButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                navigateMember(-1);
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                navigateMember(1);
            });
        }
    }

    function navigateMember(direction) {
        let newIndex = currentIndex + direction;

        if (newIndex < 0) {
            newIndex = membersData.length - 1;
        } else if (newIndex >= membersData.length) {
            newIndex = 0;
        }

        showMember(newIndex);
    }

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('footer nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
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