console.log("check");
//const allCheckBox = document.querySelectorAll("input[type=checkbox]");
//const firstContainer = document.querySelector(".first-box");

function clickCheckBtn(btnValue) {
    // alert("change");
    document.querySelector("div").classList.remove("active");
if(btnValue.value=="no1")
{

//document.querySelector(".container-box").classList.remove("active");
document.querySelector("#box2").classList.remove("active");
document.querySelector("#box3").classList.remove("active");

document.querySelector("#box1").classList.add("active");
}

if(btnValue.value=="no")
{
    document.querySelector("#box1").classList.remove("active");
    document.querySelector("#box3").classList.remove("active");
    document.querySelector("#box2").classList.add("active");
}


if(btnValue.value=="3")
{
    document.querySelector("#box1").classList.remove("active");
    document.querySelector("#box2").classList.remove("active");
    document.querySelector("#box3").classList.add("active");
}


};