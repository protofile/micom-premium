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
  $(".payment-method-item").click(function(){
    $(".payment-method-item").removeClass("checked");
    $(this).addClass("checked");
  });
  $(".topik-item").click(function(){
    $(this).toggleClass("active");
  });

  $(".mi-accordion .acc-item").click(function(){
    $(this).toggleClass("active");
    $($(this).children(".acc-body")).slideToggle();
    $($(this).children(".acc-header").children(".fa")).toggleClass("fa-caret-down fa-caret-up");
  });

  $(".btn-pop-link").click(function(pl){
    pl.preventDefault();
    $($(this).attr("href")).addClass("show");
  });
  $(".cancel-bt").click(function(cb){
    cb.preventDefault();
    $(".overlay").removeClass("show");
  });
});