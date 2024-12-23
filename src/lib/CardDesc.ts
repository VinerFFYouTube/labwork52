import Card from "./Card";

class CardDesc {
    public deck: Card[];

    constructor() {
        this.deck = ['afasdf']
    }

    buv = () => {
        console.log(this.deck)
    }
}

let a = new CardDesc();
a.buv()

export default CardDesc;