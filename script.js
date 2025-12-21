document.addEventListener('DOMContentLoaded', () => {
    // Navigasi & Hamburger
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if(hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('is-active');
            navMenu.classList.toggle('active');
        });
    }

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
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const slides = document.querySelectorAll('.slider-item');

    if (wrapper && slides.length > 0) {
        let index = 0;
        const total = slides.length;
        const update = () => wrapper.style.transform = `translateX(${-index * 100}%)`;
        
        nextBtn.addEventListener('click', () => { index = (index + 1) % total; update(); });
        prevBtn.addEventListener('click', () => { index = (index - 1 + total) % total; update(); });
        
        let autoSlide = setInterval(() => { index = (index + 1) % total; update(); }, 4000);
        [nextBtn, prevBtn].forEach(b => b.addEventListener('click', () => {
            clearInterval(autoSlide); autoSlide = setInterval(() => { index = (index + 1) % total; update(); }, 4000);
        }));
    }
});
