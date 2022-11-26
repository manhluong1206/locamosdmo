$(document).ready(function () {
    var modal = $('.modal');
    var img = $('img');
    var span = $('.close');
  
    img.click(function () {
      modal.show();
    });
  
    span.click(function () {
      modal.hide();
    });
  
    $(window).on('click', function (e) {
      if ($(e.target).is('.modal')) {
        modal.hide();
      }
    });
  });