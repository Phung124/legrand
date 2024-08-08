let currentSlide = 0;
        let slidesPerView = 4;

        function updateSlidesPerView() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 576) {
                slidesPerView = 1;
            } else if (screenWidth < 768) {
                slidesPerView = 2;
            } else if (screenWidth < 992) {
                slidesPerView = 3;
            } else {
                slidesPerView = 4;
            }
            showSlide(currentSlide);
        }

        function showSlide(index) {
            const slides = document.querySelectorAll('#carousel1 .slide-item');
            const totalSlides = slides.length;

            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }

            const newTransform = `translateX(-${currentSlide * (100 / slidesPerView)}%)`;
            document.querySelector('#carousel1 .slider-container-content').style.transform = newTransform;
        }

        function nextSlide() {
            if (currentSlide + slidesPerView >= document.querySelectorAll('#carousel1 .slide-item').length) {
                showSlide(0);
            } else {
                showSlide(currentSlide + 1);
            }
        }

        function prevSlide() {
            if (currentSlide === 0) {
                showSlide(document.querySelectorAll('#carousel1 .slide-item').length - slidesPerView);
            } else {
                showSlide(currentSlide - 1);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            updateSlidesPerView();

            const sliderContainer1 = document.querySelector('#carousel1');
            let touchStartX1 = 0;
            let touchEndX1 = 0;

            sliderContainer1.addEventListener('touchstart', (e) => {
                touchStartX1 = e.changedTouches[0].screenX;
            });

            sliderContainer1.addEventListener('touchend', (e) => {
                touchEndX1 = e.changedTouches[0].screenX;
                handleSwipe1();
            });

            function handleSwipe1() {
                const swipeThreshold = 50;
                if (touchEndX1 < touchStartX1 - swipeThreshold) {
                    nextSlide();
                } else if (touchEndX1 > touchStartX1 + swipeThreshold) {
                    prevSlide();
                }
            }
        });

        window.addEventListener('resize', updateSlidesPerView);

        let currentSlide1 = 0;
        let slidesPerView1 = 4;

        function updateSlidesPerView1() {
            const screenWidth = window.innerWidth;
            if (screenWidth < 576) {
                slidesPerView1 = 1;
            } else if (screenWidth < 768) {
                slidesPerView1 = 2;
            } else if (screenWidth < 992) {
                slidesPerView1 = 3;
            } else {
                slidesPerView1 = 4;
            }
            showSlide1(currentSlide1);
        }

        function showSlide1(index) {
            const slides = document.querySelectorAll('#carousel2 .slide-item1');
            const totalSlides = slides.length;

            if (index >= totalSlides) {
                currentSlide1 = 0;
            } else if (index < 0) {
                currentSlide1 = totalSlides - 1;
            } else {
                currentSlide1 = index;
            }

            const newTransform = `translateX(-${currentSlide1 * (100 / slidesPerView1)}%)`;
            document.querySelector('#carousel2 .slider-container-content1').style.transform = newTransform;
        }

        function nextSlide1() {
            if (currentSlide1 + slidesPerView1 >= document.querySelectorAll('#carousel2 .slide-item1').length) {
                showSlide1(0);
            } else {
                showSlide1(currentSlide1 + 1);
            }
        }

        function prevSlide1() {
            if (currentSlide1 === 0) {
                showSlide1(document.querySelectorAll('#carousel2 .slide-item1').length - slidesPerView1);
            } else {
                showSlide1(currentSlide1 - 1);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            updateSlidesPerView1();

            const sliderContainer2 = document.querySelector('#carousel2');
            let touchStartX2 = 0;
            let touchEndX2 = 0;

            sliderContainer2.addEventListener('touchstart', (e) => {
                touchStartX2 = e.changedTouches[0].screenX;
            });

            sliderContainer2.addEventListener('touchend', (e) => {
                touchEndX2 = e.changedTouches[0].screenX;
                handleSwipe2();
            });

            function handleSwipe2() {
                const swipeThreshold = 50;
                if (touchEndX2 < touchStartX2 - swipeThreshold) {
                    nextSlide1();
                } else if (touchEndX2 > touchStartX2 + swipeThreshold) {
                    prevSlide1();
                }
            }
        });

        window.addEventListener('resize', updateSlidesPerView1);




// let currentSlide = 0;
// const slidesPerView = 4;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.slide-item');
//     const totalSlides = slides.length;

//     // Ensure the carousel wraps around when reaching the end or the beginning
//     if (index >= totalSlides) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = totalSlides - 1;
//     } else {
//         currentSlide = index;
//     }

//     const newTransform = `translateX(-${currentSlide * (100 / slidesPerView)}%)`;
//     document.querySelector('.slider-container-content').style.transform = newTransform;
// }

// function nextSlide() {
//     // Increment the slide and ensure it wraps around after the last slide
//     if (currentSlide + slidesPerView >= document.querySelectorAll('.slide-item').length) {
//         showSlide(0);
//     } else {
//         showSlide(currentSlide + 1);
//     }
// }

// function prevSlide() {
//     // Decrement the slide and ensure it wraps around before the first slide
//     if (currentSlide === 0) {
//         showSlide(document.querySelectorAll('.slide-item').length - slidesPerView);
//     } else {
//         showSlide(currentSlide - 1);
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(currentSlide);
// });


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

// hiệu ứng vuốt 
 const sliderContainer = document.querySelector('.slider-container-content1');
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50; // Khoảng cách tối thiểu tính bằng pixel để được coi là vuốt
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide1();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide1();
        }
    }