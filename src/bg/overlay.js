
// Create banner
function addBanner(reminderText, height) {
    var $reminderBanner = $(document.createElement('div'));
    $reminderBanner.attr("class", "reminder-banner box-sizing")
                   .attr("contenteditable", "true")
                   .css("top", "-" + height + "px")
                   .text(reminderText);


    // Prevent typing of newlines
    $reminderBanner.keypress(function(e){return e.which !== 13;});

    $('body').prepend($reminderBanner);
    $reminderBanner.animate({'top': 0}, 200);
}

function bumpFacebook(bumpAmount) {
    // $('#box').animate({'top':'20px'},200);
    $('._li').animate({'padding-top': bumpAmount + 'px'}, 200);
    $('#blueBar').animate({'top': bumpAmount + 'px'}, 200);
}

// Fade Facebook
var $whiteOverlay = $(document.createElement('div'));
$whiteOverlay.addClass("white-overlay");
$('body').prepend($whiteOverlay);

// Add the input container/field
var $inputContainer = $(document.createElement('div'));
$inputContainer.addClass("input-container");

var $inputField = $(document.createElement('input'));
$inputField.addClass("input-field box-sizing");
$inputField.attr("placeholder", "What did you come here to do?");

$inputContainer.prepend($inputField);
$('body').prepend($inputContainer);
$inputField.focus();

$inputField.keypress(function (e) {
  if (e.which === 13) {
    // $(inputField).submit();
    // TODO: Is .val() proper?
    $whiteOverlay.toggle();
    $inputContainer.toggle();
    console.log($inputField.val());
    bumpFacebook(55);
    addBanner($inputField.val(), 55);
    return false;
  }
});
