
$("#close").on("click", function(){
   $("#sidebar").css('right', '-25%');
   $("#main").css('width', '100%');
});


$(".open").on("click", function(){
   $("#sidebar").css('right', '0');
   $("#main").css('width', '75%');
});

$('input').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');
  } else {
    $(this).addClass('filled');
  }
})
