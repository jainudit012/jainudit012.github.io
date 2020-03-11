const maxFilterItemsInList = 5
const listWrapper = document.getElementById('rp__list')

try{
    const filterItemData = loadElementsToArray([], 'rp__filter-', listWrapper ? listWrapper.children.length : 0)
    if(filterItemData.valid){
        addSelectItemListener(filterItemData.items, 'fixed__filter-item-selected', true)

        filterItemData.items.forEach(item =>{
            item.addEventListener('itemSelected', e=>{
                console.log(e.target.id)
                console.log(e.target.dataset.filtertag)
                // do filtering of pages
            })
        })
    }

    const nextButton = document.getElementById('rp__list-fwd')
    const backButton = document.getElementById('rp__list-bwd')

    let counter = 0

    nextButton.addEventListener('click', ()=>{
        console.log('next')
        counter++

        const currList = filterItemData.items.slice(maxFilterItemsInList*counter, maxFilterItemsInList*(counter + 1))
        const prevList = filterItemData.items.slice(maxFilterItemsInList*(counter - 1), maxFilterItemsInList*counter)

        addClassToMultiple(prevList, 'hidden')
        removeClassFromMultiple(currList, 'hidden')
        removeClassFromSvg(backButton, 'disabled-paginator-fixed')
        if(currList.length < maxFilterItemsInList || (currList.length*(counter+1) === filterItemData.items.length)) addClassToSvg(nextButton, 'disabled-paginator-fixed')
    })

    backButton.addEventListener('click', ()=>{
        console.log('back')
        counter--

        const currList = filterItemData.items.slice(maxFilterItemsInList*counter, maxFilterItemsInList*(counter + 1))
        const prevList = filterItemData.items.slice(maxFilterItemsInList*(counter + 1), maxFilterItemsInList*(counter + 2))

        addClassToMultiple(prevList, 'hidden')
        removeClassFromMultiple(currList, 'hidden')
        removeClassFromSvg(nextButton, 'disabled-paginator-fixed')
        if(currList[0] === filterItemData.items[0]) addClassToSvg(backButton, 'disabled-paginator-fixed')
    })
}catch(ex){
    console.log(ex)
}