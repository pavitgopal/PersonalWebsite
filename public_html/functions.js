function toggleStyleSheet(){

    const element = document.getElementById("mainStyleSheet");

    var styleName = element.getAttribute("href");
    console.log(styleName);

    if (styleName == "lightPurple.css")
    {
        styleName = "darkPink.css";
    }

    else
    {
        styleName = "lightPurple.css";
    }

    element.setAttribute("href", styleName);

    localStorage.setItem("styleName", styleName)
}

window.onload = function() {
    const savedStyle = localStorage.getItem("style");
    if (savedStyle) {
        document.getElementById("mainStyleSheet").setAttribute("href", savedStyle);
    }
}

window.onload = function(){
    
    const savedStyle = localStorage.getItem("styleName");

    docStyle = document.getElementById("mainStyleSheet");
    
    if (savedStyle=="lightPurple.css" || savedStyle == "darkPink.css")
    {
        docStyle.setAttribute("href", savedStyle);
    }
    
    
}


