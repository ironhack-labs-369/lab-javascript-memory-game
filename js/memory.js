class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
    }
    shuffleCards(cards) {
        // let i = cards.length, k , temp;      // k is to generate random index and temp is to swap the values
        // while(--i > 0){
        // k = Math.floor(Math.random() * (i+1));
        // temp = cards[k];
        // cards[k] = cards[i];
        // cards[i] = temp;
        // let shuffled = Math.floor(Math.random() * cards.length);
        // console.log('shuffled', shuffled);
        // return cards;
    }
    checkIfPair(card1, card2) {
        this.pairsClicked++;
        if (card1 === card2) {
            this.pairsGuessed++;
            return true;
        }
        return false;
    }
    isFinished() {}
}
