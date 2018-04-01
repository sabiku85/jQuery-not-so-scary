$(function() {

  let clickedCircles;

  $('.rating-circle').on('click', greenCircles);
  $('.rating-circle').on('mouseenter', yellowCircles);
  $('.rating-circle').on('mouseleave', whiteCircles);
  
  function yellowCircles() {
    $(this).css('background', 'yellow');
    $(this).prevAll('.rating-circle').css('background', 'yellow');
    $(this).nextAll('.rating-circle').css('background', 'inherit');
  }

  function whiteCircles() {
    $(this).css('background', 'inherit');
    $(this).prevAll('.rating-circle').css('background', 'inherit');
    $(clickedCircles).css('background', 'green');
    $(clickedCircles).prevAll('.rating-circle').css('background', 'green');
  }
  
  function greenCircles() {
    clickedCircles = $(this);
    const circleIndex = $('.rating-circle').index(clickedCircles) + 1;

    $(clickedCircles).css('background', 'green');
    $(clickedCircles).prevAll('.rating-circle').css('background', 'green');
    $(clickedCircles).nextAll('.rating-circle').css('background', 'inherit');
    $('#ocena').removeAttr('hidden');

    $('#ocena').text('Twoja ocena to ' + circleIndex + '/5');
  }
 
});
