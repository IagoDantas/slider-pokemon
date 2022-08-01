const nextCard = document.getElementById('next-card-button');
const prevCard = document.getElementById('prev-card-button');
const cards = document.querySelectorAll(".card");
let currentCard = 2;

const hiddenCardSelected = () =>{
    const cardSelected = document.querySelector('.selected');
    cardSelected.classList.remove('selected');
}

const showCard = (cardIndex) =>{
    cards[cardIndex].classList.add('selected');
}
 
nextCard.addEventListener('click', () => {
    
    if(currentCard === 2){
        currentCard = 0;
        hiddenCardSelected();
        showCard(currentCard);
        return;
    };
    
    currentCard++;
    showCard(currentCard);

    hiddenCardSelected();
    
});

prevCard.addEventListener('click', () => {
    if(currentCard === 0) 
    {
        currentCard = cards.length - 1;
        showCard(currentCard);
        hiddenCardSelected();
        return;
    };
    hiddenCardSelected();

    currentCard--;
    showCard(currentCard);
    
});
