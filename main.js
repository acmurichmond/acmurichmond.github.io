var list = document.getElementsByClassName("nav-menu");
// get all elements inside list
var listItems = list[0].getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("menu-active");
        current[0].className = "menu";
        this.className = "menu-active";
        document.getElementById("intro").scrollIntoView({ behavior: "smooth" });
    });
}