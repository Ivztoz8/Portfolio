M.AutoInit();



// Close button
window.onload = function(){
    document.getElementsByClassName('close').onclick = function(){
        this.parentNode.parentNode.remove();
        return false;
    };
};