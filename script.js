/* CHRONICA - Jurnalistik SMAN 3 Banjarbaru
   Core Scripting
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- 0. LOGIKA PRELOADER (LOADING SCREEN) ---
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('fade-out');
            }, 1000); 
        });

        setTimeout(() => {
            if (!loader.classList.contains('fade-out')) {
                loader.classList.add('fade-out');
            }
        }, 3000);
    }

    // --- 1. LOGIKA NAVIGASI HAMBURGER ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            // Toggle kelas active untuk memunculkan/menyembunyikan menu
            navMenu.classList.toggle('active');
            
            /* TAMBAHAN UNTUK ANIMASI CSS MORPHING (Garis menjadi X) */
            hamburger.classList.toggle('active'); 
            
            hamburger.classList.toggle('is-active');
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active'); // Tambahan reset animasi
                hamburger.classList.remove('is-active');
            }
        });

        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active'); // Tambahan reset animasi
                hamburger.classList.remove('is-active');
            });
        });
    }

    // --- 2. LOGIKA TOGGLE ANGGOTA DIVISI ---
    const toggleButtons = document.querySelectorAll('.toggle-btn, .toggle-anggota');
    
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const list = this.nextElementSibling; 
            
            /* MODIFIKASI: Menggunakan class 'active' agar sinkron dengan animasi CSS */
            list.classList.toggle('active');
            
            const isShowing = list.classList.contains('active');
            
            // Backup logic display untuk keamanan (tetap mempertahankan logic asli Anda)
            if (isShowing) {
                list.style.display = 'block';
            } else {
                list.style.display = 'none';
            }
            
            // Update teks tombol sesuai status
            this.textContent = isShowing ? 'Sembunyikan Anggota' : 'Lihat Anggota';
            
            // LOGIKA WARNA BARU:
            // Saat Sembunyikan Anggota (Tampil): Warna Silver (#C0C0C0), Teks Hitam
            // Saat Lihat Anggota (Sembunyi): Kembali ke Maroon (#600000), Teks Putih
            if (isShowing) {
                this.style.backgroundColor = '#C0C0C0';
                this.style.color = '#000000';
                this.style.borderColor = '#600000';
            } else {
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

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide(); 
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
        }

        let autoSlideInterval = setInterval(nextSlide, 5000);

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
    }

    // --- 4. LOGIKA FAQ ACCORDION ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            faqItem.classList.toggle('active');
        });
    });
});
