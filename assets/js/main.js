let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide-item');
    const totalSlides = slides.length;
    const slidesPerView = 4; // Number of slides to show at once

    if (index >= totalSlides / slidesPerView) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = Math.ceil(totalSlides / slidesPerView) - 1;
    } else {
        currentSlide = index;
    }

    const newTransform = `translateX(-${currentSlide * 100}%)`;
    document.querySelector('.slider-container-content').style.transform = newTransform;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
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

