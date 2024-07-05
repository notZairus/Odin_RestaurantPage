
export function attachContact() {

  let contact = document.createElement('div');
  contact.id = 'contact';

  let h1 = document.createElement('h1');
  h1.textContent = "Contact";
  contact.appendChild(h1);

  let contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  contact.appendChild(contactContainer);

  let name = document.createElement('h2');
  name.textContent = "Zairus Bermillo";

  let fb = document.createElement('h2');
  fb.textContent = "Facebook:";
  contactContainer.appendChild(fb);
  contactContainer.appendChild(name);
  
  let ig = document.createElement('h2');
  ig.textContent = "Instagram:";
  contactContainer.appendChild(ig);
  contactContainer.appendChild(name);

  let gh = document.createElement('h2');
  gh.textContent = "Github:";
  contactContainer.appendChild(gh);

  let un = document.createElement('h2');
  gh.textContent = "!Zairus";
  contactContainer.appendChild(un);

  return contact;
}