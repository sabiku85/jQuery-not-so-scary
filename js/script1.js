$(function() {

  function yellowCircles() {
    $(this).prevAll('.rating-circle').addClass('hover');
  }

  function whiteCircles() {
    $(this).css('background', 'inherit');
    $(this).prevAll('.rating-circle').css('background', 'inherit');
  }
  
  function greenCircles() {
    const circleIndex = $('.rating-circle').index(this) + 1;

  	//$(this).css('background', 'green');
    //$(this).prevAll('.rating-circle').css('background', 'green');
    $(this).addClass('selected');
    $(this).prevAll('.rating-circle').addClass('selected');
    $('#ocena').removeAttr('hidden');
    $('#ocena').text('Twoja ocena to ' + circleIndex + '/5');
  }

  $('.rating-circle').mouseover(yellowCircles,);
  $('.rating-circle').click(greenCircles);

  //$('.rating-circle').hover(yellowCircles, whiteCircles);

});
