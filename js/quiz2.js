// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

$(document).ready(function () {
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('you clicked a link, good for you');
	});

  var arr = ["emily", "is", "great"];
  var i = 0;
  $("ol li").each(function(index) {
    $(this).css("color", "blue");
    $(this).text(arr[i]);
    i++;
  });

  $(".accordion").on('click', function(e) {
    if($('#shrink').hasClass("hidden")){
      $('#shrink').removeClass("hidden");
    }
    else {
      $('#shrink').addClass("hidden");
    }
  });

  $('#end').click(function() {
    $("body").fadeOut(function() {
      $(this).text("You're in the danger zone!").fadeIn();
    });
  });

  $('#mystery').click(function() {
    $('html').css("background-color", "orange");
    $('#mystery').text("YOU BROKE IT CLICK ME BACK");
    $('#mystery').click(function() {
      $('html').css("background-color", "#eee");
      $('#mystery').text("Let's pretend that never happened");
    });
  });


	console.log("this is a message for you!!!")


});
