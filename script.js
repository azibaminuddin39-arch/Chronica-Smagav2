/* CHRONICA - Jurnalistik SMAN 3 Banjarbaru
   Core Scripting
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- 0. LOGIKA PRELOADER (LOADING SCREEN) ---
    // Logika ini memastikan loading screen hilang saat halaman siap
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        // Kita gunakan window.onload agar benar-benar menunggu semua GIF & gambar selesai
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('fade-out');
            }, 1000); // Jeda 1 detik agar transisi smooth
        });

        // Backup plan: jika window load terlalu lama, paksa tutup setelah 3 detik
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
            hamburger.classList.toggle('is-active');
        });

        // Menutup menu secara otomatis jika pengguna mengklik di luar area menu
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('is-active');
            }
        });

        // Menutup menu setelah pengguna memilih salah satu link navigasi
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('is-active');
            });
        });
    }

    // --- 2. LOGIKA TOGGLE ANGGOTA DIVISI ---
    const toggleButtons = document.querySelectorAll('.toggle-btn, .toggle-anggota');
    
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Mengambil elemen daftar (ul) yang tepat berada di bawah tombol
            const list = this.nextElementSibling; 
            const isHidden = list.style.display === 'none' || list.style.display === '';
            
            // Toggle tampilan daftar anggota
            list.style.display = isHidden ? 'block' : 'none';
            
            // Update teks tombol sesuai status
            this.textContent = isHidden ? 'Sembunyikan Anggota' : 'Lihat Anggota';
            
            // Memberikan feedback visual warna saat tombol aktif (Maroon Terang/Gelap)
            this.style.backgroundColor = isHidden ? '#800000' : '#600000';
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
        
        // Fungsi untuk menggeser wrapper slider
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

        // Event listener untuk navigasi manual panah
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

        // Jalankan slide otomatis setiap 5 detik
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
            
            // Menutup FAQ lain yang terbuka (agar lebih rapi)
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle item yang diklik
            faqItem.classList.toggle('active');
        });
    });
});
