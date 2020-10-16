import { cartPrice, div } from './const.js';
const Cart = div;
Cart.className = 'cart';
for ( let i  = 0; i < cartPrice.length; i++) {
let cartItem = document.createElement('span');
cartItem.innerHTML = `${cartPrice[i]}`;
cartItem.style.color = "#7b7b7b";
cartItem.style.fontSize = "12px";
cartItem.style.letterSpacing = "2px";
cartItem.style.lineHeight = "30px";
cartItem.style.fontFamily = "Poppins";
cartItem.style.textTransform = "uppercase";
Cart.appendChild(cartItem);
console.log(cartItem);
}
export default Cart;