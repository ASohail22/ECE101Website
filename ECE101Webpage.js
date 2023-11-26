function openPage(pageName) {
    // Hide all elements with class="tabcontent" by default
    var i, slideOutMenu;
    slideOutMenu = document.getElementsByClassName("menu-list");
    for (i = 0; i < slideOutMenu.length; i++) {
        slideOutMenu[i].style.display = "block";
    }
    

// Show the specific tab content
document.getElementById(pageName).style.display = "block";



}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
