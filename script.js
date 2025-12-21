document.addEventListener('DOMContentLoaded', () => {
    // Navigasi Hamburger
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('active');
    });

    // Toggle Anggota Divisi
    const buttons = document.querySelectorAll('.toggle-anggota');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const list = this.nextElementSibling;
            if (list.style.display === 'none') {
                list.style.display = 'block';
                this.textContent = 'Sembunyikan Anggota';
            } else {
                list.style.display = 'none';
                this.textContent = 'Lihat Anggota';
            }
        });
    });
});
