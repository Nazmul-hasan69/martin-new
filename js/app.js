$(function () {

    //sticky Nav
    $(window).on('scroll', function () {
       if ($(window).scrollTop() > 0) {
          $('#navbar').addClass('stickyNav')
       } else {
          $('#navbar').removeClass('stickyNav')
       }
    })
 
    //Back to Top Button
    $(window).on('scroll', function () {
       if ($(window).scrollTop() > 600) {
          $('#backToTop').fadeIn(800)
       } else {
          $('#backToTop').fadeOut(800)
       }
    })
    $('#backToTop').on('click', function () {
       $('html,body').animate({
          scrollTop: 0
       },1000)
    })
 
    //Smooth Scroll
 
    $('a').on('click', function (e) {
       e.preventDefault()
 
       if (this.hash !== '') {
          var hash = this.hash
 
          $('html,body').animate({
             scrollTop: $(hash).offset().top - 58
          },1000)
       }
       console.log($(hash).offset().top)
    })
 
    //Preloader
    $(window).on('load', function () {
       $('#preloader_container').fadeOut(1000)
    })
})