$(document).ready(function() {
    $(".full").click(function(){
        $(".object").addClass('back');
    });
});

$(document).ready(function() {
    $(".empty").click(function(){
        $(".object").removeClass('back');
    })
})

$(document).ready(function() {
    $(".circle").click(function() {
        $(this).toggleClass('back');
    })
})