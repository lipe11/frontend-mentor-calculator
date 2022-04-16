class CalcButton extends HTMLElement {
  connectedCallback() {
    const value = this.attributes.value.value
    const type = this.attributes.type.value
    this.createButton(value, type)
  }

  createButton(value, type) {
    this.innerHTML = `<button>${value}</button>`
    this.querySelector('button').addEventListener('click', (event) => {
      this.dispatchEvent(
        new CustomEvent('calc-click', {
          detail: { value, type },
        })
      )
    })
  }
}

customElements.define('calc-button', CalcButton)

export const onButtonClick = function (handler) {
  document
    .querySelectorAll('calc-button')
    .forEach((e) => e.addEventListener('calc-click', handler))
}
