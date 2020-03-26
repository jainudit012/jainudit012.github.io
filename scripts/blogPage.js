const blogSection = document.getElementById('blogs__section')

const optionToggleMenus = []

try{
    const allBlogData = loadElementsToArray('ii__card-', blogWrapper)

    const blogArticleData = loadElementsToArray('blog-', blogArticlesWrapper)

    if(blogArticleData.valid){
        for(i=0;i<blogArticleData.items.length;i++){
            optionToggleMenus.push(document.getElementById(`options-blog-${i+1}-1`))
            optionToggleMenus.push(document.getElementById(`options-blog-${i+1}-2`))
        }
    }

    function loadBlogsFromHashChange(){
        changeHashToQuery('type', 'all')
        loadBlogsFromQuery()
    }
 
    function loadBlogsFromQuery(){
        const blogQuery = loadFromQuery()

        if(blogQuery['tab']) {
            loadBlog(blogQuery)
        }else {
            addClass(blogArticlesWrapper, 'hidden')
            if(blogQuery['type']){
                filterBlogs(blogQuery['type'], allBlogData.items, 'filtertag')
                toggleClassOnDataSelect(blogFilterTabData, 'filtertag', blogQuery['type'], 'blogs__nav__item--selected')
            }else {
                filterBlogs('all', allBlogData.items, 'filtertag')
                toggleClassOnDataSelect(blogFilterTabData, 'filtertag', 'all', 'blogs__nav__item--selected')
            }
        }
    }

    function loadBlog(query){
        observer.observe(observerTarget)

        removeClassFromMultiple(allBlogData.items, 'hidden')

        removeClass(floatingIcon , 'invisible')

        addClass(allBlogData.items.filter(card => card.id.indexOf(query.selected) !== -1)[0], 'hidden')

        if(query.tab === 'all'){
            addClassToMultiple(allBlogData.items.filter(card => card.id.indexOf(query.selected) === -1).slice(3), 'hidden')
        }else {
            addClassToMultiple(allBlogData.items.filter(card => ((card.id.indexOf(query.selected) === -1) && (card.dataset.filtertag !== query.tab))), 'hidden')
        }

        removeClass(blogArticlesWrapper, 'hidden')
        addClass(blogArticlesWrapper, 'block')

        toggleClassOnDataSelect(blogFilterTabData, 'filtertag', query.tab, 'blogs__nav__item--selected')
 
        if(blogArticleData.valid){
            blogArticleData.items.forEach(article => {
                if(article.id.indexOf(query.selected) !== -1){
                    removeClass(article, 'hidden')
                }else addClass(article, 'hidden')
            })
        }
    }

    loadBlogsFromQuery()

    window.addEventListener('hashchange', loadBlogsFromHashChange)

    const searchInputLabel = document.getElementById('blogs__nav__search-label')

    let toggleSearchInput = true

    if(toggleSearchInput){
        searchInputLabel.children[0].addEventListener('click', ()=>{
            addClassToSvg(searchInputLabel.children[0], 'hide')
            removeClass(searchInputLabel.children[1], 'hideabs')
        })
        toggleSearchInput = false
    }

    searchInputLabel.children[1].addEventListener('keyup', e => {
        toggleSearchInput = true

        if (event.keyCode === 13 || event.keyCode === 27) {
            e.preventDefault()
            if (event.keyCode === 13) {
                toggleClassOnDataSelect(blogFilterTabData, 'filtertag', 'all', 'blogs__nav__item--selected')
                filterBlogs(searchInputLabel.children[1].value, allBlogData.items, 'searchtag')
            }
            searchInputLabel.children[1].value = '' 
            addClass(searchInputLabel.children[1], 'hideabs')
            removeClassFromSvg(searchInputLabel.children[0], 'hide')
        }
    })

    optionToggleMenus.forEach(menu=> {
        menu.addEventListener('click', ()=>{
            if(menu.parentNode.children[0].className.indexOf('options-slideOut') !== -1) {
                removeClass(menu.parentNode.children[0], 'options-slideOut')
            }else {
                addClass(menu.parentNode.children[0], 'options-slideOut')
            }
        })
    })

}catch(ex){
    console.log(ex)
}