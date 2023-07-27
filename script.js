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
            reloadButton.style.visibility = "visible";
        }, lines.length * 2000);
    };

    showLines();

    reloadButton.addEventListener('click', () => {
        lines.forEach(line => {
            line.style.opacity = "0";
            line.style.transform = "translateY(1rem)";
        });
        reloadButton.style.opacity = "0";
        reloadButton.style.visibility = "hidden";
        showLines();

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        setTimeout(showLines, 500);
    });
});