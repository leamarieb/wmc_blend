document.addEventListener('DOMContentLoaded', (event) => {
    let clickCount = 0;

    const image = document.getElementById('clickImage');
    const enoughImage = document.getElementById('sleepy');
    const countDisplay = document.getElementById('clickCount');
    const message = document.getElementById('message');

    image.addEventListener('click', () => {
        clickCount++;
        countDisplay.textContent = clickCount;

        if (clickCount >= 10) {
            image.style.display = 'none';
            enoughImage.style.display = 'block';
            countDisplay.parentElement.style.display = 'none';
            message.style.display = 'block';


        }
    });
});
