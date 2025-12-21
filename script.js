document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburger
    const hb = document.getElementById('hamburger');
    const menu = document.getElementById('nav-menu');
    hb.addEventListener('click', () => menu.classList.toggle('active'));

    // Slider
    const wrap = document.getElementById('slider-wrapper');
    const slides = document.querySelectorAll('.slider-item');
    const next = document.getElementById('nextBtn');
    const prev = document.getElementById('prevBtn');

    if(wrap && slides.length > 0) {
        let i = 0;
        const update = () => wrap.style.transform = `translateX(${-i * 100}%)`;
        next.addEventListener('click', () => { i = (i + 1) % slides.length; update(); });
        prev.addEventListener('click', () => { i = (i - 1 + slides.length) % slides.length; update(); });
        setInterval(() => { i = (i + 1) % slides.length; update(); }, 5000);
    }
});
