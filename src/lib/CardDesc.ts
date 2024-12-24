import Card from "./Card";

class CardDesc {
    public deck: Card[];

    constructor() {
        this.deck = [];
        const suits = ['hearts', 'diams', 'clubs', 'spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

        for (const suit of suits) {
            for (const rank of ranks) {
                this.deck.push(new Card(rank, suit));
            }
        }
    }

    getCard() {
        let randomCard = Math.floor(Math.random() * this.deck.length)
        let deleteCard = this.deck.splice(randomCard, 1)[0]
        return deleteCard;
    }

    getCards(howMany: number) {
        if(howMany > this.deck.length) {
            console.error('столько карт нет')
            return;
        }

        let newCardArray = [];
        for(let i = 0; i < howMany; i++) {
            newCardArray.push(this.getCard())
        }
        return newCardArray
    }

}
export default CardDesc;