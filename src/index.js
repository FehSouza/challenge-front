import { createElement } from './utils/createElement/index.js';
import { formatMoney } from './utils/currency/index.js';
import { importCSS } from './utils/importCSS/index.js';

importCSS('./src/styles/index.css');

const build = async () => {
  const handleMenu = async (event) => {
    event.stopPropagation();
    if (statusButtons === true) {
      $buttonsColumnWrapper.classList.remove('buttons-column-wrapper-open');
      $buttonsColumn.classList.remove('buttons-column-open');
      statusButtons = false;
    }
    openMenu();
    await renderProducts();
  };

  let statusMenu = false;
  const openMenu = () => {
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

  const handleButtons = (event) => {
    event.stopPropagation();
    if (statusMenu === true) {
      $menu.classList.remove('menu-open');
      $cartButton.classList.remove('cart-open');
      statusMenu = false;
    }
    openButtons();
  };

  let statusButtons = false;
  const openButtons = () => {
    if (statusButtons === false) {
      $buttonsColumnWrapper.classList.add('buttons-column-wrapper-open');
      $buttonsColumn.classList.add('buttons-column-open');
      statusButtons = true;
    } else {
      $buttonsColumnWrapper.classList.remove('buttons-column-wrapper-open');
      $buttonsColumn.classList.remove('buttons-column-open');
      statusButtons = false;
    }
  };

  const closeMenus = () => {
    if (statusMenu === true) {
      $menu.classList.remove('menu-open');
      $cartButton.classList.remove('cart-open');
      statusMenu = false;
    }
    if (statusButtons === true) {
      $buttonsColumnWrapper.classList.remove('buttons-column-wrapper-open');
      $buttonsColumn.classList.remove('buttons-column-open');
      statusButtons = false;
    }
  };

  const renderProducts = async () => {
    $productsList.innerHTML = '';
    const products = await getProducts();
    const $listProducts = createElement('ul');

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

  const $logo = createElement('img', { class: 'logo', src: './src/images/logo/agencia-eplus-n-logo.png' });

  const $buttonLine1 = createElement('button', { class: ['button', 'button-line-1'], textContent: 'Lorem ipsum' });
  const $buttonLine2 = createElement('button', { class: ['button', 'button-line-2'], textContent: 'Lorem ipsum' });
  const $buttonLine3 = createElement('button', { class: ['button', 'button-line-3'], textContent: 'Lorem ipsum' });
  const $buttonLine4 = createElement('button', { class: ['button', 'button-line-4'], textContent: 'Lorem ipsum' });
  const $buttonLine5 = createElement('button', { class: ['button', 'button-line-5'], textContent: 'Lorem ipsum' });
  const $buttonsWrapper = createElement('div', {
    class: 'buttons-wrapper',
    children: [$buttonLine1, $buttonLine2, $buttonLine3, $buttonLine4, $buttonLine5],
  });
  const $buttonColumn1 = createElement('button', { class: ['button', 'button-column-1'], textContent: 'Lorem ipsum' });
  const $buttonColumn2 = createElement('button', { class: ['button', 'button-column-2'], textContent: 'Lorem ipsum' });
  const $buttonColumn3 = createElement('button', { class: ['button', 'button-column-3'], textContent: 'Lorem ipsum' });
  const $buttonColumn4 = createElement('button', { class: ['button', 'button-column-4'], textContent: 'Lorem ipsum' });
  const $buttonColumn5 = createElement('button', { class: ['button', 'button-column-5'], textContent: 'Lorem ipsum' });
  const $buttonsColumnWrapper = createElement('div', {
    class: 'buttons-column-wrapper',
    children: [$buttonColumn1, $buttonColumn2, $buttonColumn3, $buttonColumn4, $buttonColumn5],
  });
  const $buttonsColumn = createElement('span', {
    class: ['material-icons', 'buttons-column'],
    textContent: 'menu',
    children: $buttonsColumnWrapper,
    onClick: (event) => handleButtons(event),
  });

  const $searchButton = createElement('span', { class: ['material-icons', 'search-button'], textContent: 'search' });
  const $personButton = createElement('span', { class: ['material-icons', 'person-button'], textContent: 'person' });
  const $cartButton = createElement('span', {
    class: ['material-icons', 'cart-button'],
    textContent: 'shopping_cart',
    onclick: (event) => handleMenu(event),
  });

  const $productsList = createElement('div', { class: 'products-list' });

  const products = await getProducts();
  const totalProducts = products.item.reduce((acc, elem) => {
    return (acc = acc + elem.bestPrice);
  }, 0);

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

  const $menu = createElement('div', {
    class: 'menu',
    children: [$productsList, $totalProducts, $buttonBuy],
    onClick: (event) => event.stopPropagation(),
  });

  const $buttonsInfoWrapper = createElement('div', {
    class: 'buttons-info-wrapper',
    children: [$searchButton, $personButton, $cartButton, $menu],
  });

  const $headerWrapper = createElement('div', {
    class: 'header-wrapper',
    children: [$logo, $buttonsWrapper, $buttonsInfoWrapper, $buttonsColumn],
  });

  const $header = createElement('header', { class: 'header', children: $headerWrapper });

  const $container = document.querySelector('.container');
  $container.appendChild($header);
  $container.addEventListener('click', closeMenus);
};

build();
