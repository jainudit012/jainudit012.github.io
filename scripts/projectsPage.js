const projectSectionWrapper = document.getElementById('projects__wrapper')

const projectStoriesArray = []

const projectCardSection = document.getElementById('project__cards__wrapper')

let gridColumnGap = 120

function setCarouselGridValues(cards, wrapperWidth){
    if(window.innerWidth <= 1400 || window.outerWidth <= 1400){
        gridColumnGap = Math.floor(window.innerWidth / 20)
    }else gridColumnGap = 120

    projectCardSection.style.gridColumnGap = `${gridColumnGap}px`

    cards.forEach(card => {
        card.style.width = `${(wrapperWidth / 3) - ((2/3)*gridColumnGap)}px` //  this will change on adding media query
    })
}

try{
    const projectDetailData = loadElementsToArray('project-', projectSectionWrapper)

    const projectCardData = loadElementsToArray('project__card-', projectCardSection)

    function loadQueriedProjectDetail(){
        const projectQuery = loadFromQuery()

        if(projectDetailData.valid){
            toggleClassOnDataSelect(projectDetailData.items, 'projectnumber', projectQuery['projNo'], 'block')
        }
    }

    function loadProjectsFromHashChange(){
        let projectPageHash = window.location.hash
        if(projectPageHash.indexOf('more' === 0)){
            changeHashToQuery('projNo', '1')
            loadQueriedProjectDetail()
        }
    }
    
    loadQueriedProjectDetail()

    if(projectDetailData.valid){
        for(i=0;i<projectDetailData.items.length;i++){
            projectStoriesArray.push(document.getElementById(`stories-project-${i+1}`))
        }

        projectStoriesArray.forEach((storyWrapper, index) => {
            if(storyWrapper){
                const storiesData = loadElementsToArray(`project-${index+1}-story-`, storyWrapper)

                if(storiesData.valid){
                    const classConfig = {
                        frontClass: 'project__technology__stories-info-front',
                        backClass: '',
                        nextClass: '',
                        disabledPaginationClass: 'projects-disabled-paginator',
                        nextBtnId: `stories-fwd-project-${index+1}`,
                        backBtnId: `stories-bck-project-${index+1}`,
                        slideAnimationClass: 'slideOut'
                    }

                    otherPaginate(storiesData.items, classConfig, null)
                }
            }
        })
    }

    let totalVisibleWidth = projectCardSection.clientWidth

    if(projectCardData.valid){
        setCarouselGridValues(projectCardData.items, totalVisibleWidth)

        const classConfig = {
            frontClass: 'project__card--front',
            disabledPaginationClass: 'projects-disabled-paginator',
            nextBtnId: 'project-fwd',
            backBtnId: 'project-bck',
            slideAnimationClass: 'slideOut'
        }

        carousel(3, classConfig, projectCardData.items)
    }
    
    window.addEventListener('resize', ()=>{
        if(projectCardData.valid){
            setCarouselGridValues(projectCardData.items, projectCardSection.clientWidth)
        }
    })

    window.addEventListener('hashchange', loadProjectsFromHashChange)
}catch(ex){
    console.log(ex)
}
