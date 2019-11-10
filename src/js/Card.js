export default class Card {
  constructor({ card, target, onDelete, onEdit }) {
    this.card = card
    this.target = target
    this.onDelete = onDelete
    this.onEdit = onEdit

    this.createCardElement()
    this.addToggleLogic()
    this.addDeleteLogic()
    this.addEditLogic()
  }

  createCardElement() {
    const el = document.createElement('section')
    this.target.appendChild(el)
    this.el = el
    this.fillCard(this.card)
  }

  fillCard({ title, question, answer }) {
    this.el.innerHTML = `
    <div class="card__icon-container">
      <img class="card--edit" data-js="icon-edit" src="/pen.8874f1a8.svg" /><img
        class="card--delete"
        data-js="icon-delete"
        src="/trashcan.9ba8215f.svg"
      />
    </div>
    <h1>${title}</h1><br>
    <p class="card__question"><strong>Frage:</strong> ${question}</p>
    <p data-js="card-answer" class="card__answer" hidden>${answer}</p><br>
    <button data-js="btn-answer" class="card--toggle">Antwort anzeigen</button>`
  }

  addToggleLogic() {
    const btnEl = this.el.querySelector('[data-js="btn-answer"]'),
      answerEl = this.el.querySelector('[data-js="card-answer"]')
    btnEl.addEventListener('click', () => this.toggleContent(btnEl, answerEl))
  }

  addDeleteLogic() {
    const deleteHandler = this.el.querySelector('[data-js="icon-delete"]')
    deleteHandler.addEventListener('click', () => this.onDelete(this.card))
  }

  addEditLogic() {
    const editHandler = this.el.querySelector('[data-js="icon-edit"]')
    editHandler.addEventListener('click', () => {
      const overlayState = document.querySelector('.overlay')
      overlayState.classList.add('overlay--active')
      this.onEdit(this.card)
    })
  }

  toggleContent(btnEl, answerEl) {
    answerEl.toggleAttribute('hidden')
    answerEl.classList.toggle('toggle--animation')
    btnEl.textContent =
      btnEl.textContent === 'Antwort anzeigen'
        ? 'Antwort verstecken'
        : 'Antwort anzeigen'
  }
}
