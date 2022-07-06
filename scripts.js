// $(function(){
//   $(".c-nav__mobile").hide();


//   });

  $(function() {
    $(".c-hamburger").on('click', function() {
      $(".c-hamburger").toggleClass("c-hamburger--active");
      $(".c-nav__mobile").toggleClass("c-nav__mobile--ontop");
      $(".c-hamburger--active").toggleClass(".c-hamburger");

    });
  });

 
  


  // $('#toggle').on(function() {
  //   $(this).toggleClass('active');
  //   $('#overlay').toggleClass('open');
  //  });

  // zrbić klase dla menu displey block (dupa) usuną hide
  // preventDefault uzyj

//   $(function() {     
//   $('.nav').on('click', function(e) {
//     e.preventDefault();
//     $('.side-categories').toggleClass('hide');
//   });
// });
// This is a very simple way of allowing the user to hide the side menu again b
// y clicking the same button - which is usually the expected behaviour.