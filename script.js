
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

    let slide_num = 0;
    let slide_page = 1;
    $('.popup_right_bt').click(function(){
        if(slide_num > -600){
        slide_num = slide_num-100;
        slide_page = slide_page + 1;
        $('.popup_slide').css({'left': slide_num+'%'});
        $('.popup_page p').text(slide_page+'/7')
    }
        else {
            slide_num = 0;
            $('.popup_slide').css({'left':'0'})
            slide_page = 1;
            $('.popup_page p').text('1/7')
        }
    })

    $('.popup_left_bt').click(function(){
        if(slide_num < 0){
        slide_num = slide_num+100;
        slide_page = slide_page - 1;
        $('.popup_slide').css({'left': slide_num+'%'});
        $('.popup_page p').text(slide_page+'/7')
    }
        else {
            slide_num = -600;
            $('.popup_slide').css({'left':'-600%'})
            slide_page = 7;
            $('.popup_page p').text('7/7')
        }
    })
});