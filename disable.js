//disable dropdown backup link on modern browsers
var elems = document.querySelectorAll("li.dropdown a[href='projects.html']");
for (var i = 0; i < elems.length; i++){
    elems[i].href = "#";
}

elems = document.querySelectorAll("nav#menuBarNav li");
for (var i = 0; i < elems.length; i++){
    elems[i].addEventListener("click", function(event){
        var url = event.target.querySelectorAll("li > a")[0].href;
        window.location.href = url;
    }, false)
}
