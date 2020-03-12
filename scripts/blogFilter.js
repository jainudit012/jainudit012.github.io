const allPostTab = document.getElementById('all_b')
const projectManagementTab = document.getElementById('pm_b')
const devopsTab = document.getElementById('dev_b')
const perfromanceTab = document.getElementById('per_b')
const uxTab = document.getElementById('ux_b')
const applicationsTab = document.getElementById('app_b')
const startupTab = document.getElementById('sta_b')
const noBlogElement = document.getElementById('no__blogs')

const blogWrapper = document.getElementById('ii__card__box')

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
    
    allPostTab.addEventListener('click', ()=>{
        addClass(allPostTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([projectManagementTab, devopsTab, perfromanceTab, uxTab, applicationsTab, startupTab], 'ii__nav__list-item--selected')
        if(allBlogData.valid) filterBlogs('all', allBlogData.items)
    })
    
    projectManagementTab.addEventListener('click', ()=>{
        addClass(projectManagementTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, devopsTab, perfromanceTab, uxTab, applicationsTab, startupTab], 'ii__nav__list-item--selected')
        if(allBlogData.valid) filterBlogs('pm', allBlogData.items)
    })
    
    devopsTab.addEventListener('click', ()=>{
        addClass(devopsTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, projectManagementTab, perfromanceTab, uxTab, applicationsTab, startupTab], 'ii__nav__list-item--selected')
        if(allBlogData.valid) filterBlogs('dev', allBlogData.items)
    })
    
    perfromanceTab.addEventListener('click', ()=>{
        addClass(perfromanceTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, projectManagementTab, devopsTab, uxTab, applicationsTab, startupTab], 'ii__nav__list-item--selected')
        if(allBlogData.valid) filterBlogs('per', allBlogData.items)
    })
    
    uxTab.addEventListener('click', ()=>{
        addClass(uxTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, projectManagementTab, devopsTab, perfromanceTab, applicationsTab, startupTab], 'ii__nav__list-item--selected')
        if(allBlogData.valid) filterBlogs('ux', allBlogData.items)
    })
    
    applicationsTab.addEventListener('click', ()=>{
        addClass(applicationsTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, projectManagementTab, devopsTab, perfromanceTab, uxTab, startupTab], 'ii__nav__list-item--selected')
        if(allBlogData.valid) filterBlogs('app', allBlogData.items)
    })
    
    startupTab.addEventListener('click', ()=>{
        addClass(startupTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, projectManagementTab, devopsTab, perfromanceTab, uxTab, applicationsTab], 'ii__nav__list-item--selected')
        if(allBlogData.valid) filterBlogs('sta', allBlogData.items)
    })
}catch(ex){
    console.log(ex)
}
