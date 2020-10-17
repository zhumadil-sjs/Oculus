import { languages } from './const.js';
import  dropDown  from './styles/dropdown.js';

for (let i = 0; i < languages.length; i++) {
    let dropDownItems = document.createElement('li');
    dropDownItems.style.textTransform = 'uppercase';
    // dropDown.style.display = 'none';
    dropDownItems.innerHTML = `${languages[i]}`;
    dropDown.appendChild(dropDownItems);
    dropDown.addEventListener('click', function() {
        dropDownItems.style.display = 'block'
    })
}