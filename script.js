/**
 * 1. FUNGSI HAMBURGER MENU (GARIS 3)
 */
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Toggle class active untuk memunculkan menu
            navMenu.classList.toggle('active');
            // Toggle class is-active untuk animasi garis menjadi X
            hamburger.classList.toggle('is-active');
        });

        // Menutup menu otomatis saat salah satu link diklik
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('is-active');
            });
        });

        // Menutup menu jika pengguna mengklik di luar area menu
        document.addEventListener('click', (event) => {
            const isClickInside = hamburger.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInside) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('is-active');
            }
        });
    }
}

/**
 * 2. FUNGSI MENAMPILKAN/MENYEMBUNYIKAN DETAIL DIVISI
 */
function setupDivisiToggles() {
    const toggleButtons = document.querySelectorAll('.toggle-anggota');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const anggotaList = this.nextElementSibling;

            if (anggotaList.style.display === 'none' || anggotaList.style.display === '') {
                anggotaList.style.display = 'block';
                this.textContent = 'Sembunyikan Anggota';
                // Animasi sederhana saat muncul
                anggotaList.style.animation = 'fadeIn 0.4s ease';
            } else {
                anggotaList.style.display = 'none';
                this.textContent = 'Lihat Anggota';
            }
        });
    });
}

/**
 * 3. FUNGSI DARK MODE (OPSIONAL - Jika Anda ingin menambah tombol toggle nantinya)
 */
function checkTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

/**
 * EKSEKUSI SAAT DOKUMEN SELESAI DIMUAT
 */
document.addEventListener('DOMContentLoaded', () => {
    // Jalankan pengecekan tema
    checkTheme();

    // Jalankan fungsi hamburger menu
    setupHamburgerMenu();

    // Jalankan fungsi toggle anggota
    setupDivisiToggles();
});
