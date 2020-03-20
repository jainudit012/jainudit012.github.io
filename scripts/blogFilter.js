const blogFilterTabData = []
const numBlogFilters = 7

let page = window.location.pathname
let config
if(page.includes('blogs')){
    config = {
        navItemSelectedClass: 'blogs__nav__item--selected'
    }
}else {
    config = {
        navItemSelectedClass: 'ii__nav__list-item--selected'
    }
}

const noBlogElement = document.getElementById('no__blogs')
const blogWrapper = document.getElementById('ii__card__box')

for(i=0;i<numBlogFilters;i++) {
    blogFilterTabData.push(document.getElementById(`blog__filter-${i+1}`))
}

function filterBlogs(tag, allBlogs, tagDataSetKeyName){
    let filteredBlogs = []
    let hiddenBlogs = []
    if (tag === 'all') {
        filteredBlogs = allBlogs
    } else {
        allBlogs.forEach(el => {
            if(el.dataset[tagDataSetKeyName].indexOf(tag) !== -1) filteredBlogs.push(el)
            else hiddenBlogs.push(el)
        })
    }
    removeClassFromMultiple(filteredBlogs, 'hidden')
    addClassToMultiple(filteredBlogs, 'block')
    addClassToMultiple(hiddenBlogs, 'hidden')
    removeClassFromMultiple(hiddenBlogs, 'block')

    if(filteredBlogs.length === 0) {
        removeClass(noBlogElement, 'hide')
    }else addClass(noBlogElement, 'hide')
}
 
try{
    const allBlogData = loadElementsToArray('ii__card-', blogWrapper)

    blogFilterTabData.forEach(filterTab => {
        filterTab.addEventListener('click', ()=>{
            addClass(filterTab, config.navItemSelectedClass)
            removeClassFromMultiple(blogFilterTabData.filter(tabs=> tabs.id !== filterTab.id), config.navItemSelectedClass)
            if(allBlogData.valid) filterBlogs(filterTab.dataset.filtertag, allBlogData.items, 'filtertag')
        })
    })
}catch(ex){
    console.log(ex)
}
