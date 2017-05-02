var md = new Remarkable({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}

    return ''; // use external default escaping
  }
});

function lesson_clicked(elem) {
 
  var lesson = $(elem).attr('id');

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

    $('.language-lua').each(function(i, block){hljs.highlightBlock(block);})
  }, 1000);
}

function lesson_clicked_md(elem) {
  var lesson = $(elem).attr('id');

  var lesson_page = null;
  
  $('#content').html('Gimme a sec, I\'m writing out ' + lesson + '!');

  $.ajax({
    url: lesson + '.md',
    contentType: 'text/plain',
    dataType: 'text',
    beforeSend: function( xhr ) {
      xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
    },
    success: function(x,h,r) {
      lesson_page = "" + x;
      console.log(x);
    }
  });
  
  setTimeout(function() {

    $('#content').html( 
      lesson_page ? 
      md.render(lesson_page) :
      'Ooh \'eck, I\'ve lost me notes!!! I can\'t find ' + lesson + ' anywhere!');
    }, 1000);
}

function unescapeHtml(safe) {
    return safe.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
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