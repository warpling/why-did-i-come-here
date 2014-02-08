
// Fade Facebook
// $('._li').css('opacity', '0.2');
var whiteOverlay = document.createElement('div');
$(whiteOverlay).attr("class", "white-overlay");
$('body').prepend(whiteOverlay);

// Add the input container/field
var inputContainer = document.createElement('div');
$(inputContainer).attr("class", "input-container");

var inputField = document.createElement('input');
var $inputField = $(inputField).attr("class", "input-field")
                 .attr("placeholder", "What did you come here to do?");

$(inputContainer).prepend(inputField);
$('body').prepend(inputContainer);
$(inputField).focus();

$inputField.keypress(function (e) {
  if (e.which === 13) {
    // $(inputField).submit();
    // TODO: Is .val() proper?
    console.log($inputField.val());
    return false;
  }
});

// Create banner
var $reminderBanner = $(document.createElement('div'));
