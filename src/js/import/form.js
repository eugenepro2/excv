$('form').submit(function(e) {
  e.preventDefault(); 
  var $form = $(this);
  check($form);
});

function check($form) {
  let checkbox = $form.find('#checkbox');
  if(checkbox.is(':checked')) {
    checkbox.siblings('label').removeClass('invalid');
    ajaxMail($form);
  } else{
    checkbox.siblings('label').addClass('invalid');
  }
}

function ajaxMail($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize()
  }).done(function() {
    $('.contact.is-active').css('height', '100%');
    $('form').velocity({translateX : '200%'}, {duration: 1000, easing: [0.7,0,0.3,1], display: 'none'});  
    setTimeout(function() {
      $('.contact__thanks').css({
        'transform': 'translateY(50%)',
        'display': 'block'
      });
    }, 1000);
    
    $('form input').each(function() {
      $(this).delay(3000).val('');
    });
  }).fail(function() {
    console.log('fail');
  });
}

$('#checkbox').change(function() {
  if(this.checked) {
    $('#send').prop('disabled', false);
  } else{
    $('#send').prop('disabled', true);
  }
});
