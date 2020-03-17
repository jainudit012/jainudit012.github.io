const wrapper = document.getElementById('ss__flipper')
const flipperData = loadElementsToArray('ss__panel-', wrapper)

const classConfig = {
    frontClass: 'ss__flipper__front',
    backClass: '',
    nextClass: '',
    disabledPaginationClass: 'ss__disabled-paginator',
    nextBtnId: 'ss__panel-fwd',
    backBtnId: 'ss__panel-bck',
    slideAnimationClass: 'slideOut'
}

otherPaginate(flipperData.items, classConfig, null)
