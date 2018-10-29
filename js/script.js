$("#handler").on("click", function(){
    $('.collapse').collapse('hide');
    $(this).find('.icon').toggleClass('icon-arrow-right icon-arrow-left');
    $("#sidebar").toggleClass('max-sidebar');
    $("#content").toggleClass('max-content');
    setTimeout(function(){
        $('.btn-card-n').toggleClass('d-none');
        $('.btn-card-w').toggleClass('d-none');
     }, 100);

 });
