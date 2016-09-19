//disable dropdown backup link on modern browsers
var elems = document.querySelectorAll("li.dropdown a[href='projects.html']");
for (var i = 0; i < elems.length; i++){
    elems[i].href = "#";
}
