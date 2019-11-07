import Form from './Form'
import { getCards } from './services'
import Card from './Card'
import { postCard } from './services'

export default class App {
  constructor() {
    //const data = postCard(card)
    getCards()
      .then(cards => {
        this.cards = cards
        cards.forEach(card => new Card(card))
      })
      .catch(err => console.log('--->', err))

    new Form(card => this.handleSubmit(card))
  }

  handleSubmit(card) {
    console.log('hier', card)
    this.cards = [card, ...this.cards]
  }
}
