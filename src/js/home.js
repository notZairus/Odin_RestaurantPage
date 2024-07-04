import { attachMenu } from "./menu";

//components
import { content } from './components';
import { navigations } from './components';

export function attachHome() {
  let home = document.createElement('div');
  home.id = 'home';

  let homee = document.createElement('div');
  homee.classList.add('home');
  home.appendChild(homee);

  let textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  homee.appendChild(textContainer);

  let h1 = document.createElement('h1');
  h1.textContent = "Adam's Ice Cream";
  textContainer.appendChild(h1);

  let h2 = document.createElement('h2');
  h2.textContent = "Tasty Yet Affordable Ice Creams!";
  textContainer.appendChild(h2);

  let menuBtn = document.createElement('button');
  menuBtn.id = "menu-btn";
  menuBtn.textContent = "Menu";
  textContainer.appendChild(menuBtn);

  menuBtn.addEventListener('click', () => {
    navigations.querySelectorAll('button').forEach((button) => {
      button.classList.remove('active');
  
      if (button.textContent === "Menu") {
        button.classList.add('active');
      }
    })

    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }

    content.appendChild(attachMenu());
    
  })

  return home;
}

