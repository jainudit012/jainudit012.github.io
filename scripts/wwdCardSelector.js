const allCards = []
try {
    const wrapper = document.getElementById('wwd__card__box')
    const numberOfCards = wrapper ? wrapper.children.length : 0
    if(numberOfCards !== 0){
        for (let i = 0; i < numberOfCards; i++){
            const element = document.getElementById(`wwd__card-${i+1}`)
            allCards.push(element)
        }
        
        allCards.forEach(card => {
            card.addEventListener('click', ()=>{
                const selectedCard = parseInt(card.id.split('-')[1])
                allCards.forEach(card => {
                    if(card.id.indexOf(selectedCard) === -1) {
                        removeClass(card, 'card__selected')
                    }
                })
                addClass(card, 'card__selected')
            })
        })
    }
}catch(err){
    console.log(err)
}
