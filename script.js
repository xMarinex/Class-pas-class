/*  1  ab  ac  ad  ai
   ae   2  bc  bd  bi
   af  bf   3  cd  ci
   ag  bg  cg   4  ci
   ah  bh  ch  dh   5 */



/* NIV I*/

/* button to switch all items to the "full" state */
$(document).ready(function () {
    $(".full").click(function () {
        $(".form").addClass('back');
    });
});

/* button to switch all items to the "empty" state */
$(document).ready(function () {
    $(".empty").click(function () {
        $(".form").removeClass('back');
    });
});

/* change the state of the "circle" elements */
$(document).ready(function () {
    $(".circle").click(function () {
        $(this).toggleClass('back');
    });
});

/* NIV II*/

/* click on square element changes its state and changes the state of all elements in its line and row.*/
$(document).ready(function (){
    $(".1").click(function (){
        $(this).toggleClass('back');
    });
});

$(document).ready(function() {
    $(".1").click(function() {
        if ($(".1").hasClass('back')) {
            $(".a").addClass('back');
        }
        if (!$(".1").hasClass('back')) {
            $(".a").removeClass('back');
        }
    });
}); 

$(document).ready(function (){
    $(".2").click(function (){
        $(this).toggleClass('back');
    });
});

$(document).ready(function() {
    $(".2").click(function() {
        if ($(".2").hasClass('back')) {
            $(".b, .e").addClass('back');
        }
        if (!$(".2").hasClass('back')) {
            $(".b, .e ").removeClass('back');
        }
    });
}); 

$(document).ready(function (){
    $(".3").click(function (){
        $(this).toggleClass('back');
    });
});

$(document).ready(function() {
    $(".3").click(function() {
        if ($(".3").hasClass('back')) {
            $(".c, .f").addClass('back');
        }
        if (!$(".3").hasClass('back')) {
            $(".c, .f").removeClass('back');
        }
    });
}); 

$(document).ready(function (){
    $(".4").click(function (){
        $(this).toggleClass('back');
    });
});

$(document).ready(function() {
    $(".4").click(function() {
        if ($(".4").hasClass('back')) {
            $(".d, .g").addClass('back');
        }
        if (!$(".4").hasClass('back')) {
            $(".d, .g").removeClass('back');
        }
    });
}); 

$(document).ready(function (){
    $(".5").click(function (){
        $(this).toggleClass('back');
    });
});

$(document).ready(function() {
    $(".5").click(function() {
        if ($(".5").hasClass('back')) {
            $(".h, .i").addClass('back');
        }
        if (!$(".5").hasClass('back')) {
            $(".h, .i").removeClass('back');
        }
    });
}); 


