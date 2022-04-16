class CalcDisplay extends HTMLElement {
  connectedCallback() {
    this.show(0)
  }

  show(value) {
    this.innerHTML = value.toString().slice(0, 15)
  }
}

customElements.define('calc-display', CalcDisplay)

export const getCalcDisplay = function () {
  return document.querySelector('calc-display')
}
