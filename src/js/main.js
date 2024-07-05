import '../style/main.css';

//sections to attach base on nav-btn
import { attachHome } from './home';
import { attachMenu } from './menu';
import { attachContact } from './contact';

//components
import { content } from './components';
import { navigations } from './components';


content.appendChild(attachHome());

navigations.addEventListener('click', (event) => {
  let target = event.target;

  if (target.textContent != 'Home' && target.textContent != 'Menu' && target.textContent != 'Contact') {
    return;
  }
  
  navigations.querySelectorAll('button').forEach((button) => {
    button.classList.remove('active');
  })

  target.classList.add('active');

  if (target.textContent == 'Home') {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(attachHome());
  }
  else if (target.textContent == 'Menu') {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(attachMenu());
  }
  else if (target.textContent == 'Contact') {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(attachContact());
  }
})