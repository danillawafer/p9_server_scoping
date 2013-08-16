$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    var text = $(this).attr('data-heading');
    $('#awesomeness_holder').text(text);
  });

  // What other events do you need to bind to make the other pages work?
});
