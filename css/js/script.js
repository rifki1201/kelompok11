let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Sembunyikan semua slide terlebih dahulu
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    
    // Tingkatkan indeks slide
    slideIndex++;
    
    // Jika indeks melebihi jumlah slide, kembali ke slide pertama
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Tampilkan slide yang sesuai dengan indeks
    slides[slideIndex - 1].style.display = 'block';
    
    // Panggil showSlides lagi setelah 5 detik
    setTimeout(showSlides, 5000);
}

// Memulai slide pertama kali
showSlides();
