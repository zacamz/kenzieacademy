
function openAll() {
    document.getElementsByTagName("details")[0].setAttribute("open", "true"); 
}

let openAllButton = document.getElementsByClassName("openall");
if (openAllButton.addEventListener)
    openAllButton.addEventListener("click", openAll,)
    
    else if (openAllButton.attachEvent)
    openAllButton.attachEvent('onclick', openAll)