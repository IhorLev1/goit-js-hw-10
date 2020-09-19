import './styles.css';
import menuItems from './menu.json';
import items from './menu-items.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
  switchInput: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
  theme: localStorage.getItem('Theme'),
};

const markup = items(menuItems);
refs.menu.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const currentTheme = Theme.LIGHT ? refs.theme : null;

if (currentTheme === 'LIGHT') {
  refs.body.classList.add('light-theme');
  refs.body.classList.remove('dark-theme');
  refs.switchInput.checked = false;
}
if (currentTheme === 'DARK') {
  refs.body.classList.add('dark-theme');
  refs.body.classList.remove('light-theme');
  refs.switchInput.checked = true;
}

refs.switchInput.addEventListener('change', theme);

function theme(event) {
  if (event.target.checked) {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    localStorage.setItem('Theme', 'DARK');
  } else {
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');
    localStorage.setItem('Theme', 'LIGHT');
  }
}

console.log(localStorage);
