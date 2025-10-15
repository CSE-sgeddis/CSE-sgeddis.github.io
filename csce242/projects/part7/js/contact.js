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