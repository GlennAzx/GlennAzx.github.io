// Scroll animation
const scrollBtn = document.createElement('div');
scrollBtn.className = 'scroll-down';
scrollBtn.innerHTML = '↓';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Elevator effect
const elevator = new Elevator({
    element: document.querySelector('.back-to-top'),
    duration: 1000,
    mainAudio: 'elevator.mp3',
    endAudio: 'ding.mp3'
});
