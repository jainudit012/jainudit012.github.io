const maxFilterItemsInList=5,listWrapper=document.getElementById("rp__list"),panelsWrapper=document.getElementById("rp__panels__wrapper"),sectionWrapper=document.getElementById("projects");try{const a=loadElementsToArray("rp__filter-",listWrapper),b=loadElementsToArray("rp__panels-",panelsWrapper);let c=b.items;const d={frontClass:"site__info-rp__panels__front",backClass:"site__info-rp__panels__back",nextClass:"site__info-rp__panels__next",disabledPaginationClass:"disabled-paginator",nextBtnId:"rp__panel-fwd",backBtnId:"rp__panel-bck",slideAnimationClass:"slideOut"};a.valid&&(addSelectItemListener(a.items,"fixed__filter-item-selected",!0),a.items.forEach(a=>{a.addEventListener("itemSelected",a=>{let e=[],f=[];"all"===a.target.dataset.filtertag?e=b.items:b.items.forEach(b=>{b.dataset.filtertag===a.target.dataset.filtertag?e.push(b):f.push(b)}),removeClassFromMultiple(b.items,d.frontClass),removeClassFromMultiple(b.items,d.nextClass),removeClassFromMultiple(b.items,d.backClass),removeClassFromMultiple(b.items,"hide-2x-l"),removeClassFromMultiple(b.items,"hide-2x-r"),removeClassFromMultiple(b.items,d.slideAnimationClass),addClass(e[0],d.frontClass),addClass(e[1],d.nextClass),addClassToMultiple(e.slice(2),d.backClass);let g=b.items.indexOf(e[0]);f.forEach(a=>{b.items.indexOf(a)<g||-1===g?addClassToMultiple(f,"hide-2x-l"):addClassToMultiple(f,"hide-2x-r")}),c=e,listWrapper.dispatchEvent(new CustomEvent("filteredDataChanged",{detail:{data:c}}))})})),paginate(a.items,maxFilterItemsInList,{toggleItemClassForward:"hide-slideOut",toggleItemClassBack:"hide-slideIn",disabledPaginationClass:"disabled-paginator-fixed",nextBtnId:"rp__list-fwd",backBtnId:"rp__list-bck"}),otherPaginate(c,d,sectionWrapper)}catch(a){console.log(a)}