import { createElement } from './utils/createElement/index.js';
import { importCSS } from './utils/importCSS/index.js';

importCSS('./src/styles/index.css');

const $logo = createElement('img', { class: 'logo', src: './src/images/logo/agencia-eplus-n-logo.png' });
const $button1 = createElement('button', { class: 'button', textContent: 'Lorem ipsum' });
const $button2 = createElement('button', { class: 'button', textContent: 'Lorem ipsum' });
const $button3 = createElement('button', { class: 'button', textContent: 'Lorem ipsum' });
const $button4 = createElement('button', { class: 'button', textContent: 'Lorem ipsum' });
const $button5 = createElement('button', { class: 'button', textContent: 'Lorem ipsum' });
const $buttonsWrapper = createElement('div', {
  class: 'buttons-wrapper',
  children: [$button1, $button2, $button3, $button4, $button5],
});

let statusMenu = false;

const renderMenu = () => {
  if (statusMenu === false) {
    $menu.classList.add('menu-open');
    $cartButton.classList.add('cart-open');
    statusMenu = true;
  } else {
    $menu.classList.remove('menu-open');
    $cartButton.classList.remove('cart-open');
    statusMenu = false;
  }
};

const $searchButton = createElement('span', { class: ['material-icons', 'search-button'], textContent: 'search' });
const $personButton = createElement('span', { class: ['material-icons', 'person-button'], textContent: 'person' });
const $cartButton = createElement('span', {
  class: ['material-icons', 'cart-button'],
  textContent: 'shopping_cart',
  onclick: renderMenu,
});

const $menu = createElement('div', { class: 'menu' });

const $buttonsInfoWrapper = createElement('div', {
  class: 'buttons-info-wrapper',
  children: [$searchButton, $personButton, $cartButton, $menu],
});

const $headerWrapper = createElement('div', {
  class: 'header-wrapper',
  children: [$logo, $buttonsWrapper, $buttonsInfoWrapper],
});

const $header = createElement('div', { class: 'header', children: $headerWrapper });

const $container = document.querySelector('.container');
$container.appendChild($header);
