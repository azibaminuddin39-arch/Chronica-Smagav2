/**
 * 1. FUNGSI DARK MODE TOGGLE
 * Mengubah tema warna antara terang dan gelap, dan menyimpan preferensi.
 */
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Simpan preferensi di localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

/**
 * 2. FUNGSI MENAMPILKAN/MENYEMBUNYIKAN DETAIL DIVISI
 * Menambahkan tombol toggle untuk setiap daftar anggota divisi.
 */
function setupDivisiToggles() {
    const divisiBoxes = document.querySelectorAll('.divisi-box');

    divisiBoxes.forEach(box => {
        const anggotaList = box.querySelector('ul');
        
        // Cek jika daftar anggota ada dan lebih dari 0
        if (anggotaList && anggotaList.children.length > 0) {
            
            // Buat tombol toggle
            const toggleButton = document.createElement('button');
            toggleButton.classList.add('toggle-anggota');
            
            // Atur status awal: Anggota disembunyikan
            anggotaList.style.display = 'none';
            toggleButton.textContent = 'Lihat Anggota';

            // Sisipkan tombol sebelum daftar anggota
            box.insertBefore(toggleButton, anggotaList);

            // Tambahkan event listener ke tombol
            toggleButton.addEventListener('click', () => {
                if (anggotaList.style.display === 'none') {
                    anggotaList.style.display = 'block';
                    toggleButton.textContent = 'Sembunyikan Anggota';
                } else {
                    anggotaList.style.display = 'none';
                    toggleButton.textContent = 'Lihat Anggota';
                }
            });
        }
    });
}


/**
 * EKSEKUSI SAAT DOKUMEN SELESAI DIMUAT
 * Melakukan pengecekan tema dan setup tombol divisi.
 */
document.addEventListener('DOMContentLoaded', () => {
    // A. Cek dan terapkan preferensi Dark Mode
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // B. Setup tombol toggle divisi
    setupDivisiToggles();
});