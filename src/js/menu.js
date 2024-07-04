
export function attachMenu() {
  let menu = document.createElement('div');
  menu.id = 'menu';

  let h1 = document.createElement('h1');
  h1.textContent = "Menu";
  menu.appendChild(h1);

  let menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  menu.appendChild(menuContainer);

  return menu;
}