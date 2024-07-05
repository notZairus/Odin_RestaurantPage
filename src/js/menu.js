
import chocolate from '../assets/chocolate.jpg';
import banana from '../assets/banana.jpg';
import pineapple from '../assets/pineapple.jpg';
import vanilla from '../assets/vanilla.jpg';
import bcherry from '../assets/blackcherry.jpg';
import cookiesncream from '../assets/cookiesncream.jpg';
import brittle from '../assets/butterbrittle.jpg';
import caramel from '../assets/caramelcollision.jpg';

export function attachMenu() {
  let menu = document.createElement('div');
  menu.id = 'menu';

  let h1 = document.createElement('h1');
  h1.textContent = "Menu";
  menu.appendChild(h1);

  let menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  menu.appendChild(menuContainer);

  let icContainer = document.createElement('div');
  icContainer.classList.add('ic-container');
  menuContainer.appendChild(icContainer);

  icContainer.appendChild(addProduct(chocolate, 'Chocolate', '25.00'));
  icContainer.appendChild(addProduct(banana, 'Banana', '25.00'));
  icContainer.appendChild(addProduct(pineapple, 'Pineapple', '25.00'));
  icContainer.appendChild(addProduct(vanilla, 'Vanilla', '25.00'));
  icContainer.appendChild(addProduct(bcherry, 'Black Cherry', '28.00'));
  icContainer.appendChild(addProduct(cookiesncream, 'Cookies & Cream', '28.00'));
  icContainer.appendChild(addProduct(brittle, 'Butter Brittle', '30.00'));
  icContainer.appendChild(addProduct(caramel, 'Caramel Collision', '30.00'));

  return menu;
}

function addProduct(imgSrc, flavor, price) {

  let product = document.createElement('div');
  product.classList.add('product');

  let imgContainer = document.createElement('div');
  imgContainer.classList.add('product-img-container');
  product.appendChild(imgContainer);

  let productImg = document.createElement('img');
  productImg.src = imgSrc;
  imgContainer.append(productImg);

  let infoContainer = document.createElement('div');
  infoContainer.classList.add('product-info-container');
  product.appendChild(infoContainer);

  let productName = document.createElement('p');
  productName.classList.add('product-name');
  productName.textContent = flavor + " Ice Cream";
  infoContainer.appendChild(productName);

  let productPrice = document.createElement('p');
  productPrice.classList.add('product-price');
  productPrice.textContent = "Php " + price;
  infoContainer.appendChild(productPrice);

  return product;
}