const maxFilterItemsInList = 5
const listWrapper = document.getElementById('rp__list')
const panelsWrapper = document.getElementById('rp__panels__wrapper')
const sectionWrapper = document.getElementById('rp__section')

try{
    const filterItemData = loadElementsToArray('rp__filter-', listWrapper)
    const panelData = loadElementsToArray('rp__panels-', panelsWrapper)
    let filteredData = panelData.items

    const classConfigOfPanels = {
        frontClass: 'site__info-rp__panels__front',
        backClass: 'site__info-rp__panels__back',
        nextClass: 'site__info-rp__panels__next',
        disabledPaginationClass: 'disabled-paginator',
        nextBtnId: 'rp__panel-fwd',
        backBtnId: 'rp__panel-bck',
        slideAnimationClass: 'slideOut'
    }

    const classConfigOfList = {
        toggleItemClassForward: 'hide-slideOut',
        toggleItemClassBack: 'hide-slideIn',
        disabledPaginationClass: 'disabled-paginator-fixed',
        nextBtnId: 'rp__list-fwd',
        backBtnId: 'rp__list-bck'
    }
    
    if(filterItemData.valid){
        addSelectItemListener(filterItemData.items, 'fixed__filter-item-selected', true)

        filterItemData.items.forEach(item =>{
            item.addEventListener('itemSelected', e => {
                let filteredItems = []
                let hiddenItems = []
                if(e.target.dataset.filtertag !== 'all'){
                    panelData.items.forEach(data => {
                        if(data.dataset.filtertag === e.target.dataset.filtertag) filteredItems.push(data)
                        else hiddenItems.push(data)
                    })
                }else filteredItems = panelData.items

                removeClassFromMultiple(panelData.items, classConfigOfPanels.frontClass)
                removeClassFromMultiple(panelData.items, classConfigOfPanels.nextClass)
                removeClassFromMultiple(panelData.items, classConfigOfPanels.backClass)
                removeClassFromMultiple(panelData.items, 'hide-2x-l')
                removeClassFromMultiple(panelData.items, 'hide-2x-r')
                removeClassFromMultiple(panelData.items, classConfigOfPanels.slideAnimationClass)

                addClass(filteredItems[0], classConfigOfPanels.frontClass)
                addClass(filteredItems[1], classConfigOfPanels.nextClass)
                addClassToMultiple(filteredItems.slice(2), classConfigOfPanels.backClass)

                let topIndex = panelData.items.indexOf(filteredItems[0])

                hiddenItems.forEach(el => {
                    panelData.items.indexOf(el) < topIndex || topIndex === -1 ? 
                    addClassToMultiple(hiddenItems, 'hide-2x-l') : 
                    addClassToMultiple(hiddenItems, 'hide-2x-r')
                })

                filteredData = filteredItems

                listWrapper.dispatchEvent(new CustomEvent('filteredDataChanged', {detail: {data: filteredData}}))
            })
        })
    }
    paginate(filterItemData.items, maxFilterItemsInList, classConfigOfList)

    otherPaginate(filteredData, classConfigOfPanels, sectionWrapper)

}catch(ex){
    console.log(ex)
}
