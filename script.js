/**
 * 1. FUNGSI DARK MODE TOGGLE
 */
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

/**
 * 2. FUNGSI MENAMPILKAN/MENYEMBUNYIKAN DETAIL DIVISI
 * Kode ini sekarang hanya mengaktifkan tombol yang sudah ada di HTML.
 */
function setupDivisiToggles() {
    // Cari semua tombol yang sudah kita tulis di HTML
    const toggleButtons = document.querySelectorAll('.toggle-anggota');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Cari daftar anggota (ul) yang berada tepat setelah tombol ini
            const anggotaList = this.nextElementSibling;

            if (anggotaList.style.display === 'none' || anggotaList.style.display === '') {
                anggotaList.style.display = 'block';
                this.textContent = 'Sembunyikan Anggota';
            } else {
                anggotaList.style.display = 'none';
                this.textContent = 'Lihat Anggota';
            }
        });
    });
}

/**
 * EKSEKUSI SAAT DOKUMEN SELESAI DIMUAT
 */
document.addEventListener('DOMContentLoaded', () => {
    // A. Cek dan terapkan preferensi Dark Mode
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // B. Jalankan fungsi toggle
    setupDivisiToggles();
});
