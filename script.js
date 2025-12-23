/* CHRONICA - Jurnalistik SMAN 3 Banjarbaru
   Core Scripting - FULL INTEGRATED & OPTIMIZED
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LOGIKA PRELOADER ---
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('fade-out');
            }, 1000); 
        });
    }

    // --- 2. LOGIKA NAVIGASI HAMBURGER (Satu untuk Semua) ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Klik di luar untuk menutup
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // --- 3. LOGIKA FAQ & TOGGLE ANGGOTA (Smart Selector) ---
    // Logika ini otomatis mendeteksi apakah itu FAQ atau Tombol Lihat Anggota
    const togglers = document.querySelectorAll('.faq-question, .toggle-btn, .toggle-anggota');
    
    togglers.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            
            // Toggle class active pada parent (faq-item atau divisi-box)
            parent.classList.toggle('active');

            // Khusus untuk tombol yang ada teksnya (Lihat/Sembunyikan)
            if (this.classList.contains('toggle-btn') || this.classList.contains('toggle-anggota')) {
                const isShowing = parent.classList.contains('active');
                this.textContent = isShowing ? 'Sembunyikan Anggota' : 'Lihat Anggota';
                
                // Animasi manual untuk list anggota
                const list = this.nextElementSibling;
                if (list && list.classList.contains('anggota-list')) {
                    list.style.display = isShowing ? 'block' : 'none';
                    setTimeout(() => { list.style.opacity = isShowing ? '1' : '0'; }, 10);
                }
            }
        });
    });

    // --- 4. LOGIKA SLIDER KEGIATAN ---
    const wrapper = document.getElementById('slider-wrapper');
    const slides = document.querySelectorAll('.slider-item');
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

        document.getElementById('nextBtn')?.addEventListener('click', nextSlide);
        document.getElementById('prevBtn')?.addEventListener('click', () => {
            index = (index - 1 + total) % total;
            updateSlider();
        });

        setInterval(nextSlide, 5000);
    }
});
