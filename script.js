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

        // Backup plan jika window load tidak terpicu
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
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active'); 
            hamburger.classList.toggle('is-active');
        });

        // Klik di luar menu untuk menutup
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active'); 
                hamburger.classList.remove('is-active');
            }
        });

        // Tutup menu saat link diklik
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
            list.classList.toggle('active');
            const isShowing = list.classList.contains('active');
            
            if (isShowing) {
                list.style.display = 'block';
            } else {
                list.style.display = 'none';
            }
            
            this.textContent = isShowing ? 'Sembunyikan Anggota' : 'Lihat Anggota';
            
            // Perubahan visual tombol saat aktif (Silver/Black)
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

        if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

        // Auto Slide setiap 5 detik
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
            
            // Tutup FAQ lain yang sedang terbuka agar rapi
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            faqItem.classList.toggle('active');
        };
    });

    // --- 5. LOGIKA KONTROL MUSIK (DIPERBARUI UNTUK IKON SILVER) ---
    window.toggleMusic = function() {
        const music = document.getElementById('bgMusic');
        const btn = document.getElementById('musicToggle');
        const waves = document.getElementById('soundWaves');
        const muteLine = document.getElementById('muteLine');

        if (!music) return;

        // Atur volume agar tidak terlalu mengagetkan (0.0 sampai 1.0)
        music.volume = 0.4;

        if (music.paused) {
            // SAAT MUSIK BERJALAN
            music.play().catch(err => {
                console.log("Autoplay diblokir oleh browser.");
            });
            btn.classList.add('playing');
            if(waves) waves.style.display = 'block';
            if(muteLine) muteLine.style.display = 'none';
            
            // Warna tetap Silver saat menyala
            btn.style.color = '#C0C0C0'; 
        } else {
            // SAAT MUSIK MUTE
            music.pause();
            btn.classList.remove('playing');
            if(waves) waves.style.display = 'none';
            if(muteLine) {
                muteLine.style.display = 'block';
                // Memastikan garis coret berwarna Silver
                muteLine.style.stroke = '#C0C0C0'; 
            }
            
            // Warna tetap Silver saat dimatikan sesuai permintaan
            btn.style.color = '#C0C0C0'; 
        }
    };
});
