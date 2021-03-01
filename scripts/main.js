$(document).ready( $(function(){

    var navbtn = $('.navbar-toggler');

    $(navbtn).click(function(){
        $(navbtn).toggleClass('active');
    })

}))

$('.flowing-scroll').on('click', function() {
  var el = $(this);
  var dest = el.attr('href'); 
  if (dest !== undefined && dest !== '') { 
    $('html').animate({
        scrollTop: $(dest).offset().top 
      }, 500 
    );
  }
  return false;
});