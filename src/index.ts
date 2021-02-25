type Deck = NormalCard[]
type Color = "spade" | "diamond" | "club" | "heart";
type NormalCard = {
    color: Color
    mark: number
}

function createDeck(): Deck {
    const deck: Deck = [];
    for (let i = 1; i <= 13; i++){
        deck.push({
            color:"spade",
            mark: i
        });
        deck.push({
            color:"diamond",
            mark: i
        });
        deck.push({
            color:"club",
            mark: i
        });
        deck.push({
            color:"heart",
            mark: i
        })
    }
    return deck;
}

function printDeck(deck: Deck) {
    let res = '\n'
    deck.forEach(card => {
        let str = card.color;
        if(card.mark <= 10){
            str += card.mark;
        }
        else if(card.mark === 11){
            str += 'J'
        }
        else if(card.mark === 12){
            str += 'Q'
        }
        else if(card.mark === 13){
            str += 'K'
        }
        res +=  str + '\t'
    })
    console.log(res);
}

const deck = createDeck();
printDeck(deck);