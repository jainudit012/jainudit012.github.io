try {
    const wrapper = document.getElementById('wwd__card__box')
    const allCardData = loadElementsToArray([], 'wwd__card-', wrapper ? wrapper.children.length : 0)
    if(allCardData.valid){
        addSelectItemListener(allCardData.items, 'card__selected', false)
    }
}catch(err){
    console.log(err)
}
