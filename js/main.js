$(function(){
    'use strict'
    // slider hight
    var winhight=$(window).height(),
        upperhight=$('.upper-bar').innerHeight(),
        navhight=$('.navbar').innerHeight();

    $('.slider , .carousel-item').height(winhight -(upperhight+navhight))

    /* .featured-work ul li*/
    $('.featured-work ul li').on('click',function(){
       $(this).addClass('active').siblings().removeClass('active');
      if($(this).data('class')==='All'){
          $('.shufell-image .col-sm').css('opacity',1)
      }
      else{
        $('.shufell-image .col-sm').css('opacity','.1');
        $($(this).data('class')).parent().css('opacity',1);
      }
    });
})