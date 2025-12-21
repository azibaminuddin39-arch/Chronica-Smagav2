document.addEventListener('DOMContentLoaded', () => {
    // Navigasi
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    // Toggle Anggota
    const buttons = document.querySelectorAll('.toggle-anggota');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const list = this.nextElementSibling;
            const isHidden = list.style.display === 'none' || list.style.display === '';
            list.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Sembunyikan Anggota' : 'Lihat Anggota';
        });
    });

    // Slider Perbaikan
    const wrapper = document.getElementById('slider-wrapper');
    const slides = document.querySelectorAll('.slider-item');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (wrapper && slides.length > 0) {
        let index = 0;
        const total = slides.length;
        const update = () => wrapper.style.transform = `translateX(${-index * 100}%)`;
        
        const nextSlide = () => { index = (index + 1) % total; update(); };
        const prevSlide = () => { index = (index - 1 + total) % total; update(); };

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        let auto = setInterval(nextSlide, 4000);
        [nextBtn, prevBtn].forEach(b => b.addEventListener('click', () => {
            clearInterval(auto); auto = setInterval(nextSlide, 4000);
        }));
    }
});
