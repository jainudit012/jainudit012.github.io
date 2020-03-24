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

    function changeHashToQuery(){
        const blogHash = window.location.hash
        let blogType = 'all'
        if(blogHash.indexOf('type') > -1){
            blogType = blogHash.split('type=')[1]
            window.history.replaceState(null, '', `?type=${blogHash.replace('#type=', '')}`)
        }
        else{
            window.history.replaceState(null, '', '?type=all')
        }
        loadBlogsFromQuery()
    }
 
    function loadBlogsFromQuery(){
        const blogQuery = window.location.search

        window.scrollTo(0 , 0)

        if(blogQuery.indexOf('tab') !== -1){
            let queries = {}
            blogQuery.replace('?', '').split('&').forEach(query => {
                queries[query.split('=')[0]] = query.split('=')[1]
            })
            loadBlog(queries)
        }else{
            addClass(blogArticlesWrapper, 'hidden')

            switch (blogQuery){
                case '?type=pm': {
                    filterBlogs('pm', allBlogData.items, 'filtertag')
                    blogFilterTabData.forEach(tab => {
                        if(tab.dataset.filtertag === 'pm') addClass(tab, 'blogs__nav__item--selected')
                        else removeClass(tab, 'blogs__nav__item--selected')
                    })
                    break
                }
                case '?type=dev': {
                    filterBlogs('dev', allBlogData.items, 'filtertag')
                    blogFilterTabData.forEach(tab => {
                        if(tab.dataset.filtertag === 'dev') addClass(tab, 'blogs__nav__item--selected')
                        else removeClass(tab, 'blogs__nav__item--selected')
                    })
                    break
                }
                case '?type=per': {
                    filterBlogs('per', allBlogData.items, 'filtertag')
                    blogFilterTabData.forEach(tab => {
                        if(tab.dataset.filtertag === 'per') addClass(tab, 'blogs__nav__item--selected')
                        else removeClass(tab, 'blogs__nav__item--selected')
                    })
                    break
                }
                case '?type=ux': {
                    filterBlogs('ux', allBlogData.items, 'filtertag')
                    blogFilterTabData.forEach(tab => {
                        if(tab.dataset.filtertag === 'ux') addClass(tab, 'blogs__nav__item--selected')
                        else removeClass(tab, 'blogs__nav__item--selected')
                    })
                    break
                }
                case '?type=app': {
                    filterBlogs('app', allBlogData.items, 'filtertag')
                    blogFilterTabData.forEach(tab => {
                        if(tab.dataset.filtertag === 'app') addClass(tab, 'blogs__nav__item--selected')
                        else removeClass(tab, 'blogs__nav__item--selected')
                    })
                    break
                }
                case '?type=sta': {
                    filterBlogs('sta', allBlogData.items, 'filtertag')
                    blogFilterTabData.forEach(tab => {
                        if(tab.dataset.filtertag === 'sta') addClass(tab, 'blogs__nav__item--selected')
                        else removeClass(tab, 'blogs__nav__item--selected')
                    })
                    break
                }
                default: {
                    filterBlogs('all', allBlogData.items, 'filtertag') 
                    blogFilterTabData.forEach(tab => {
                        if(tab.dataset.filtertag === 'all') addClass(tab, 'blogs__nav__item--selected')
                        else removeClass(tab, 'blogs__nav__item--selected')
                    })
                }
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
        
        blogFilterTabData.forEach(tab => {
            if(tab.dataset.filtertag === query.tab) addClass(tab, 'blogs__nav__item--selected')
            else removeClass(tab, 'blogs__nav__item--selected')
        })

        if(blogArticleData.valid){
            blogArticleData.items.forEach(article => {
                if(article.id.indexOf(query.selected) !== -1){
                    removeClass(article, 'hidden')
                }else addClass(article, 'hidden')
            })
        }
    }

    loadBlogsFromQuery()

    window.addEventListener('hashchange', changeHashToQuery)

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
                blogFilterTabData.forEach(tab => {
                    if(tab.dataset.filtertag === 'all') addClass(tab, 'blogs__nav__item--selected')
                    else removeClass(tab, 'blogs__nav__item--selected')
                })
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