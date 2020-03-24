const blogFilterTabData = []
const numBlogFilters = 7

let page = window.location.pathname
let config

if(page.indexOf('blogs') !== -1){
    config = {
        page: 'blogs',
        navItemSelectedClass: 'blogs__nav__item--selected'
    }
}else {
    config = {
        page: 'index',
        navItemSelectedClass: 'ii__nav__list-item--selected'
    }
}

const noBlogElement = document.getElementById('no__blogs')
const blogWrapper = document.getElementById('ii__card__box')

const blogArticlesWrapper = document.getElementById('blog__data')

const floatingIcon = document.getElementById('floating__icon')

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

    let blogArticleData
    if(config.page === 'blogs') {
       blogArticleData = loadElementsToArray('blog-', blogArticlesWrapper)
    }

    let selectedFilterTab = 'all'

    if(allBlogData.valid){
        allBlogData.items.forEach(blogCard => {
            blogCard.addEventListener('click', () => {
                if(window.location.href.indexOf('blogs') === -1){
                    window.location.href = `/blogs.html?tab=${selectedFilterTab}&selected=${blogCard.id.split('-')[1]}`
                }else {
                    window.history.replaceState(null, '', `?tab=${selectedFilterTab}&selected=${blogCard.id.split('-')[1]}`)
                    loadBlogsFromQuery()
                }
            })
        })
    }

    blogFilterTabData.forEach(filterTab => {
        filterTab.addEventListener('click', ()=>{
            selectedFilterTab = filterTab.dataset.filtertag
            if(config.page === 'blogs') {
                addClass(floatingIcon, 'invisible')
                removeClass(blogArticlesWrapper, 'block')
                addClass(blogArticlesWrapper, 'hidden')

                if(blogArticleData.valid){
                    blogArticleData.items.forEach(blog => {
                        addClass(blog, 'hidden')
                    })
                }

                window.history.replaceState(null, '', `?type=${filterTab.dataset.filtertag}`)
            }
            addClass(filterTab, config.navItemSelectedClass)
            removeClassFromMultiple(blogFilterTabData.filter(tabs=> tabs.id !== filterTab.id), config.navItemSelectedClass)
            if(allBlogData.valid) filterBlogs(filterTab.dataset.filtertag, allBlogData.items, 'filtertag')
        })
    })
}catch(ex){
    console.log(ex)
}
