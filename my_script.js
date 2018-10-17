//fade in for main page
$(document).ready(function(){
	$("#positionLine").fadeIn(3000);
	$("#positionLine1").fadeIn(3500);
	$("#positionLine2").fadeIn(4000);
	$(".navbar").fadeIn(2000);

});



// modal for icons in contact form 




$(document).ready(function(){
  $("#shake3").click(function(){
  var t = $(this).attr("src");
  $(".modal-body").html("E-mail:cozmaalex07@gmail.com");
  $("#myModal").modal();
});
});

$(document).ready(function(){
  $("#shake1").click(function(){
  var p = $(this).attr("src");
  $(".modal-body").html("Tel:00353894414459");
  $("#myModal").modal();
}); 
});


// scroll when click on the navbar li.

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// navbar hide and show when scroll

$(document).ready(function() {

  var previousScroll = 0;

  $(window).scroll(function() {

    var currentScroll = $(this).scrollTop();

    // If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
    if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {

      // If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
      if (currentScroll > previousScroll) {
        window.setTimeout(hideNav, 300);

        // Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
      } else {
        window.setTimeout(showNav, 300);
      }

      // Set the previous scroll value equal to the current scroll.
      previousScroll = currentScroll;
    }

  });

  function hideNav() {
    $(".navbar").removeClass("is-visible").addClass("is-hidden");
  }

  function showNav() {
    $(".navbar").removeClass("is-hidden").addClass("is-visible");
  }

});





	
