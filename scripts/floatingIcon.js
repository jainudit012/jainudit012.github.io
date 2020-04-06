const floatingPlusIcon = document.getElementById('floating__icon')
const footerNode = document.getElementById('footer')

let mastHeadSection

const observerConfig = {
    root: null,
    rootMargin: '100px',
    threshold: 0.1
}

try{
    let observersCallback = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                addClass(floatingPlusIcon, 'invisible')
            }else{
                removeClass(floatingPlusIcon, 'invisible')
            }
        });
    };
    
    const floatingIconObserver = new IntersectionObserver(observersCallback, observerConfig);
    
    floatingIconObserver.observe(footerNode)
    
    switch(window.location.pathname){
        case '/about.html' : {
            mastHeadSection = document.getElementById('about__main')
            floatingIconObserver.observe(mastHeadSection)
            break;
        }
        case '/industry.html' : {
            mastHeadSection = document.getElementById('industry__main')
            floatingIconObserver.observe(mastHeadSection)
            break;
        }
        case '/projects.html' : {
            break;
        }
        default: {
            mastHeadSection = document.getElementById('site__main')
            floatingIconObserver.observe(mastHeadSection)
        }
    }
}catch(ex){
    console.log(ex)
}
