/* ==========================================
   CHRONICA - Jurnalistik SMAN 3 Banjarbaru
   Core Scripting - FULL INTEGRATED VERSION (FIXED)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- 0. LOGIKA PRELOADER (ANTI-STUCK & CLEANUP) ---
    const loader = document.getElementById('loader-wrapper');
    
    if (loader) {
        // Fungsi tunggal untuk menghilangkan loader
        const removeLoader = () => {
            if (!loader.classList.contains('fade-out')) {
                loader.classList.add('fade-out');
                // Tambahan: Hapus dari display agar tidak menghalangi klik setelah transisi
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 800); // Sesuai durasi transisi di CSS (0.8s)
            }
        };

        // Kejadian 1: Saat semua aset (GIF, Gambar, Font) selesai dimuat
        window.addEventListener('load', removeLoader);

        // Kejadian 2: Failsafe (Jika dalam 3 detik load belum selesai, paksa masuk)
        setTimeout(removeLoader, 3000);
    }

    // --- 1. LOGIKA NAVIGASI HAMBURGER ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active'); 
            hamburger.classList.toggle('is-active');
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active'); 
                hamburger.classList.remove('is-active');
            }
        });

        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active'); 
                hamburger.classList.remove('is-active');
            });
        });
    }

    // --- 2. LOGIKA TOGGLE ANGGOTA DIVISI ---
    const toggleButtons = document.querySelectorAll('.toggle-btn, .toggle-anggota');
    
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const list = this.nextElementSibling; 
            if (!list) return; 

            list.classList.toggle('active');
            const isShowing = list.classList.contains('active');
            
            // Logika Display & Style Tombol
            if (isShowing) {
                list.style.display = 'block';
                list.style.maxHeight = '1000px'; 
                this.textContent = 'Sembunyikan Anggota';
                this.style.backgroundColor = '#C0C0C0';
                this.style.color = '#000000';
                this.style.borderColor = '#600000';
            } else {
                list.style.display = 'none';
                list.style.maxHeight = '0';
                this.textContent = 'Lihat Anggota';
                this.style.backgroundColor = '#600000';
                this.style.color = '#ffffff';
                this.style.borderColor = '#C0C0C0';
            }
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

        if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

        let autoSlideInterval = setInterval(nextSlide, 5000);
        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
    }

    // --- 4. LOGIKA FAQ ACCORDION ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.onclick = function(e) {
            e.preventDefault(); 
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Tutup semua FAQ lain sebelum membuka yang baru
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const ans = item.querySelector('.faq-answer');
                if (ans) {
                    ans.style.display = 'none';
                    // Tambahan agar sinkron dengan CSS maxHeight jika ada
                    ans.parentElement.classList.remove('active');
                }
            });
            
            // Jika diklik dalam keadaan tertutup, maka buka
            if (!isActive) {
                faqItem.classList.add('active');
                const ans = faqItem.querySelector('.faq-answer');
                if (ans) ans.style.display = 'block';
            }
        };
    });
});
