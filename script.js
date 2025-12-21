document.addEventListener('DOMContentLoaded', () => {
    // 1. Logika Menu Hamburger
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Mencegah klik menyebar
            navMenu.classList.toggle('active');
        });
    }

    // Menutup menu jika mengklik di mana saja di luar menu
    document.addEventListener('click', () => {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // 2. Logika Slider Gambar
    const wrapper = document.getElementById('slider-wrapper');
    const slides = document.querySelectorAll('.slider-item');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (wrapper && slides.length > 0) {
        let index = 0;
        const total = slides.length;

        const updateSlider = () => {
            wrapper.style.transform = `translateX(${-index * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            index = (index + 1) % total;
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + total) % total;
            updateSlider();
        });

        // Auto slide setiap 5 detik
        setInterval(() => {
            index = (index + 1) % total;
            updateSlider();
        }, 5000);
    }
});
