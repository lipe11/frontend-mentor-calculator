const engine = {
  _value: '0',
  memory: null,

  get value() {
    return parseFloat(this._value)
  },

  set value(num) {
    this._value = num.toString()
  },

  // add new digit to buffer
  append(key) {
    if (key === '.' && this._value.includes('.')) return this.value
    this._value += key
    return this.value
  },

  // enter a number and save operation
  enter(key) {
    const value = this.result()
    this.memory = { key, value }
    this.reset()
    return value
  },

  // clears the buffer
  reset() {
    this.value = 0
    return this.value
  },

  // deletes last digit
  delete() {
    this._value = this._value.slice(0, 15).slice(0, -1)
    if (isNaN(this.value)) this.reset()
    return this.value
  },

  // calculates final result
  result() {
    if (this.memory) {
      const { key, value } = this.memory
      if (key === '+') this.value = value + this.value
      if (key === '-') this.value = value - this.value
      if (key === 'x') this.value = value * this.value
      if (key === '/') this.value = value / this.value
      this.memory = null
    }
    return this.value
  },
}

export const computeKey = function (action, key) {
  return engine[action](key)
}
