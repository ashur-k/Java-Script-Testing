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
    var select = document.getElementById("select_box");
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

function changeStyling1(){

    var element = document.getElementsByClassName("mypara");
    for (var x=0;x<element.length;x++)
    {
        element[x].style.color = "red";
    }

}
function setNewImage(){
   document.getElementById("img_1").src = "images/2.png"
}

function setOldImage(){
 document.getElementById("img_1").src = "images/1.jpg"
}

function validate(){
    var username = document.getElementById("uname");
    var password = document.getElementById("password");

    if(username.value.trim() == "" )
      {
        alert("Blank Username");
        username.style.border = "solid 3px red";
         document.getElementById("lbluser1").style.visibility="visible";
        return false;
    } 
    else if (password.value.trim() == ""){
        alert("Blank Passowrd");
        password.style.border = "solid 3px red";
       document.getElementById("lbluser2").style.visibility="visible";
        return false;
    } 
    else if(password.value.trim().length<5){
        alert("Password should be more than 5 characters");
        document.getElementById("lbluser2").style.visibility="visible";
        return false;
    }
    else{
        true;
    }
    }
