console.log('it works')

fetch('http://localhost:3333/cards')
  .then(res => res.json())
  .then(cards => console.log(cards))
