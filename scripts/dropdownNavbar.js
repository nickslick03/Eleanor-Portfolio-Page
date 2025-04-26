// drop-down menu (if width < 800px) for all pages
(() => {
  const menuButton = document.querySelector('#menu_button');
  const nav = document.querySelector('header>nav');
  const ul = document.querySelector('header>nav>ul');
  const xButton = document.querySelector('header>nav .x_button');

  document.addEventListener('click', (event) => {
    if (event.target == ul)
      nav.classList.remove('toggle_nav');
  });
  menuButton.addEventListener('click', () =>
    nav.classList.add('toggle_nav')
  );
  xButton.addEventListener('click', () =>
    nav.classList.remove('toggle_nav')
  );
  document.addEventListener('scroll', () =>
    nav.classList.remove('toggle_nav')
  );

})();