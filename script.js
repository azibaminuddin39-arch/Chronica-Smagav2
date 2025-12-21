document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigasi Hamburger
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
            if (list.style.display === 'none' || list.style.display === '') {
                list.style.display = 'block';
                this.textContent = 'Sembunyikan Anggota';
            } else {
                list.style.display = 'none';
                this.textContent = 'Lihat Anggota';
            }
        });
    });

    // 3. Auto Slider Kegiatan
    const wrapper = document.getElementById('slider-wrapper');
    const slides = document.querySelectorAll('.slider-item');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    if (wrapper && slides.length > 0) {
        let index = 0;
        let autoSlide = setInterval(showNextSlide, 3000);

        function showNextSlide() {
            index = (index + 1) % slides.length;
            updateSlider();
        }

        function showPrevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            updateSlider();
        }

        function updateSlider() {
            wrapper.style.transform = `translateX(${-index * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            showNextSlide();
            resetTimer();
        });

        prevBtn.addEventListener('click', () => {
            showPrevSlide();
            resetTimer();
        });

        function resetTimer() {
            clearInterval(autoSlide);
            autoSlide = setInterval(showNextSlide, 3000);
        }
    }
});
