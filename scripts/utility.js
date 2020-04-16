/**
 * 
 * @param {HTMLElement} element A HTML element on which a certain class is to be applied
 * @param {String} className The class that is to be applied. 
 * Can be multiple with a space in between. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */function addClass(a,b){const c=a?a.className.split(" "):[b];-1===c.indexOf(b)&&(a.className+=` ${b}`)}/**
 * 
 * @param {HTMLElement} element A SVG HTML element on which a certain class is to be applied
 * @param {String} className The class that is to be applied. 
 * Can be multiple with a space in between. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */function addClassToSvg(a,b){const c=a?a.className.baseVal.split(" "):[b];-1===c.indexOf(b)&&(a.className.baseVal+=` ${b}`)}/**
 * 
 * @param {HTMLElement} element A HTML element on which a certain class is to be removed
 * @param {String} className The class that is to be removed.
 * Can be multiple with a space in between but should follow the order of occurence on the element. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */function removeClass(a,b){a&&(a.className=a.className.replace(` ${b}`,""))}/**
 * 
 * @param {HTMLElement} element A SVG HTML element on which a certain class is to be removed
 * @param {String} className The class that is to be removed.
 * Can be multiple with a space in between but should follow the order of occurence on the element. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */function removeClassFromSvg(a,b){a&&(a.className.baseVal=a.className.baseVal.replace(` ${b}`,""))}/**
 * 
 * @param {Array[HtmlElement]} elementsArray An array containing HTML elements on which same class is to be applied
 * @param {String} className The class that is to be applied.
 * Can be multiple with a space in between. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */function addClassToMultiple(a,b){0<a.length&&a.forEach(a=>addClass(a,b))}/**
 * 
 * @param {Array[HtmlElement]} elementsArray An array containing HTML elements on which same class is to be removed
 * @param {String} className The class that is to be removed.
 * Can be multiple with a space in between but should follow the order of occurence on the element. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'.
 * @function removeClass(element, className) Used underneath.
 */function removeClassFromMultiple(a,b){0<a.length&&a.forEach(a=>removeClass(a,b))}/**
 * 
 * @param {String} idPattern Pattern should be in the form of pattern1, pattern2, pattern3 ...
 * @param {HTMLElement} itemsWrapper Should be the wrapper HTML element of the items
 *  returns { items: Array, valid: Boolean }
 */function loadElementsToArray(a,b){const c=[].slice.call(b.children).filter(b=>-1<b.id.indexOf(a)).sort((c,a)=>c-a);return{items:c,valid:0!=c.length}}/**
 * 
 * @param {Array[HtmlElement]} itemsArray array of HTML elements on which a click event is to be added
 * @param {String} className the className to be toggled on the selected item
 * @param {Boolean} raiseSelectedEvent state whether an event of item selection should be raised or not
 */function addSelectItemListener(a,b,c){a.forEach(d=>{d.addEventListener("click",()=>{const e=parseInt(d.id.split("-")[1]);if(a.forEach(a=>{-1===a.id.indexOf(e)&&removeClass(a,b)}),addClass(d,b),c){const a=new Event("itemSelected");d.dispatchEvent(a)}})})}function toggleClassOnDataSelect(a,b,c,d){a.forEach(a=>{a.dataset[b]===c?addClass(a,d):removeClass(a,d)})}function splitQuery(a){const b={};return-1===a.indexOf("&")?b[a.split("=")[0]]=a.split("=")[1]:a.split("&").forEach(a=>{b[a.split("=")[0]]=a.split("=")[1]}),b}function loadFromQuery(){let a=window.location.search.replace("?","");return window.scrollTo(0,0),splitQuery(a)}function changeHashToQuery(a,b){const c=window.location.hash;window.history.replaceState(null,"",`?${a}=${0===c.length?b:c.replace(`#${a}=`,"")}`)}