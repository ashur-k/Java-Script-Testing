//Function 1 to print input text to alert
function fn1(){
        var str = document.getElementById("text1").value;
        alert (`value is ${str}`)
    }
//Function 2 printing radio button values to alert with use on if else

function fn2() {
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");

    if (rd1.checked == true)
            alert(`Radio button selected is ${rd1.value}`);
        else if (rd2.checked == true)
            alert(`Radion butoon 2 value is ${rd2.value}`);
        else
            alert(`No Radio Button is selected`);
}
// Taking Input from SelectBox in Javascript
function fn3(){
    var select =document.getElementById("select_box");
        alert(select.options[select.selectedIndex].value);
}
//getElementByTagName method in JavaScript
function changeStyling(){
    var para =document.getElementsByTagName("p");
    para[0].style.fontSize = 25+"px";
    para[1].style.color = "red";
    para[2].style.backgroundColor = "grey";

    for (var i=0; i<para.length;i++)
    {
        para[i].style.fontSize = `${12}px`;
    }
    

}