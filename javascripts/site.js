$(document).ready(function(){

  //nav btns
  $(document).on('click', '.work-btn', function(){
    $('.content-pane.active-pane').toggleClass('active-pane closed-pane')
    $('.work-pane').toggleClass('active-pane closed-pane')
    $('.about-container').removeClass('about-delay')
  })
  
  $(document).on('click', '.about-btn', function(){
    $('.content-pane.active-pane').toggleClass('active-pane closed-pane')
    $('.about-pane').toggleClass('active-pane closed-pane')
    $('.about-container').addClass('about-delay')
  })
  
  $(document).on('click', '.home-btn', function(){
    $('.content-pane.active-pane').toggleClass('active-pane closed-pane')
    $('.landing-pane').toggleClass('active-pane closed-pane')
    $('.about-container').removeClass('about-delay')
  })
  

  //gallery old
  $(".extend-gallery-button").on('click', function(){
    if ($("#thumbnails").hasClass('open-gallery')){
      $("#thumbnails").removeClass('open-gallery');
      $(".extend-gallery-button").html('More Images');
    }
    else {
      $("#thumbnails").addClass('open-gallery');
      $(".extend-gallery-button").html('Less Images');
    }
  })
})

$(document).on('click', '.lead-image', function(){
  console.log('test')
  $("#thumbnails a:first-child > img").trigger("click");
});