import { createElement } from './utils/createElement/index.js';
import { importCSS } from './utils/importCSS/index.js';

importCSS('./src/styles/index.css');

const $logo = createElement('img', { class: 'logo', src: './src/images/logo/agencia-eplus-n-logo.png' });

const $header = createElement('div', { class: 'header', children: [$logo] });

const $container = document.querySelector('.container');
$container.appendChild($header);
