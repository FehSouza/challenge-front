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

const $searchImg = createElement('img', { class: 'search-icon', src: './src/images/search.png' });
const $search = createElement('button', { class: 'button-search', children: $searchImg });
const $personImg = createElement('img', { class: 'person-icon', src: './src/images/person.png' });
const $person = createElement('button', { class: 'button-person', children: $personImg });
const $cartImg = createElement('img', { class: 'cart-icon', src: './src/images/cart.png' });
const $cart = createElement('button', { class: 'button-cart', children: $cartImg });

const $buttonsInfoWrapper = createElement('div', {
  class: 'buttons-info-wrapper',
  children: [$search, $person, $cart],
});

const $headerWrapper = createElement('div', {
  class: 'header-wrapper',
  children: [$logo, $buttonsWrapper, $buttonsInfoWrapper],
});

const $header = createElement('div', { class: 'header', children: $headerWrapper });

const $container = document.querySelector('.container');
$container.appendChild($header);
