export function postCard(card) {
  return fetch('http://localhost:3333/cards', {
    method: 'POST',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}

export function getCards() {
  return fetch('http://localhost:3333/cards').then(res => res.json())
}
