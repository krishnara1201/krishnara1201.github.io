// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 50);
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
        e.preventDefault();
        
        // In a real scenario, you would send this data to a server
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        console.log('Form submitted:', formData);
        
        // Show success message (you can replace this with a better UI feedback)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
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
