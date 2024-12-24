interface typeCard {
    rank: string;
    suit: string;
}
class PokerHand {
    private cardArrays: typeCard[];
    constructor(cardArray: typeCard[]) {
        this.cardArrays = cardArray;
    }
    af() {
        if(this.cardArrays.length > 0) {
            let cardsValue1: string[] = [`${this.cardArrays[0].rank}`, `${this.cardArrays[0].suit}`];
            let cardsValue2: string[] = [`${this.cardArrays[1].rank}`, `${this.cardArrays[1].suit}`];
            let cardsValue3: string[] = [`${this.cardArrays[2].rank}`, `${this.cardArrays[2].suit}`];
            let cardsValue4: string[] = [`${this.cardArrays[3].rank}`, `${this.cardArrays[3].suit}`];
            let cardsValue5: string[] = [`${this.cardArrays[4].rank}`, `${this.cardArrays[4].suit}`];

            if(cardsValue1[0] === 'A' && cardsValue2[0] === 'K' && cardsValue3[0] === 'Q' && cardsValue4[0] === 'J' && cardsValue5[0] === '10') {
                if(cardsValue1[1] === cardsValue2[1] && cardsValue1[1] === cardsValue3[1] && cardsValue1[1] === cardsValue4[1] && cardsValue1[1] === cardsValue5[1]) {
                    return 'royal flush'
                }
            } else if (+cardsValue1[0] > +cardsValue2[0] && +cardsValue2[0] > +cardsValue3[0] && +cardsValue3[0] > +cardsValue4[0] && +cardsValue4[0] > +cardsValue5[0]) {
                if(cardsValue1[0] === cardsValue2[0] && cardsValue1[0] === cardsValue3[0] && cardsValue1[0] === cardsValue4[0] && cardsValue1[0] === cardsValue5[0]) {
                    return 'straight flush'
                }
            } else if(cardsValue1[0] === cardsValue2[0] && cardsValue1[0] === cardsValue3[0] && cardsValue1[0] === cardsValue4[0] && cardsValue1[0] === cardsValue5[0]) {
                return 'four of a kind'
            } else if(cardsValue1[0] === cardsValue2[0] && cardsValue1[0] === cardsValue3[0] && cardsValue4[0] === cardsValue5[0]) {
                return 'full house'
            } else if(cardsValue1[1] === cardsValue2[1] && cardsValue1[1] === cardsValue3[1] && cardsValue1[1] === cardsValue4[1] && cardsValue1[1] === cardsValue5[1]) {
                return 'flush'
            } else if(+cardsValue1[0] > +cardsValue2[0] && +cardsValue2[0] > +cardsValue3[0] && +cardsValue3[0] > +cardsValue4[0] || +cardsValue2[0] > +cardsValue3[0] && +cardsValue3[0] > +cardsValue4[0] && +cardsValue4[0] > +cardsValue5[0]) {
                return 'straight'
            } else if(cardsValue1[0] === cardsValue2[0] && cardsValue1[0] === cardsValue3[0] || cardsValue3[0] === cardsValue4[0] && cardsValue3[0] === cardsValue5[0]) {
                return 'three of a kind'
            } else if(cardsValue1[0] === cardsValue2[0] && cardsValue3[0] === cardsValue4[0] || cardsValue2[0] === cardsValue3[0] && cardsValue4[0] === cardsValue5[0]) {
                return 'two pairs'
            } else if(cardsValue1[0] === cardsValue2[0] || cardsValue2[0] === cardsValue3[0] || cardsValue3[0] === cardsValue4[0] || cardsValue4[0] === cardsValue5[0]) {
                return 'one pair'
            } else {
                return 'пока комбинаций нет'
            }

        } else {
            console.log('карт пока нет')
        }
    }
}

export default PokerHand