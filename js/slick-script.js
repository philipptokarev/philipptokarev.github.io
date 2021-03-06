var $status = $('.pagingInfo');
var $amout = $('.amount');
var $lstatus = $('.letter-pagingInfo');
var $lamout = $('.letter-amount');
var $slickLetters = $('#letters-slider');
var $slickElement = $('#slider');
var $slickProducts = $('#products-slider.active');
var $slickProductsTwo = $('#products-slider.two');
var $slickPortfolio = $('#portfolio-slider');
var $slickTeam = $('#about-team-slider');
var $slickBenefits = $('.benefits');
var $bg_image = $('.background-slider');
let images = ["https://i.pinimg.com/originals/5d/26/49/5d2649e7901eb0c006b338c2b1634e93.jpg", "https://steelcase-res.cloudinary.com/image/upload/c_fill,dpr_auto,q_70,h_656,w_1166/v1571816355/www.steelcase.com/eu-en/2019/10/23/19-0129615.png", "https://wall-murals.eu/image/cache/data/0305-fototapeti/200/0305-200P2-WEB-fototapeti-chervena-roza-mural-red-rose-P2-1200x800_0.jpg"];
var city = "Выбор";
$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i);
  $amout.text('/ ' + slick.slideCount);
  $bg_image.attr('src', images[i-1]);
});

$slickLetters.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $lstatus.text(i);
  $lamout.text('/ ' + slick.slideCount);
});

$slickElement.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.arrow-left'),
  nextArrow: $('.arrow-right')
});

$slickLetters.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.letter-arrow-left'),
  nextArrow: $('.letter-arrow-right')
});
$slickProducts.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.product-arrow-left'),
  nextArrow: $('.product-arrow-right')
});
$slickPortfolio.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.arrow-left'),
  nextArrow: $('.arrow-right')
});
$slickTeam.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.team-arrow-left'),
  nextArrow: $('.team-arrow-right')
});

if($(window).width() <= 1100)
  $slickBenefits.slick({
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    }]
  });
