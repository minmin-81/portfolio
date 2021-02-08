
$(document).ready(function(){

    $('.navi_box').css({'transform':'rotate(10000deg)'},'linear')
    $('.big_box').css({'transform':'rotate(-10000deg)'},'linear')
        // 바탕화면 회전
    $('.popup_close').click(function(){
        $('.popup').fadeOut();
    })


    $('.works').click(function(){
        $('.popup_works').fadeIn();
    })

    $('.aboutme').click(function(){
        $('.popup_aboutme').fadeIn();
    })

    $('.contact').click(function(){
        $('.popup_contact').fadeIn();
    })
});