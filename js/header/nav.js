import { nav, ul, navLinks } from "./const.js";

nav.appendChild(ul);

for (let i = 0; i < navLinks.length; i++) {
    ul.style.display = 'flex';
  let li = document.createElement("li");
  li.style.listStyle = 'none';
  li.style.marginLeft = '35px';
  let a = document.createElement("a");
  a.innerHTML = `${navLinks[i]}`;
  a.href = "#";
  a.className = "nav__links";
  a.style.textDecoration = 'none';
  a.style.color = '#7b7b7b';
  a.style.fontSize = '12px';
  a.style.letterSpacing = '2px';
  a.style.lineHeight = '30px';
  a.style.fontFamily = 'pappins';
  a.style.textTransform = 'uppercase';
  li.appendChild(a);
  ul.appendChild(li);
}

export default nav;




