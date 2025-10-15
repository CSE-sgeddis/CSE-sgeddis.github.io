document.addEventListener('DOMContentLoaded', function() {
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

    const commCards = document.querySelectorAll('.comm-card');
    commCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
})
//Contact Form
const contactForm = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');
            const submitBtn = document.getElementById('submitBtn');

            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const formData = new FormData(contactForm);
                const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                };

                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';

                try {
                    // Replace YOUR_EMAIL with your actual email address
                    const response = await fetch('https://formsubmit.co/shalindixon@gmail.com', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });

                    if (response.ok) {
                        formMessage.className = 'form-message success show';
                        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
                        contactForm.reset();
                    } else {
                        throw new Error('Form submission failed');
                    }
                } catch (error) {
                    formMessage.className = 'form-message error show';
                    formMessage.textContent = 'Oops! Something went wrong. Please try again later.';
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';

                    setTimeout(() => {
                        formMessage.classList.remove('show');
                    }, 5000);
                }
            });