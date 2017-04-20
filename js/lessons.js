function lesson_clicked(elem) {
  var lesson = $(elem).attr('id');

  var lesson_page = null;
  
  $('#content').html('Gimme a sec, I\'m writing out ' + lesson + '!');

  $.ajax({
    url: lesson + '.html',
    dataType: 'html',
    error: function(x,h,r) {},
    success: function(x,h,r) {lesson_page = x;}
  });
  
  setTimeout(function() {
    $('#content').html( 
      lesson_page ? 
      $(lesson_page) :
      'Ooh \'eck, I\'ve lost me notes!!! I can\'t find ' + lesson + ' anywhere!');
  }, 1000);
}