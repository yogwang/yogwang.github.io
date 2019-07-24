$('#gotop')
  .css('opacity', 0)
  .click(function() {
    $('html,body')
      .stop(true, false)
      .animate({ scrollTop: 0 }, 300)
  })
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    $('#gotop')
      .stop(true, false)
      .animate({ opacity: 1 }, 200)
  }
  if ($(this).scrollTop() < 300) {
    $('#gotop')
      .stop(true, false)
      .animate({ opacity: 0 }, 200)
  }
})
