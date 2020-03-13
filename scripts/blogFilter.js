const blogFilterTabData = []
const numBlogFilters = 7

const noBlogElement = document.getElementById('no__blogs')
const blogWrapper = document.getElementById('ii__card__box')

for(i=0;i<numBlogFilters;i++) {
    blogFilterTabData.push(document.getElementById(`blog__filter-${i+1}`))
}

function filterBlogs(tag, allBlogs){
    let filteredBlogs = []
    let hiddenBlogs = []
    if (tag === 'all') {
        filteredBlogs = allBlogs
    } else {
        allBlogs.forEach(el => {
            if(el.dataset.filtertag === tag) filteredBlogs.push(el)
            else hiddenBlogs.push(el)
        })
    }
    removeClassFromMultiple(filteredBlogs, 'hidden')
    addClassToMultiple(filteredBlogs, 'block')
    addClassToMultiple(hiddenBlogs, 'hidden')
    removeClassFromMultiple(hiddenBlogs, 'block')

    if(filteredBlogs.length === 0) {
        removeClass(noBlogElement, 'hidden')
    }else addClass(noBlogElement, 'hidden')
}
 
try{
    const allBlogData = loadElementsToArray('ii__card-', blogWrapper)

    blogFilterTabData.forEach(filterTab => {
        filterTab.addEventListener('click', ()=>{
            addClass(filterTab, 'ii__nav__list-item--selected')
            removeClassFromMultiple(blogFilterTabData.filter(tabs=> tabs.id !== filterTab.id), 'ii__nav__list-item--selected')
            if(allBlogData.valid) filterBlogs(filterTab.dataset.filtertag, allBlogData.items)
        })
    })
}catch(ex){
    console.log(ex)
}
