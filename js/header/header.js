import { container } from "../base.js";
import { dropDown, header } from "./const.js";
import nav from "./nav.js";
import "./dropDownItem.js";

header.appendChild(container);
container.appendChild(dropDown);
container.appendChild(nav);

export default header;
