"use strict";/**
 * 
 * @param {HTMLElement} element A HTML element on which a certain class is to be applied
 * @param {String} className The class that is to be applied. 
 * Can be multiple with a space in between. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */function addClass(a,b){var c=a?a.className.split(" "):[b];-1===c.indexOf(b)&&(a.className+=" ".concat(b))}/**
 * 
 * @param {HTMLElement} element A SVG HTML element on which a certain class is to be applied
 * @param {String} className The class that is to be applied. 
 * Can be multiple with a space in between. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */function addClassToSvg(a,b){var c=a?a.className.baseVal.split(" "):[b];-1===c.indexOf(b)&&(a.className.baseVal+=" ".concat(b))}/**
 * 
 * @param {HTMLElement} element A HTML element on which a certain class is to be removed
 * @param {String} className The class that is to be removed.
 * Can be multiple with a space in between but should follow the order of occurence on the element. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */function removeClass(a,b){a&&(a.className=a.className.replace(" ".concat(b),""))}/**
 * 
 * @param {HTMLElement} element A SVG HTML element on which a certain class is to be removed
 * @param {String} className The class that is to be removed.
 * Can be multiple with a space in between but should follow the order of occurence on the element. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */function removeClassFromSvg(a,b){a&&(a.className.baseVal=a.className.baseVal.replace(" ".concat(b),""))}/**
 * 
 * @param {Array[HtmlElement]} elementsArray An array containing HTML elements on which same class is to be applied
 * @param {String} className The class that is to be applied.
 * Can be multiple with a space in between. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'
 */function addClassToMultiple(a,b){0<a.length&&a.forEach(function(a){return addClass(a,b)})}/**
 * 
 * @param {Array[HtmlElement]} elementsArray An array containing HTML elements on which same class is to be removed
 * @param {String} className The class that is to be removed.
 * Can be multiple with a space in between but should follow the order of occurence on the element. ** Should avoid using multiple classes **
 * e.g., 'star mt-1'.
 * @function removeClass(element, className) Used underneath.
 */function removeClassFromMultiple(a,b){0<a.length&&a.forEach(function(a){return removeClass(a,b)})}/**
 * 
 * @param {String} idPattern Pattern should be in the form of pattern1, pattern2, pattern3 ...
 * @param {HTMLElement} itemsWrapper Should be the wrapper HTML element of the items
 *  returns { items: Array, valid: Boolean }
 */function loadElementsToArray(a,b){var c=[].slice.call(b.children).filter(function(b){return-1<b.id.indexOf(a)}).sort(function(c,a){return c-a});return{items:c,valid:0!=c.length}}/**
 * 
 * @param {Array[HtmlElement]} itemsArray array of HTML elements on which a click event is to be added
 * @param {String} className the className to be toggled on the selected item
 * @param {Boolean} raiseSelectedEvent state whether an event of item selection should be raised or not
 */function addSelectItemListener(a,b,c){a.forEach(function(d){d.addEventListener("click",function(){var e=parseInt(d.id.split("-")[1]);if(a.forEach(function(a){-1===a.id.indexOf(e)&&removeClass(a,b)}),addClass(d,b),c){var f=new Event("itemSelected");d.dispatchEvent(f)}})})}function toggleClassOnDataSelect(a,b,c,d){a.forEach(function(a){a.dataset[b]===c?addClass(a,d):removeClass(a,d)})}function splitQuery(a){var b={};return-1===a.indexOf("&")?b[a.split("=")[0]]=a.split("=")[1]:a.split("&").forEach(function(a){b[a.split("=")[0]]=a.split("=")[1]}),b}function loadFromQuery(){var a=window.location.search.replace("?","");return window.scrollTo(0,0),splitQuery(a)}function changeHashToQuery(a,b){var c=window.location.hash;window.history.replaceState(null,"","?".concat(a,"=").concat(0===c.length?b:c.replace("#".concat(a,"="),"")))}