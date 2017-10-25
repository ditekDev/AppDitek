$(document).ready(function() {
    if (localStorage.getItem("cloro")=="1") {
        $("#cloro").css({"display":"none"});
    }
    if (localStorage.getItem("ph")=="1") {
        $("#ph").css({"display":"none"});
    }
    
   });