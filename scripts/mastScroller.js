const startNumber=document.getElementById("start__count"),endNumber=document.getElementById("end__count"),numMastHeads=3,mastHeads=[];for(let a=0;a<numMastHeads;a++)mastHeads.push(document.getElementById(`mast-${a+1}`));const mastPaginators=[];for(let a=0;a<numMastHeads;a++)mastPaginators.push(document.getElementById(`paginator__progress-${a+1}`));let mastSelected;const mastAutoSelector=()=>{2===mastSelected?mastPaginators[2].click():3===mastSelected?mastPaginators[0].click():mastPaginators[1].click()};let mastSelctorTimer=window.setInterval(mastAutoSelector,7e3);mastPaginators.forEach(a=>{const b=parseInt(a.id.split("-")[1]);a.addEventListener("click",a=>{mastSelected=b,clearInterval(mastSelctorTimer),a.isTrusted||(mastSelctorTimer=window.setInterval(mastAutoSelector,7e3)),startNumber.innerHTML=`0${b}`,addClass(mastPaginators[b-1],"paginator__current-progress"),removeClassFromMultiple(mastPaginators.filter((a,c)=>c!==b-1),"paginator__current-progress"),removeClass(mastHeads[b-1],"hideabs"),addClassToMultiple(mastHeads.filter((a,c)=>c!==b-1),"hideabs"),b===mastPaginators.length?(removeClass(endNumber,"paginator__greyed"),addClass(startNumber,"paginator__greyed")):(removeClass(startNumber,"paginator__greyed"),addClass(endNumber,"paginator__greyed"))})});