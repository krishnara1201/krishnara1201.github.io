// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let cursorVisible = false;

document.addEventListener('mousemove', (e) => {
    // Show cursor on first mouse movement with a slight delay
    if (!cursorVisible) {
        setTimeout(() => {
            cursor.classList.add('visible');
            cursorFollower.classList.add('visible');
            cursorVisible = true;
        }, 100); // 100ms delay to prevent flash
    }
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 50);
});

// Hide cursor when mouse leaves the window
document.addEventListener('mouseleave', () => {
    cursor.classList.remove('visible');
    cursorFollower.classList.remove('visible');
    cursorVisible = false;
});

// Show cursor when mouse enters the window
document.addEventListener('mouseenter', () => {
    if (cursorVisible) {
        cursor.classList.add('visible');
        cursorFollower.classList.add('visible');
    }
});

// Enlarge cursor on hoverable elements
const hoverables = document.querySelectorAll('a, button, .project-img, .social-links a');
hoverables.forEach(hoverable => {
    hoverable.addEventListener('mouseenter', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursorFollower.style.width = '50px';
        cursorFollower.style.height = '50px';
    });
    hoverable.addEventListener('mouseleave', () => {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.project, .about-grid, .contact-grid, .section-header, .experience');

const revealElement = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealElement);
window.addEventListener('load', revealElement);

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        
        // Create FormData object
        const formData = new FormData(contactForm);
        
        // Send data using Fetch API
        fetch('https://formspree.io/f/xdkgwjdy', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Form submitted successfully');
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Form submission failed. Please try again.');
        });
    });
}

// Add this to your CSS file
document.head.insertAdjacentHTML('beforeend', `
<style>
.project, .about-grid, .contact-grid, .experience, .section-header {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.project.revealed,.experience.revealed,.about-grid.revealed, .contact-grid.revealed, .section-header.revealed {
    opacity: 1;
    transform: translateY(0);
}
</style>
`);
