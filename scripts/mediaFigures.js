// populates div#photo_container in media.html
(() => {
  const descriptionList = [
    {
      showName: "Silent Sky",
      description: "October 2022 (Messiah University)",
      length: 6
    },
    {
      showName: "Raise Your Voice Louder Than Words",
      description: "April 2022 (Bushnell Theatre)",
      length: 2
    },
    {
      showName: "Where's Charley?",
      description: "March 2022 (East Catholic High School)",
      length: 5
    },
    {
      showName: "The Rules of Comedy",
      description: "October 2021 (East Catholic High School)",
      length: 3
    },
    {
      showName: "Hamlet",
      description: "August 2021 (Backyard Shakespeare Company)",
      length: 6
    },
    {
      showName: "Twelfth Night",
      description: "August 2020 (Backyard Shakespeare Company)",
      length: 7
    },
    {
      showName: "Oliver!",
      description: "February 2020 (Colchester Community Theatre)",
      length: 1
    }
  ];
  const length = descriptionList.reduce((p, c) => p + c.length, 0);
  const photoContainer = document.querySelector('#photo_container');
  let descriptionIndex = 0;
  let descriptionCount = 0;

  for (let i = 0; i < length; i++) {

    descriptionCount++;

    if (descriptionList[descriptionIndex].length < descriptionCount) {
      descriptionIndex++;
      descriptionCount = 1;
    }

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figCaption = document.createElement('figcaption');
    const em = document.createElement('em');

    img.src = `images/media_lowres/Eleanor${length - i}.jpg`;
    img.setAttribute('loading', 'lazy');
    em.textContent = descriptionList[descriptionIndex].showName;

    figCaption.append(em, ', ' + descriptionList[descriptionIndex].description);
    figure.append(img, figCaption);
    photoContainer.append(figure);
  }
})();
