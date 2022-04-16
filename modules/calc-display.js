class CalcDisplay extends HTMLElement {
  // on mounted
  connectedCallback() {
    this.show(0)
  }

  // display the calc value
  show(value) {
    this.innerHTML = value.toString().slice(0, 15)
  }
}

customElements.define('calc-display', CalcDisplay)

export const getCalcDisplay = function () {
  return document.querySelector('calc-display')
}
