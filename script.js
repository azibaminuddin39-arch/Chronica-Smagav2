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

    // 2. Toggle Anggota
    const buttons = document.querySelectorAll('.toggle-anggota');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const list = this.nextElementSibling;
            if (list.style.display === 'none' || list.style.display === '') {
                list.style.display = 'block';
                this.textContent = 'Sembunyikan Anggota';
            } else {
                list.style.display = 'none';
                this.textContent = 'Lihat Anggota';
            }
        });
    });

    // 3. Slider
    const wrapper = document.getElementById('slider-wrapper');
    const slides = document.querySelectorAll('.slider-item');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    if (wrapper && slides.length > 0) {
        let index = 0;
        let autoSlide = setInterval(() => { index = (index + 1) % slides.length; updateSlider(); }, 3000);

        function updateSlider() { wrapper.style.transform = `translateX(${-index * 100}%)`; }
        function resetTimer() { clearInterval(autoSlide); autoSlide = setInterval(() => { index = (index + 1) % slides.length; updateSlider(); }, 3000); }

        nextBtn.addEventListener('click', () => { index = (index + 1) % slides.length; updateSlider(); resetTimer(); });
        prevBtn.addEventListener('click', () => { index = (index - 1 + slides.length) % slides.length; updateSlider(); resetTimer(); });
    }
});
