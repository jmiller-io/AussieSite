console.log('Hi from Main');

// Toggle Mobile Menu
$('.nav-toggle').click((evt) => {
  console.log('clicked')

  if($('.nav-toggle').hasClass('is-active')) {
    $('.nav-toggle').removeClass('is-active')
  } else {
    $('.nav-toggle').addClass('is-active')
  }

  if($('.nav-menu').hasClass('is-active')) {
    $('.nav-menu').removeClass('is-active')
  } else {
    $('.nav-menu').addClass('is-active')
  }

})
