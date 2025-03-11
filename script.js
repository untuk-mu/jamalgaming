window.addEventListener('resize', function() {
    const img = document.querySelector('.fullscreen-image');
    img.style.width = window.innerWidth + 'px';
    img.style.height = window.innerHeight + 'px';
});
