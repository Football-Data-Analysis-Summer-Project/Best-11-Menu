document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.clientX - 10}px`; 
    cursor.style.top = `${e.clientY - 10}px`;
});

document.querySelectorAll('.team-button, .navbar-brand').forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.querySelector('.cursor').classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', () => {
        document.querySelector('.cursor').classList.remove('cursor-hover');
    });
});