class ThemeSwitcher extends HTMLElement {
  // on mounted
  connectedCallback() {
    const themes = this.attributes.themes.value.split(' ')
    this.createOptions(themes)
    this.selectOption(0, themes[0])
  }

  // create option for each theme
  createOptions(themes) {
    themes.forEach((theme, index) => {
      const label = index + 1
      this.createOptionElement(label, () => this.selectOption(index, theme))
    })
  }

  // generate dom element for option
  createOptionElement(label, handler) {
    const div = document.createElement('div')
    div.innerHTML = `
      <button>${label}</button>
      <span>${label}</span>
    `
    div.querySelector('button').addEventListener('click', handler)
    this.append(div)
  }

  // when option is selected
  selectOption(index, theme) {
    this.querySelectorAll('button').forEach(
      (button) => (button.style.opacity = 0)
    )
    this.children[index].querySelector('button').style.opacity = 1
    document.body.className = theme
  }
}

customElements.define('theme-switcher', ThemeSwitcher)
