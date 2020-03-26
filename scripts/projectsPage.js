const projectSectionWrapper = document.getElementById('projects__wrapper')

try{
    const projectDetailData = loadElementsToArray('project-', projectSectionWrapper)

    function loadQueriedProjectDetail(){
        const projectQuery = loadFromQuery()

        if(projectDetailData.valid){
            toggleClassOnDataSelect(projectDetailData.items, 'project', projectQuery['projNo'], 'block')
        }
    }
    
    loadQueriedProjectDetail()
    
}catch(ex){
    console.log(ex)
}


