/**
 * CHRONICA - Jurnalistik SMAN 3 Banjarbaru
 * Script untuk interaksi menu navigasi dan toggle daftar anggota.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PENGATURAN MENU HAMBURGER
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        // Toggle menu saat tombol hamburger diklik
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Mencegah event bubbling ke dokumen
            hamburger.classList.toggle('is-active');
            navMenu.classList.toggle('active');
        });

        // Menutup menu jika mengklik di luar area menu/hamburger
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('is-active');
                navMenu.classList.remove('active');
            }
        });

        // Menutup menu secara otomatis saat salah satu link navigasi diklik
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('is-active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. PENGATURAN TOGGLE DAFTAR ANGGOTA (DIVISI)
    const toggleButtons = document.querySelectorAll('.toggle-anggota');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Mengambil elemen daftar anggota yang berada tepat setelah tombol
            const list = this.nextElementSibling;
            
            // Cek status tampilan saat ini
            const isOpen = list.style.display === 'block';

            if (!isOpen) {
                // Tampilkan daftar
                list.style.display = 'block';
                list.style.animation = 'fadeInDown 0.3s ease forwards';
                this.textContent = 'Sembunyikan Anggota';
                this.classList.add('active');
            } else {
                // Sembunyikan daftar
                list.style.display = 'none';
                this.textContent = 'Lihat Anggota';
                this.classList.remove('active');
            }
        });
    });

    // 3. FUNGSI SCROLL HALUS (SMOOTH SCROLL) UNTUK NAVIGASI
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset agar tidak tertutup header
                    behavior: 'smooth'
                });
            }
        });
    });
});
