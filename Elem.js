export default class Elem {
  #adat;
  #index;
  constructor(adat, index, szuloElem, elem) {
    this.#adat = adat;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.elem = elem;
    this.megjelenit();
    this.elem = document.querySelector(".elem:last-child");
    this.elem.addEventListener("click", () => {
        if(this.#adat === ""){
            const esemeny = new CustomEvent("kivalaszt", { detail: this.#index });
            window.dispatchEvent(esemeny);
        }
    });
    this.esemeny();
  }
  megjelenit() {
    let html = `<div class="elem">
                    ${this.#adat}            
                </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
  esemeny() {}
}
