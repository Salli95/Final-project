let slideIndex001 = 0;

function showSlides001() {
    let i;
    let slides = document.getElementsByClassName("mySlides001");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex001++;

    if (slideIndex001 > slides.length) {
        slideIndex001 = 1;
    }

    slides[slideIndex001 - 1].style.display = "block";
    setTimeout(showSlides001, 7000); // Интервал переключения слайдов (в миллисекундах)
}

showSlides001();
