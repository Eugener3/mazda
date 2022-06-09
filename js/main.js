$('.open-popup').click(function(e) {
	e.preventDefault();
	$('.popup-bg').fadeIn(150);
	$('html').addClass('no-scroll');
});
$('.close-popup').click(function(e) {
	e.preventDefault();
	$('.popup-bg').fadeOut(150);
	$('html').removeClass('no-scroll');
});
$('.popup-bg').click(function (e) {
  if (!$(e.target).closest(".popup").length) {
    $('.popup-bg').fadeOut(150);
  }
});



$(document).ready(function() {	// Проверка на готовность DOM
  $("#right-right-header-button-fake").click(function() { //Поиск по id элемента
    $(this).toggleClass("active");
    $('.burger-menu-nav').slideToggle(300, function(){	// Слайд вверх-вниз
      if($(this).css('display') === "none"){	// Проверка на display none
      }
    });
  });
});




$(document).ready(function(){
  
  $(".search").click(function(){
    $(".wrap, .input").toggleClass("active");
    $("input[type='text']").focus();
  });
  
});
