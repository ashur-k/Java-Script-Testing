$("#button1").click(function(){
    $("#para-1").slideToggle("slow");
});
$("#button2").click(function(){
    $("#para-2").slideToggle("slow");
});

$("button").mouseenter(function(){
    $(this).removeClass("makeGreen").addClass("makeCyan");
   
});

$("button").mouseleave(function(){
    $(this).removeClass("makeCyan").addClass("makeGreen");
});

$(document).ready(function(){
    $(".box").on("click", function(){
        var classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color", "red");
        
    })
})
