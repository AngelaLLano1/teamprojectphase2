$(document).ready(function() {

      // Initialize the plugin
      $('#my_popup').popup({
            transition: 'all 0.3s',
            scrolllock: true // optional
            });
            

    });
    

window.onload = function () {
   document.getElementById('button').onclick = function() {
     if(document.getElementById("code").value == '10')
        location.href = "https://preview.c9users.io/angelall/group-project-phase2/pages/youth.html";
     else if(document.getElementById("code").value == '20')
     location.href = "https://preview.c9users.io/angelall/group-project-phase2/pages/adult.html";
     else  if(document.getElementById("code").value == '30')
     location.href = "https://preview.c9users.io/angelall/group-project-phase2/pages/senior.html";
     else
        //Create a div or p to show message
        document.getElementById("message").innerHTML = 'Please Select Your Age Group First';
     return false;//prevent form submission
   }//.onclick
}//window.onload
//End Of Code.

  