$(document).ready(function(){
    $('.project-display').hover(function() {
        $(this).css({"opacity":"1", "z-index":"2"});
        $('.button',this).css("opacity", "1");
        $(this).addClass('translate');
        $('.project',this).addClass('translate-inverse');
    },
    function() {
        $(this).css({"opacity":".5", "z-index":"0"});
        $('.button',this).css("opacity", ".25");
        $(this).removeClass('translate');
        $('.project',this).removeClass('translate-inverse');
    });
  });

$(document).ready(function(){
    $('.button').hover(function() {
        $(this).css({"outline": "2px solid rgba(255,255,255,.5)", "outline-offset": "5px"});
    },
    function() {
        $(this).css({"outline": "0px solid white", "outline-offset": "0px"});
    });
  });

