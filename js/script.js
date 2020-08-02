var city = "Выбор"

function menuClick(){
  $(".nav-bar").toggleClass("nav-menu-show");
  $(".nav-menu .far.fa-bars").toggleClass("bars-color");
  $(".nav-menu .far.fa-bars").toggleClass("fa-times");
  $("#menuShort").toggleClass("menuShow");
  $("#menuShort").toggleClass("menuHide");
  $("#menuFull").toggleClass("menuShow");
  $("#menuFull").toggleClass("menuHide");
}
function footerMenuShow(el){
  $(el).parent().find("ul").toggle();
}
function cityClick(){
  var c = $(".city b.name").text();
  $(".city b.name").text(city);
  city = c;
  $(".info .city .fa-sort-down").toggleClass("rotateCity");
  $(".info .city .cityList").toggleClass("showCity");
}

function chooseCity(el){
  $(".info .city .fa-sort-down").toggleClass("rotateCity");
  $(".info .city .cityList").toggleClass("showCity");
  $(".city b").text($(el).text());
  city = "Выбор";
}

function callForm(){
  $(".callback-form").toggleClass("show");
}
