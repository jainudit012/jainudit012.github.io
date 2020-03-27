const floatingPlusIcon = document.getElementById('floating__icon')
const footerNode = document.getElementById('contact')

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
        default: {
            mastHeadSection = document.getElementById('site__main')
            floatingIconObserver.observe(mastHeadSection)
        }
    }
}catch(ex){
    console.log(ex)
}