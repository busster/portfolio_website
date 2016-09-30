// $(document).ready(function(){
//     $('.project-display').hover(function() {
//         $(this).css({"opacity":"1", "z-index":"2"});
//         $(this).addClass('transition');
//         $('.project',this).addClass('inverse-transition');
//     },
//     function() {
//         $(this).css({"opacity":".5", "z-index":"0"});
//         $(this).removeClass('transition');
//         $('.project',this).removeClass('inverse-transition');
//     });
//   });


$(document).ready(function(){
    $('.project-display').hover(function() {
        $(this).css({"opacity":"1", "z-index":"2"});
        $(this).addClass('translate');
        $('.project',this).addClass('translate-inverse');
        // $(this).animate({"transform": "translate3d(0px,0px,1000px)"});
        // $(this).siblings().animate({"height": "32%"});
    },
    function() {
        $(this).css({"opacity":".5", "z-index":"0"});
        $(this).removeClass('translate');
        $('.project',this).removeClass('translate-inverse');
        // $(this).animate({"transform": "translate3d(0px,0px,0px)"});
        // $(this).siblings().animate({"height": "33.33333333%"},0.5);
    });
  });