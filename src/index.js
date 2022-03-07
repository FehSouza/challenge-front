import { createElement } from './utils/createElement/index.js';
import { formatMoney } from './utils/currency/index.js';
import { importCSS } from './utils/importCSS/index.js';

importCSS('./src/styles/index.css');

const handleMenu = async () => {
  openMenu();
  await renderProducts();
};

let statusMenu = false;
const openMenu = () => {
  if (statusMenu === false) {
    $menu.classList.add('menu-open');
    $cartButton.classList.add('cart-open');
    statusMenu = true;
    getProducts();
  } else {
    $menu.classList.remove('menu-open');
    $cartButton.classList.remove('cart-open');
    statusMenu = false;
  }
};

const renderProducts = async () => {
  $productsList.innerHTML = '';
  const products = await getProducts();
  const $listProducts = createElement('ul');
  console.log(products);

  for (const product of products.item) {
    const name = product.name.slice(0, 40);
    const card = renderCard({
      path: product.image,
      name: `${name}...`,
      quant: product.quantity,
      amount: product.bestPriceFormated,
    });
    $listProducts.appendChild(card);
  }
  $productsList.appendChild($listProducts);
};

const renderCard = ({ path, name, quant, amount }) => {
  const $imageProduct = createElement('img', { class: 'image-product', src: `./src${path}` });
  const $nameProduct = createElement('span', { class: 'name-product', textContent: name });
  const $quantityProduct = createElement('span', { class: 'quantity-product', textContent: `Qtd: ${quant}` });
  const $amountProduct = createElement('span', { class: 'amount-product', textContent: amount });
  const $quantityAmount = createElement('div', {
    class: 'quantity-amount',
    children: [$quantityProduct, $amountProduct],
  });
  const $infoProduct = createElement('div', { class: 'info-product', children: [$nameProduct, $quantityAmount] });
  const $card = createElement('div', { class: 'card', children: [$imageProduct, $infoProduct] });
  return $card;
};

const getProducts = async () => {
  const response = await fetch('http://localhost:3000/cart');
  const result = await response.json();
  return result;
};

const products = await getProducts();
const totalProducts = await products.item.reduce((acc, elem) => {
  return (acc = acc + elem.bestPrice);
}, 0);

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

const $searchButton = createElement('span', { class: ['material-icons', 'search-button'], textContent: 'search' });
const $personButton = createElement('span', { class: ['material-icons', 'person-button'], textContent: 'person' });
const $cartButton = createElement('span', {
  class: ['material-icons', 'cart-button'],
  textContent: 'shopping_cart',
  onclick: handleMenu,
});

const $productsList = createElement('div', { class: 'products-list' });
const $totalText = createElement('span', {
  class: 'total-text',
  textContent: 'Total do pedido:',
});
const $totalValue = createElement('span', {
  class: 'total-value',
  textContent: formatMoney(totalProducts),
});
const $totalProducts = createElement('span', {
  class: 'total-products',
  children: [$totalText, $totalValue],
});
const $buttonBuy = createElement('button', { class: 'button-buy', textContent: 'FINALIZAR COMPRA' });
const $menu = createElement('div', { class: 'menu', children: [$productsList, $totalProducts, $buttonBuy] });

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
