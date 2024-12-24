import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import CardDesc from './lib/CardDesc';
import PokerHand from './lib/PokerHand';

const App = () => {
  const [cards, setCards] = useState<any[]>([]);

  const a = new PokerHand(cards);
  // a.af()

  const clickCard = () => {



    const deck = new CardDesc();
    const get5Cards: any = deck.getCards(5);
    setCards(get5Cards);

    // console.log(cards[0].rank)

  };

  return (
    <>
      <button onClick={clickCard}>Раздать карты</button>

      {cards.length > 0 && (
        <div>
          <div className="playingCards faceImages">
            {cards.map((card, index) => (
              <Card key={index} rank={card.rank} suit={card.suit} />
            ))}
          </div>
          <p>combination: {a.af()}</p>
        </div>
      )}
    </>
  );
};

export default App;
