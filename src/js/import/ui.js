$('.btn .mobile').on('click', function() {
  $('.content__social').fadeToggle();
  $(this).find('i').fadeToggle();
  $(this).find('.mobile__close').fadeToggle();
});

var pos = $('#content__text__1').offset();


var widthBody = $('body').width();
if (widthBody > 767) {
  if($('div').is('.scene')) {
    $('.scene__block--3').css({
      left: pos.left + 215,
      top: pos.top-60
    });
  }
  $('#viewport').attr('content', 'width=1024, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi, ya-title=#000,ya-dock=#000');
} else{
  $('#viewport').attr('content', 'width=640, minimum-scale=0.3, maximum-scale=3, user-scalable=no, target-densitydpi=device-dpi, ya-title=#000,ya-dock=#000');
} 

$('.open-contact').on('click', function() {
  $('body').addClass('is-active');
  $('.section-open').addClass('is-active');
  setTimeout(function() {
    $('.contact').fadeIn().addClass('is-active');
  }, 500);
  $('iframe').css({display:'none'}).animate({opacity:'0'}, 1000).delay(1000);
});

$('.close').on('click', function() {
  $('body').removeClass('is-active');
  $('.section-open').removeClass('is-active');
  $('.contact').fadeOut().removeClass('is-active');
  $('iframe').animate({opacity:'1'}, 1000).css({display:'block'});
});

if($('section').is('.portfolio')) {
  $('body').addClass('no-hidden');
}

$('.open-contact-form').on('click', function() {
  // $('body').removeClass('no-hidden');
  $('.portfolio__contact').addClass('is-active');
  
});

$('.close-form').on('click', function() {
  $('.portfolio__contact').removeClass('is-active');
});

