function lesson_clicked(elem) {
  
  var lesson = null;

  if (typeof elem === 'string' || elem instanceof String)
    lesson = elem
  else
    lesson = $(elem).attr('id');

  var lesson_page = null;
  
  $('#content').html('Gimme a sec, I\'m writing out ' + lesson + '!');

  $.ajax({
    url: lesson + '.html',
    dataType: 'html',
    error: function(x,h,r) {
      console.log(r)
    },
    success: function(x,h,r) {lesson_page = x;}
  });
  
  setTimeout(function() {
    $('#content').html( 
      lesson_page ? 
      "<strong>" + lesson_page + "</strong>" :
      'Ooh \'eck, I\'ve lost me notes!!! I can\'t find ' + lesson + ' anywhere!');

    $('pre').each(function(i, block){hljs.highlightBlock(block);})
  }, 500);
}

function show_hidden_content(elem, target_id)
{
  var hidden = $(elem).attr('class');

  if (hidden === 'hidden-content')
  {
    $(target_id).removeClass('hidden');
    $(elem).removeClass('hidden-content');
    $(elem).addClass('shown-content');
  }
  else
  {
    $(target_id).addClass('hidden');
    $(elem).removeClass('shown-content');
    $(elem).addClass('hidden-content');
  }
}