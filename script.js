document.addEventListener('DOMContentLoaded', () => {
    // --- 1. LOGIKA NAVIGASI HAMBURGER ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            // Menambah kelas active pada menu dan hamburger
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('is-active');
        });

        // Menutup menu saat mengklik di luar area navigasi
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('is-active');
            }
        });

        // Menutup menu saat salah satu link navigasi diklik
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('is-active');
            });
        });
    }

    // --- 2. LOGIKA TOGGLE ANGGOTA DIVISI ---
    // Mendukung dua varian class yang mungkin digunakan: .toggle-anggota atau .toggle-btn
    const toggleButtons = document.querySelectorAll('.toggle-anggota, .toggle-btn');
    
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const list = this.nextElementSibling; // Mengambil elemen <ul> setelah button
            const isHidden = list.style.display === 'none' || list.style.display === '';
            
            // Animasi sederhana dan perubahan tampilan
            list.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Sembunyikan Anggota' : 'Lihat Anggota';
            
            // Memberikan sedikit feedback warna saat dibuka
            this.style.background = isHidden ? '#800000' : '#600000';
        });
    });

    // --- 3. LOGIKA SLIDER KEGIATAN ---
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
        
        const nextSlide = () => {
            index = (index + 1) % total;
            updateSlider();
        };
        
        const prevSlide = () => {
            index = (index - 1 + total) % total;
            updateSlider();
        };

        // Event listener tombol manual
        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });
        
        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });

        // Auto Slide setiap 5 detik
        let autoSlideInterval = setInterval(nextSlide, 5000);

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
    }
});
