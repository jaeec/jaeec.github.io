/*
$(document).ready(function(){
  $('.sidenav-trigger').sideNav();
  $('.parallax').parallax();
  $('.carousel').carousel();
  $('.tabs').tabs();
});
*/
(function($) {
  $(function() {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.tabs').tabs();
    $('.modal').modal();
  }); // end of document ready
})(jQuery); // end of jQuery name space
