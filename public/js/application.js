
$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    var newText = $(this).attr('data-heading');
    $('#awesomeness_holder').text(newText);
  });

  $('.skill_teller').on('click', function() {
    var newText = $(this).attr('data-heading');
    console.log(newText);
    $('#skill_holder').text(newText);
  });

  $('.meal_teller').on('click', function() {
    var newText = $(this).attr('data-heading');
    console.log(newText);
    $('#meal_holder').text(newText);
  });

  // What other events do you need to bind to make the other pages work?
});
