
import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import CardDesc from './lib/CardDesc'


const App = () => {
  const [cards, setCards] = useState<any[]>()

  const clickCard = () => {
    const deck = new CardDesc();
    const get5Cards = deck.getCards(5);
    setCards(get5Cards)
  }

  const examinationCard = () => {
    if (cards?.length != undefined) {
      return (
        <div className="playingCards faceImages">
          {cards?.map((card) => (
            <Card rank={card.rank} suit={card.suit} />
          ))}
        </div>
      )
    }
  }

  return (
    <>
      <button onClick={clickCard}>раздать карты</button>
      {examinationCard()}
    </>
  )
}

export default App
