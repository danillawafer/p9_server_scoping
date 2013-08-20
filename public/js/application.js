$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    var newText = $(this).attr('data-heading');
    $('#awesomeness_holder').text(newText);
  });

  $('.skill_teller').on('click', function() {
    var ourUrl = window.location.pathname.split('/');
    var skill = ourUrl[ourUrl.length -1];
    $('#skill_holder').text(skill);
  });

  $('.meal_teller').on('click', function() {
    $('#meal_holder').text(meals);
  });
});
