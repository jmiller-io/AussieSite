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


// $('#carousel li').click((event) => {
//   currentItem = event.currentTarget;
//   nextItem = currentItem.nextElementSibling
//   // if (currentItem.classList[0] === 'visible-carousel-item') {
//   //   currentItem.classList.remove('visible-carousel-item')
//   //   currentItem.classList.add('hidden-carousel-item')
//   // } else {
//   //   currentItem.classList.add('visible-carousel-item')
//   //   currentItem.classList.remove('hidden-carousel-item')
//   // }

//   //   if (nextItem.classList[0] === 'visible-carousel-item') {
//   //   nextItem.classList.remove('visible-carousel-item')
//   //   nextItem.classList.add('hidden-carousel-item')
//   // } else {
//   //   nextItem.classList.add('visible-carousel-item')
//   //   nextItem.classList.remove('hidden-carousel-item')
//   // }

//   console.log($(event.currentTarget))



// });
