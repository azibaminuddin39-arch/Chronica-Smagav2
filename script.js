document.addEventListener('DOMContentLoaded', () => {
    // 1. Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });
    document.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('active');
    });

    // 2. Toggle Anggota Divisi
    const buttons = document.querySelectorAll('.toggle-anggota');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const list = this.nextElementSibling;
            const isHidden = list.style.display === 'none' || list.style.display === '';
            list.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Sembunyikan Anggota' : 'Lihat Anggota';
        });
    });

    // 3. Auto Slider Kegiatan
    const wrapper = document.getElementById('slider-wrapper');
    const slides = document.querySelectorAll('.slider-item');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    if (wrapper && slides.length > 0) {
        let index = 0;
        const total = slides.length;
        const update = () => { wrapper.style.transform = `translateX(${-index * 100}%)`; };
        const nextSlide = () => { index = (index + 1) % total; update(); };
        const prevSlide = () => { index = (index - 1 + total) % total; update(); };
        
        let timer = setInterval(nextSlide, 3500);
        const resetTimer = () => { clearInterval(timer); timer = setInterval(nextSlide, 3500); };

        nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
        prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });
    }
});
