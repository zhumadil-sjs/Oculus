import { container } from "../base.js";
import { dropDown, header } from "./const.js";
import nav from "./nav.js";
import Cart from './cart.js';
import "./dropDownItem.js";

const headerRow = document.createElement('div');
headerRow.style.display = 'flex';
headerRow.style.justifyContent = 'space-between';
headerRow.style.alignItems = 'center';

header.style.border = '1px solid #eeeeee';

header.appendChild(container);
container.appendChild(headerRow);
headerRow.appendChild(dropDown);
headerRow.appendChild(nav);
headerRow.appendChild(Cart);

export default header;
