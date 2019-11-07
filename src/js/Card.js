export default class Card {
  constructor(card) {
    this.createCardElement(card)
  }

  createCardElement(card) {
    const el = document.createElement('section')
    this.fillCard(card, el)
    document.body.appendChild(el)
  }

  fillCard({ title, question, answer }, el) {
    el.innerHTML = `<h1>${title}</h1><br>
    <p class="question"><strong>Frage:</strong> ${question}</p>
    <p data-js="card-answer" class="answer" hidden>${answer}</p><br>
    <button data-js="btn-answer" class="btn__answer">Antwort anzeigen</button>`
    this.addToggleLogic(el)
  }

  addToggleLogic(el) {
    const btnEl = el.querySelector('[data-js="btn-answer"]'),
      dataJSAnswer = el.querySelector('[data-js="card-answer"]')
    btnEl.addEventListener('click', () => this.showContent(btnEl, dataJSAnswer))
  }

  showContent(btnEl, dataJSAnswer) {
    dataJSAnswer.toggleAttribute('hidden')
    dataJSAnswer.classList.toggle('toggleAnimation')
    btnEl.textContent =
      btnEl.textContent === 'Antwort anzeigen'
        ? 'Antwort verstecken'
        : 'Antwort anzeigen'
  }
}
