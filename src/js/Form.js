export default class Form {
  constructor(onSubmit) {
    const templateEl = document.querySelector('#form-template').innerHTML
    document.body.insertAdjacentHTML('afterbegin', templateEl)
    this.el = document.querySelector('[data-js=form]')
    this.addSubmitLogic(onSubmit)
  }

  addSubmitLogic(onSubmit) {
    this.el.addEventListener('submit', event => {
      event.preventDefault()
      const dataList = new FormData(this.el)
      const data = Object.fromEntries(dataList)
      onSubmit(data)
      this.clearForm()
    })
  }
  clearForm() {
    this.el.reset()
  }
}
