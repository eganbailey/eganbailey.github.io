//jQuery to collapse the navbar on scroll
$(document).ready(function(){
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
$("#mrbean").hover(function() {
    var img = $("#mrbean");
    
    if (img.width() < 200)
    {
        img.animate({width: "304px", height: "236px"}, 1000);
    }
});

//$('.round-button2').each(function()
//{
  //  $(this).mouseover(function()
   // {
   //     $(this).animate({'opacity': 1, 'margin-top': '5px', 'box-shadow': '2px 2px 2px #000'}, {duration: 1000});
    //});
    //$(this).mouseout(function()
    //{
     //   $(this).animate({'opacity': 0.2, 'margin-top': '0px', 'box-shadow': '0px 0px 0px #000'}, {duration: 1000});
    //});
//});
});