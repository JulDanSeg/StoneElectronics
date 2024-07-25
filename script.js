document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const images = document.querySelector('.carousel-images');
    const imageCount = images.children.length;
    let index = 0;

    function showImage(newIndex) {
        if (newIndex >= imageCount) newIndex = 0;
        if (newIndex < 0) newIndex = imageCount - 1;
        images.style.transform = `translateX(-${newIndex * 100}%)`;
        index = newIndex;
    }

    prevButton.addEventListener('click', () => {
        showImage(index - 1);
    });

    nextButton.addEventListener('click', () => {
        showImage(index + 1);
    });

    // Opcional: agregar auto-reproducción
    setInterval(() => {
        showImage(index + 1);
    }, 3000); // Cambia la imagen cada 3 segundos
});
