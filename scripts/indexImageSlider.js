// image slider for index.html
(() => {
  const container = document.querySelector('.image-slider-container');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  const length = container.getAttribute('data-image-length');
  let index = 0;

  for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(./images/splash_screen/splash_${i + 1}.jpg)`;
    container.appendChild(div);
  }

  function swapBackgroundImage(nextIndex) {
    if (nextIndex > length - 1) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = length - 1;
    }
    let translateX = 100 / length * nextIndex;
    container.style.transform = `translateX(-${translateX}%)`;
    index = nextIndex;
  }

  arrowLeft.addEventListener('click', () => swapBackgroundImage(index - 1));
  arrowRight.addEventListener('click', () => swapBackgroundImage(index + 1));
})();