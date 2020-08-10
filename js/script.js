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

function catalogMenuShow(el){
  $(el).parent().find(".filter-item").toggle();
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

$(".polzunok-5").slider({
  min: 0,
  max: 7000000,
  values: [2000000, 5000000],
  range: true,
  animate: "fast",
  step: 1000,
  slide : function(event, ui) {
  $(".polzunok-input-5-left").val(ui.values[ 0 ]);
  $(".polzunok-input-5-right").val(ui.values[ 1 ]);
  }
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(document).focusout(function() {
  var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
  opt_left = $(".polzunok-5").slider("option", "min"),
  where_right = $(".polzunok-5").slider("values", 1),
  input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
  opt_right = $(".polzunok-5").slider("option", "max"),
  where_left = $(".polzunok-5").slider("values", 0);
  if (input_left > where_right) {
    input_left = where_right;
  }
  if (input_left < opt_left) {
    input_left = opt_left;
  }
  if (input_left == "") {
  input_left = 0;
  }
  if (input_right < where_left) {
    input_right = where_left;
  }
  if (input_right > opt_right) {
    input_right = opt_right;
  }
  if (input_right == "") {
  input_right = 0;
  }
  $(".polzunok-input-5-left").val(input_left);
  $(".polzunok-input-5-right").val(input_right);
  $(".polzunok-5").slider( "values", [ input_left, input_right ] );
});
