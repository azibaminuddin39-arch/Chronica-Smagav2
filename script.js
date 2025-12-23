/* ==========================================
   BAGIAN 2: KODE SCRIPT JS (LOGIKA PERINTAH)
   ========================================== */

// --- LOGIKA LOADER (DARI KODE ASLI ANDA) ---
window.addEventListener('load', function() {
    // Menangkap elemen loader
    const loader = document.getElementById('loader-wrapper');
    
    if (loader) {
        // Memberikan jeda agar user bisa melihat animasi loading sebentar
        setTimeout(() => {
            // Menambahkan class fade-out (yang sudah ada di CSS Anda)
            loader.classList.add('fade-out');
            
            // Setelah animasi fade-out selesai, hilangkan display secara total
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800); 
        }, 500); // 0.5 detik jeda
    }
});

// --- LOGIKA INTERAKSI (DOM CONTENT LOADED) ---
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. LOGIKA ASLI ANDA: Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // 2. LOGIKA BARU: Aktivasi Tombol FAQ
    // Agar pertanyaan FAQ bisa diklik dan memunculkan jawaban
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Menambah/menghapus class active pada tombol
            this.classList.toggle('active');
            
            // Mengambil elemen jawaban yang ada tepat di bawahnya
            const answer = this.nextElementSibling;
            
            if (answer) {
                // Logika buka-tutup (Slide effect)
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                } else {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            }
        });
    });

    // 3. LOGIKA BARU: Aktivasi Tombol "Lihat Anggota"
    // Agar daftar anggota bisa muncul saat tombol diklik
    const btnAnggota = document.querySelectorAll('.lihat-anggota-btn');

    btnAnggota.forEach(btn => {
        btn.addEventListener('click', function() {
            // Mencari container card terdekat agar tidak salah buka divisi lain
            const parentCard = this.closest('.card, .divisi-card'); 
            const listAnggota = parentCard ? parentCard.querySelector('.daftar-anggota') : null;

            if (listAnggota) {
                // Toggle tampilan (Show/Hide)
                if (listAnggota.style.display === "block") {
                    listAnggota.style.display = "none";
                    this.textContent = "Lihat Anggota";
                } else {
                    listAnggota.style.display = "block";
                    this.textContent = "Tutup Anggota";
                }
            }
        });
    });

});
