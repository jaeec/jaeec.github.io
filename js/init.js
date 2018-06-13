(function($){
  $(function(){
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.modal-trigger').leanModal();
    $('#textarea1').val('New Text');
  	$('#textarea1').trigger('autoresize');
  	$('#someTab').tab('show');

  }); // end of document ready
})(jQuery); // end of jQuery name space