let currentSlide = 0;
    const slidesPerView = 4;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide-item');
        const totalSlides = slides.length;

        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 4;
        } else {
            currentSlide = index;
        }

        const newTransform = `translateX(-${currentSlide * (100 / slidesPerView)}%)`;
        document.querySelector('.slider-container-content').style.transform = newTransform;
    }

    function nextSlide() {
        showSlide(currentSlide + 4);
    }

    function prevSlide() {
        showSlide(currentSlide - 4);
    }

    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentSlide);
    });

    let currentSlide1 = 0;

    function showSlide1(index) {
        const slides = document.querySelectorAll('.slide-item1');
        const totalSlides = slides.length;

        if (index >= totalSlides) {
            currentSlide1 = 0;
        } else if (index < 0) {
            currentSlide1 = totalSlides - 1;
        } else {
            currentSlide1 = index;
        }

        const newTransform = `translateX(-${currentSlide1 * (100 / slidesPerView)}%)`;
        document.querySelector('.slider-container-content1').style.transform = newTransform;
    }

    function nextSlide1() {
        showSlide1(currentSlide1 + 1);
    }

    function prevSlide1() {
        showSlide1(currentSlide1 - 1);
    }

    document.addEventListener('DOMContentLoaded', () => {
        showSlide1(currentSlide1);
    });
// back-to-top
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden');
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
        backToTopButton.classList.add('hidden');
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// giới han
$(document).ready(function() {
    var maxRows = 3;
    var itemsPerRow = 3;
    var totalItemsToShow = maxRows * itemsPerRow;

    $('.carousel-item').each(function() {
        var products = $(this).find('.card');
        products.each(function(index) {
            if (index >= totalItemsToShow) {
                $(this).hide();
            }
        });
    });
});
$(document).ready(function() {
    if ('ontouchstart' in document.documentElement) {
        $('.navbar-nav .dropdown-toggle').on('click', function(e) {
            var $el = $(this).siblings('.dropdown-menu');
            var isVisible = $el.is(':visible');
            $('.dropdown-menu').not($el).slideUp();
            if (!isVisible) {
                $el.slideDown();
            } else {
                $el.slideUp();
            }
            return false;
        });
    }
});

