$(document).ready(function() {
    $("h2").addClass("underline");//underline all <h2> elements
    $("ul").addClass("border"); //adds a border to all lists 
});

var addtext = $("<p></p>").text("Lorem 20");
$("body").append(addtext);

$("h2").before("Some text after");