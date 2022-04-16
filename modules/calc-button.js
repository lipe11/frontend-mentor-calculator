class CalcButton extends HTMLElement {
  // on mounted
  connectedCallback() {
    const key = this.attributes.key.value
    const action = this.attributes.action.value
    this.createButton(key, action)
  }

  // create the inner button
  createButton(key, action) {
    this.innerHTML = `<button>${key}</button>`
    this.querySelector('button').addEventListener('click', (event) => {
      this.dispatchEvent(
        new CustomEvent('calc-click', {
          detail: { key, action },
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
