$(document).ready(function(){
  $(".menu-btn").click(function(){
    $(".main-menu").toggleClass("show");
    $($(this).children("i.fa")).toggleClass("fa-bars fa-times");
  });

  var afs = 16;
  $(".article-text").css("font-size", afs + "px");
  $(".font-min").click(function () {
    if (afs > 14) {
      afs--;
      $(".article-text").css("font-size", afs + "px");
    } else {
      //do nothing
    }
  });
  $(".font-plus").click(function () {
    if (afs < 20) {
      afs++;
      $(".article-text").css("font-size", afs + "px");
    } else {
      //do nothing
    }
  });
});