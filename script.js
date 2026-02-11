// script.js

// Function to create confetti effect
function createConfetti() {
    const colors = ['#ff0', '#0f0', '#00f', '#f0f', '#f00'];
    const numParticles = 100;
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('confetti');
        particle.style.position = 'absolute';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(particle);
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const animationDuration = Math.random() * 2000 + 2000;
    particle.animate([
        { transform: 'translateY(0)', opacity: 1 },
        { transform: `translateY(${Math.random() * 800}px)`, opacity: 0 }
    ], {
        duration: animationDuration,
        easing: 'ease-out'
    });

    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Function to trigger fun animations on click
function triggerFun() {
    const funElement = document.getElementById('funElement'); // This element should be in your HTML
    funElement.classList.add('animate'); // Ensure you have an appropriate CSS animation for this class
    createConfetti();
}

// Add click event listener to the button
document.getElementById('birthdayButton').addEventListener('click', triggerFun);