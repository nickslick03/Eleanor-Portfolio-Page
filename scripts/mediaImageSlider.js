// image slider for media.html
(() => {
  const smallImagesList = [...document.querySelectorAll('#photo_container figure')];
  const container = document.querySelector('.image-slider-container');
  const xButton = document.querySelector('.image-slider-container .x_button');
  const image = document.querySelector('.image-slider-container>img');
  const descriptionContainer = document.querySelector('#image_description');
  const descriptionList = [...document.querySelectorAll('#photo_container figcaption')].map((fig) => fig.innerText);
  const numberInput = document.querySelector('#image_number_input');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  const length = smallImagesList.length;
  let index = 0;

  numberInput.setAttribute('max', length);
  document.querySelector('.image-length-display').textContent += length;

  function swapBackgroundImage(nextIndex) {
    if (nextIndex > length - 1) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = length - 1;
    }
    descriptionContainer.textContent = descriptionList[nextIndex];
    image.src = `./images/media/Eleanor${length - nextIndex}.jpg`;
    index = nextIndex;
    numberInput.textContent = nextIndex + 1;
  }

  function toggleVisibility() {
    container.classList.toggle('displayNone');
  }

  smallImagesList.forEach((img, imgIndex) =>
    img.addEventListener('click', () => {
      toggleVisibility();
      swapBackgroundImage(imgIndex);
    })
  );
  container.addEventListener('click', (e) => {
    if (e.target == container || e.target == xButton)
      toggleVisibility();
  });
  arrowLeft.addEventListener('click', () => swapBackgroundImage(index - 1));
  arrowRight.addEventListener('click', () => swapBackgroundImage(index + 1));
})();