/* ==========================================
   BAGIAN 1: KODE CSS ASLI ANDA
   (Tetap utuh tanpa perubahan)
   ========================================== */

/* Catatan: Jika ditaruh di file .html, 
   bungkus kode di bawah ini dengan tag <style> 
*/

/* [KODE CSS ASLI ANDA DIMULAI] */
* { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
    -webkit-tap-highlight-color: transparent;
}

:root {
    --color-maroon: #600000;
    --color-gold: #FFD700;
    --color-silver: #C0C0C0;
    --color-bg-main: #000000;
    --color-bg-section: rgba(26, 26, 26, 0.6); 
    --text-primary: #e0e0e0;
    --text-white: #ffffff;
    --glass-border: rgba(255, 215, 0, 0.2);
    --glass-blur: blur(15px);
}

#loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.8s ease, visibility 0.8s ease;
}

.loader-content { text-align: center; }
.loader-logo { position: relative; width: 120px; margin: 0 auto 20px; }
.loader-logo img {
    width: 100%;
    filter: drop-shadow(0 0 15px rgba(192, 192, 192, 0.5));
    animation: pulseLogo 2s infinite ease-in-out;
}
.loader-line {
    width: 100%;
    height: 3px;
    background: rgba(192, 192, 192, 0.2);
    margin-top: 15px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}
.loader-line::after {
    content: "";
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, var(--color-silver), transparent);
    animation: loadingBar 1.5s infinite;
}
.loader-content p {
    color: var(--color-silver);
    letter-spacing: 5px;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
}

@keyframes pulseLogo {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
}
@keyframes loadingBar { 0% { left: -100%; } 100% { left: 100%; } }
#loader-wrapper.fade-out { opacity: 0; visibility: hidden; }

/* ... (Seluruh Sisa Kode CSS Anda Tetap Disini) ... */
/* [KODE CSS ASLI ANDA SELESAI] */

/* ==========================================
   BAGIAN 2: KODE SCRIPT JS (LOGIKA PERINTAH)
   ========================================== */

/* Catatan: Jika ditaruh di file .html, 
   bungkus kode di bawah ini dengan tag <script> 
*/

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

// Tambahan: Logika Hamburger Menu (Agar Navigasi Anda berfungsi)
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
});
