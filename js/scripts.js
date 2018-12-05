
$("#close").on("click", function(){
   $("#sidebar").toggleClass('sidebar-d-none sidebar-d-show');
   $("#main").toggleClass('main-d-full main-d-side');
});


$(".full").on("click", function(){
   $("#sidebar").removeClass('sidebar-d-none').addClass('sidebar-d-show');
   $("#main").removeClass('main-d-full').addClass('main-d-side');
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
