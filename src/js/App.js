import Form from './Form'
import { getCards, postCard, deleteCard, patchCard } from './services'
import Card from './Card'

export default class App {
  constructor() {
    this.cardContainer = document.querySelector('[data-js=card-container]')

    this.form = new Form({
      onSubmit: this.handleSubmit,
      onEdit: this.handleEdit
    })

    this.loadCards()
  }

  loadCards() {
    getCards()
      .then(cards => {
        this.cards = cards
        this.renderCards()
      })
      .catch(err => {
        console.log('--->', err)
        this.cards = []
      })
  }
  // wie wuerde man das ohne class properties machen?
  handleSubmit = card => {
    postCard(card).then(newCard => {
      this.cards = [...this.cards, newCard]
      this.renderCards()
    })
  }

  handleDelete = card => {
    deleteCard(card.id).then(deletedCard => {
      this.cards = this.cards.filter(card => card.id !== deletedCard.id)
      this.renderCards()
    })
  }

  handleEdit = card => {
    patchCard(card).then(patchedCard => {
      const index = this.cards.findIndex(card => card.id === patchedCard.id)
      this.cards[index] = patchedCard
      this.renderCards()
    })
  }

  startEditing = card => {
    this.form.fillFields(card)
  }

  renderCards() {
    this.cardContainer.innerHTML = ''
    this.cards.forEach(
      card =>
        new Card({
          card,
          target: this.cardContainer,
          onDelete: this.handleDelete,
          onEdit: this.startEditing
        })
    )
  }
}
