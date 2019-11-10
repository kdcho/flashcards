export function getCards() {
  return fetch('http://localhost:3333/cards').then(res => res.json())
}

export function postCard(card) {
  return fetch('http://localhost:3333/cards', {
    method: 'POST',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export function patchCard(card) {
  return fetch('http://localhost:3333/cards/' + card.id, {
    method: 'PATCH',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export function deleteCard(id) {
  return fetch('http://localhost:3333/cards/' + id, {
    method: 'DELETE'
  }).then(res => res.json())
}
