import Elem from "./Elem.js";
import Info from "./Info.js";

/* itt példányosítjuk 9* az elemet */
export default class JatekTer {
  #lista = ["", "", "", "", "", "", "", "", ""];
  #lepes = 0;
  constructor(szuloElem) {
    let infoPanel = document.querySelector("aside");
    this.info = new Info(infoPanel);
    this.info.megjelenit("X");
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.esemenykezelo();
    this.ellenoriz();
  }
  megjelenit() {
    for (let index = 0; index < this.#lista.length; index++) {
      const element = this.#lista[index];
      const elem = new Elem(element, index, this.szuloElem);
    }
  }
  esemenykezelo() {
    window.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
      if (this.#lepes % 2 === 0) {
        this.#lista[event.detail] = "X";
        this.info.megjelenit("O");
      } else {
        this.#lista[event.detail] = "O";
        this.info.megjelenit("X");
      }
      this.#lepes++;
      this.szuloElem.innerHTML = "";
      this.megjelenit();
    });
  }
  ellenoriz() {}
  getLepes() {
    return this.#lepes;
  }
}
