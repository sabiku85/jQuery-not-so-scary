$(function() {
  const ratingCircle = document.getElementsByClassName('rating-circle');
  console.log(ratingCircle);
  const siblingsOfRatingCircle = $(ratingCircle).siblings('.rating-circle');
  console.log(siblingsOfRatingCircle);

  $(ratingCircle).hover(yellowCircles, whiteCircles);
  $(ratingCircle).click(greenCircles);

  function yellowCircles() {
    $(this).css('background', 'yellow');
    $(this).prevAll().css('background', 'yellow');
  }

  function whiteCircles() {
    $(this).css('background', 'white');
    $(this).prevAll().css('background', 'white');
  }
  
  function greenCircles() {
    const circleIndex = $(ratingCircle).index(this) + 1;

  	$(this).css('background', 'green');
    $(this).prevAll().css('background', 'green');
    $('#ocena').removeAttr('hidden');

    $('#ocena').text(circleIndex + '/5');
  }
});
