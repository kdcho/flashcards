export default class Form {
  constructor({ onSubmit, onEdit }) {
    this.editingId = null
    const overlay = document.querySelector('[data-js=overlay]')
    const templateEl = document.querySelector('#form-template').innerHTML
    overlay.insertAdjacentHTML('afterbegin', templateEl)

    this.el = document.querySelector('[data-js=form]')
    this.onSubmit = onSubmit
    this.onEdit = onEdit
    this.addSubmitLogic()
  }

  addSubmitLogic() {
    this.el.addEventListener('submit', event => {
      event.preventDefault()
      const dataList = new FormData(this.el)
      const data = Object.fromEntries(dataList)
      this.editingId
        ? this.onEdit({ ...data, id: this.editingId })
        : this.onSubmit(data)
      this.editingId = null

      const overlayState = document.querySelector('[data-js="overlay"]')
      overlayState.classList.remove('overlay--active')
      this.el.reset()
    })
  }

  fillFields(card) {
    this.editingId = card.id
    Object.keys(card).forEach(key => {
      this.el[key] && (this.el[key].value = card[key])
    })
  }
}
