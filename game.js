// const userIsOn = "home";

const home = {
    // start : document.querySelector("#start"),
    // about : document.querySelector("#about"),
    // config : document.querySelector("#form"),
    
    initGame: () => {
        // game.getOptions()
        
        game.loadOptions(config)
        game.generateCards()
        game.includeCards()
        console.log('nice')
    },

    // getOptions = () => {

    // },

}

const config = {
    deckSize : 36,
    voice : false,
    cardsTheme : "fruits",
    boardTheme : "default"
}

const game = {
    // board : document.querySelector("#board"),
    deckSize : 0,
    cardsTheme : "",
    boardTheme: "",
    voice : false,
    cardsDeck : [],

    loadOptions : (config) => {
        this.cardsDeck = [config.deckSize],
        this.deckSize = config.deckSize,
        this.cardsTheme = config.cardsTheme,
        this.boardTheme = config.boardTheme,
        this.voice = config.voice
    },

    loadCard : (number) => {
        let path = "decks/" + cardsTheme + "/"
        let format = ".png"

        
        let card = '<li class="board__card" value="' + number + '"> \
                        <img class="board__card--image" src="' + path + number + format + '" /> \
                    </li>'

        return card;
        },

    generateCards : () => {
        calledPositions = []
        position = 0

        //for deck size
        for(let cardsCount = 1; cardsCount <= this.deckSize; cardsCount++) 
        { 
            //don't repeat the same position and call a card from dir
            do {

                //load a random position
                position = Math.floor(Math.random() * Math.floor(this.deckSize))
                
                //if this position wasn't called yet...
                if(!calledPositions.includes(position)){  

                    //then record this position
                    calledPositions[cardsCount] = position

                    //if card pair hasn't pair yet...
                    if(cardsCount % 2 == 0){

                        //then call this card pair
                        actualCardId = parseInt(cardsCount / 2 - 1)
                    }
                    else {

                        //...else get a new card
                        actualCardId = parseInt(cardsCount / 2)
                    }

                    //finally the deck recives the new card in a new position
                    this.cardsDeck[position] = game.loadCard(actualCardId)
                    break;
                }

                //...else it's a repeated position
            } while(true)
        }
    },
    
    includeCards : () => {
        board = document.querySelector("#board__deck")

        for(let cardsCount = 0; cardsCount <= this.deckSize - 1; cardsCount++){
            console.log(cardsDeck[cardsCount])
            board.insertAdjacentHTML( 'afterend', this.cardsDeck[cardsCount])
        }
    }
}





home.initGame();


