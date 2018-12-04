
$("#close").on("click", function(){
   $("#sidebar").css('right', '-25%');
   $("#main").css('width', '100%');
});


$(".open").on("click", function(){
   $("#sidebar").css('right', '0');
   $("#main").css('width', '75%');
});
