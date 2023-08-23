var Question= [
   {
    question:`What does HTML stand for?`,
    Option1 : `hyperlink and text markup language`,
    Option2 :`hypertext and markup language`,
    Option3 : `home tool markup language`,
    correctoption :`hypertext and markup language`,
 },
  {
    question:`Who is making the web standars?`,
    Option1 : ` google`,
    Option2 :`the world wide web consertium`,
    Option3 : `Microsoft`,
    correctoption :`the world wide web consertium`,
 },
 {
    question:`choose the correct html element for the largest heading?`,
    Option1 : ` <h1>`,
    Option2 :`<h6>`,
    Option3 : `Microsoft`,
    correctoption :` <h1>`,
 },
];
var Ques=document.getElementById("Question");
var Option1=document.getElementById("Option1");
var Option2=document.getElementById("Option2");
var Option3=document.getElementById("Option3");
var disable =document.getElementById("btn")


var index = 0;

function nextquestion(){
    var Options =document.getElementsByName("answer");
    for(var i = 0;i<Options.length;i++){
        if(Options[i].chacked)
        Options[i].chacked= false;
        btn.disabled =true;
    }
    if(index > Question.length -1){
        console.log("question end")
    }else{
        Ques.innerHTML=Question[index].question;
        Option1.innerText=Question[index].Option1;
        Option2.innerText=Question[index].Option2;
        Option3.innerText=Question[index].Option3;
        index++;
        
    }

}
nextquestion()
function enabledbtn(){
    btn.disabled = false;

}