document.addEventListener('DOMContentLoaded', () => {
    // Navigasi
    const hb = document.getElementById('hamburger');
    const menu = document.getElementById('nav-menu');
    hb.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
    });

    // Toggle Anggota
    const btns = document.querySelectorAll('.toggle-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            const list = this.nextElementSibling;
            const isOpen = list.style.display === 'block';
            list.style.display = isOpen ? 'none' : 'block';
            this.textContent = isOpen ? 'Lihat Anggota' : 'Sembunyikan Anggota';
        });
    });

    document.addEventListener('click', () => menu.classList.remove('active'));
});
