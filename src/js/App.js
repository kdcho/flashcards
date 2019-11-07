import Form from './Form'
import { getCards, postCard } from './services'
import Card from './Card'

export default class App {
  constructor() {
    this.cardContainer = document.querySelector('[data-js=card-container]')
    getCards()
      .then(cards => {
        this.cards = cards
        this.renderCards()
      })
      .catch(err => console.log('--->', err))

    new Form(card => this.handleSubmit(card))
  }

  handleSubmit(card) {
    postCard(card).then(newCard => {
      this.cards = [...this.cards, newCard]
      this.renderCards()
    })
  }

  renderCards() {
    this.cardContainer.innerHTML = ''
    this.cards.forEach(card => new Card(card, this.cardContainer))
  }
}
