const maxFilterItemsInList = 5
const maxPanels = 1
const listWrapper = document.getElementById('rp__list')
const panelsWrapper = document.getElementById('rp__panels__wrapper')
const sectionWrapper = document.getElementById('rp__section')

const nextButton = document.getElementById('rp__panel-fwd')
const backButton = document.getElementById('rp__panel-bck')

try{
    const filterItemData = loadElementsToArray('rp__filter-', listWrapper)
    const panelData = loadElementsToArray('rp__panels-', panelsWrapper)
    let filteredData = panelData.items

    const classConfig = {
        frontClass: 'site__info-rp__panels__front',
        backClass: 'site__info-rp__panels__back',
        nextClass: 'site__info-rp__panels__next',
        disabledPaginationClass: 'disabled-paginator',
        nextBtnId: 'rp__panel-fwd',
        backBtnId: 'rp__panel-bck'
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

                removeClassFromMultiple(filteredItems, 'hidden')
                addClassToMultiple(hiddenItems, 'hidden')
                removeClassFromMultiple(panelData.items, 'site__info-rp__panels__front')
                removeClassFromMultiple(panelData.items, 'site__info-rp__panels__next')
                removeClass(filteredItems[0], 'site__info-rp__panels__back')
                addClass(filteredItems[0], 'site__info-rp__panels__front')
                addClassToMultiple(filteredItems.slice(1), 'site__info-rp__panels__back')
                addClass(filteredItems[1], 'site__info-rp__panels__next')

                filteredData = filteredItems

                listWrapper.dispatchEvent(new CustomEvent('filteredDataChanged', {detail: {data: filteredData}}))
            })
        })
    }
    paginate('rp__list-fwd', 'rp__list-bck', filterItemData.items, 'disabled-paginator-fixed', maxFilterItemsInList, 'hidden')

    otherPaginate(filteredData, classConfig, sectionWrapper)

}catch(ex){
    console.log(ex)
}