$("#toggler").on("click", function(){
   $("#sidebar").toggleClass('max-sidebar');
    $("#sidebar table td").toggleClass('fadein-td fadeout-td');
    //$("#sidebar table td:nth-child(2)").toggleClass('hidden-td');
   $("#content").toggleClass('max-content');
    $(".mar").toggleClass('d-none');
    $(".mar1").toggleClass('d-none');
});

$('[data-toggle="popover"]').popover({
        placement : 'right',
        html : true,
        title : 'User Info <a href="#" class="close" data-dismiss="alert">&times;</a>',
        content : '<div class="media"><a href="#" class="pull-left"><img src="/examples/images/avatar-tiny.jpg" class="media-object" alt="Sample Image"></a><div class="media-body"><h4 class="media-heading">Jhon Carter</h4><p>Excellent Bootstrap popover! I really love it.</p></div></div>'
    });
    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
