
/*
* Function to submit an email form
*
*/
function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // You can perform further validation here if needed
  
    alert('Form submitted!\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
  
    // You can add code here to send the data to a server if necessary
  }

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
