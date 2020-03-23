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

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://swapi.co/api/");
xhr.send();

const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;

        data.forEach(function(item) {
            el.innerHTML += "<p>" + item.name + "</p>";
        });
    });
}