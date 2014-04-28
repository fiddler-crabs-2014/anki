$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them


  $('.answer').hide();

  $('#flip').click(function(e)	{
    e.preventDefault();
  $('.question').hide();
  $('.answer').show();

  });

  var x = 0;
  function increase() {
  x += 1;
  document.getElementById( "counting" ).value = x;
  }

  function decrease() {
  x -= 1;
  document.getElementById( "counting" ).value = x;
  }


  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});


$(document).keypress(function(event){

  var keycode = (event.keyCode ? event.keyCode : event.which);

  if(keycode == '114'){
    window.location.href='/register';
  }

  if(keycode == '101'){
    window.location.href='/';
    }

  if(keycode == '112'){
      window.location.href='/display_decks';
      }
});
