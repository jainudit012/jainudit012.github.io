try{
    const allBlogData = loadElementsToArray('ii__card-', blogWrapper)

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

    loadBlogsFromQuery()

    window.addEventListener('hashchange', changeHashToQuery)

    const searchInputLabel = document.getElementById('blogs__nav__search-label')

    let toggleSearchInput = true

    if(toggleSearchInput){
        searchInputLabel.children[0].addEventListener('click', ()=>{
            console.log('svg')
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

}catch(ex){
    console.log(ex)
}