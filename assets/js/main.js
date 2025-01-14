$(document).ready(function(){
  $(".menu-btn").click(function(){
    $(".main-menu").toggleClass("show");
    $($(this).children("i.fa")).toggleClass("fa-bars fa-times");
  });
});