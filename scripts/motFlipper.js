const motCardsWrapper = document.getElementById('mot__cards__wrapper')
const motFlipperData = loadElementsToArray('mot__card-', motCardsWrapper)

const motClassConfig = {
    frontClass: 'mot__cards--front',
    backClass: 'mot__cards--back',
    nextClass: 'mot__cards--next',
    disabledPaginationClass: 'mot__disabled-paginator',
    nextBtnId: 'mot__card-fwd',
    backBtnId: 'mot__card-bck'
}

otherPaginate(motFlipperData.items, motClassConfig, null)