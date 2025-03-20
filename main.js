/* itt kell példányosítani a játékteret */
import JatekTer from "./JatekTer.js";
import Info from "./Info.js";

let jatekTerElem = document.getElementsByClassName("jatekter")[0];
let asideElem = document.getElementsByClassName("lepes")[0];
new JatekTer(jatekTerElem);
new Info(asideElem);
