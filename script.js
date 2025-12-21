document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    const buttons = document.querySelectorAll('.toggle-anggota');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const list = this.nextElementSibling;
            const isHidden = list.style.display === 'none' || list.style.display === '';
            list.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Sembunyikan Anggota' : 'Lihat Anggota';
        });
    });

    const wrapper = document.getElementById('slider-wrapper');
    const slides = document.querySelectorAll('.slider-item');
    if (wrapper && slides.length > 0) {
        let index = 0;
        const total = slides.length;
        const nextSlide = () => { index = (index + 1) % total; wrapper.style.transform = `translateX(${-index * 100}%)`; };
        setInterval(nextSlide, 3500);
    }
});
