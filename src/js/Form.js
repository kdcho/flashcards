export default class Form {
  constructor(onClick) {
    const templateEl = document.querySelector('#form-template')
    const template = templateEl.innerHTML
    document.body.insertAdjacentHTML('beforeend', template)
    this.el = document.querySelector('.form')
    this.addClickLogic(this.el, onClick)
  }

  addClickLogic(el, onClick) {
    this.el.addEventListener('submit', event => {
      event.preventDefault()
      this.buildFormData(el, onClick)
      this.clearForm(el)
    })
  }

  buildFormData(el, onClick) {
    const formObj = {
      title: el.title.value,
      question: el.question.value,
      answer: el.answer.value
    }
    onClick(formObj)
  }

  clearForm(el) {
    el.reset()
  }
}
