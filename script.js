document.addEventListener('DOMContentLoaded', function () {
    const lines = document.querySelectorAll('.line, .title, .subtitle');
    const reloadButton = document.querySelector('.reload-button');

    const showLines = () => {
        lines.forEach(line => {
            const delay = line.getAttribute('data-delay') * 2000;
            setTimeout(() => {
                line.style.opacity = "1";
                line.style.transform = "translateY(0)";
            }, delay);
        });
        setTimeout(() => {
            reloadButton.style.opacity = "1";
        }, lines.length * 2000 + 500);

        setTimeout(() => {
            reloadButton.style.pointerEvents = "auto";
        }, lines.length * 2000 + 1500);
    };

    showLines();

    reloadButton.addEventListener('click', () => {
        lines.forEach(line => {
            line.style.opacity = "0";
            line.style.transform = "translateY(1rem)";
        });
        reloadButton.style.opacity = "0";
        reloadButton.style.pointerEvents = "none";
        showLines();

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        setTimeout(showLines, 500);
    });

    const totalImages = 22;
    const folderName = "images";

    const swiperWrapper = document.getElementById('swiperWrapper');

    for (let i = 1; i <= totalImages; i++) {
        const swiperSlide = document.createElement('div');
        swiperSlide.className = 'swiper-slide';

        const imageElement = document.createElement('img');
        imageElement.src = `${folderName}/image (${i}).jpg`;
        imageElement.className = 'image-line';

        swiperSlide.appendChild(imageElement);
        swiperWrapper.appendChild(swiperSlide);
    }

    const swiper = new Swiper('.swiper-container', {
        effect: 'cards',
        centeredSlides: true,
        slidesPerView: 1,
        cardsEffect: {
            perSlideOffset: 8,
            perSlideRotate: 1.5,
            rotate: true,
            slideShadows: true,
        },
    });
});

