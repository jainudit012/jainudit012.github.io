const allPostTab = document.getElementById('all_b')
const projectManagementTab = document.getElementById('pm_b')
const devopsTab = document.getElementById('dev_b')
const perfromanceTab = document.getElementById('per_b')
const uxTab = document.getElementById('ux_b')
const applicationsTab = document.getElementById('app_b')
const startupTab = document.getElementById('sta_b')
const noBlogElement = document.getElementById('no__blogs')

const blogWrapper = document.getElementById('ii__card__box')

const allBlogs = []

function loadAllBlogs(){
    const numberOfBlogs = blogWrapper ? blogWrapper.children.length : 0
    if(numberOfBlogs !== 0){
        for(i=0;i<numberOfBlogs;i++){
            allBlogs.push(document.getElementById(`ii__card-${i+1}`))
        }
    }
}

function filterBlogs(tag){
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
    addClassToMultiple(hiddenBlogs, 'hidden')

    if(filteredBlogs.length === 0) {
        removeClass(noBlogElement, 'hidden')
    }else addClass(noBlogElement, 'hidden')
}
 
try{
    loadAllBlogs()

    allPostTab.addEventListener('click', ()=>{
        addClass(allPostTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([projectManagementTab, devopsTab, perfromanceTab, uxTab, applicationsTab, startupTab], 'ii__nav__list-item--selected')
        filterBlogs('all')
    })
    
    projectManagementTab.addEventListener('click', ()=>{
        addClass(projectManagementTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, devopsTab, perfromanceTab, uxTab, applicationsTab, startupTab], 'ii__nav__list-item--selected')
        filterBlogs('pm')
    })
    
    devopsTab.addEventListener('click', ()=>{
        addClass(devopsTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, projectManagementTab, perfromanceTab, uxTab, applicationsTab, startupTab], 'ii__nav__list-item--selected')
        filterBlogs('dev')
    })
    
    perfromanceTab.addEventListener('click', ()=>{
        addClass(perfromanceTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, projectManagementTab, devopsTab, uxTab, applicationsTab, startupTab], 'ii__nav__list-item--selected')
        filterBlogs('per')
    })
    
    uxTab.addEventListener('click', ()=>{
        addClass(uxTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, projectManagementTab, devopsTab, perfromanceTab, applicationsTab, startupTab], 'ii__nav__list-item--selected')
        filterBlogs('ux')
    })
    
    applicationsTab.addEventListener('click', ()=>{
        addClass(applicationsTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, projectManagementTab, devopsTab, perfromanceTab, uxTab, startupTab], 'ii__nav__list-item--selected')
        filterBlogs('app')
    })
    
    startupTab.addEventListener('click', ()=>{
        addClass(startupTab, 'ii__nav__list-item--selected')
        removeClassFromMultiple([allPostTab, projectManagementTab, devopsTab, perfromanceTab, uxTab, applicationsTab], 'ii__nav__list-item--selected')
        filterBlogs('sta')
    })
}catch(ex){
    console.log(ex)
}
