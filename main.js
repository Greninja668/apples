x=0
y=0
drawapple=""
draw_apple=""
screenwidth=0
screenheight=0
var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
var speak_data=""
var to_number=0
function preload(){
    drawapple=loadImage("1111apple-removebg-preview.png")
}
function start(){
    document.getElementById("status").innerHTML="system is listening please speak"
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    to_number=Number(content)
    document.getElementById("status").innerHTML="the speech has been recognised as "+content
    if (Number.isInteger(to_number)) {  
    document.getElementById("status").innerHTML="started drawing apple"
    draw_apple="set"
}   
}
function setup(){
    screenwidth=window.innerWidth
    screenheight=window.innerHeight
    canvas=createCanvas(screenwidth-15,screenheight-15)
}
function draw(){
    
    if (draw_apple=="set") {
     for(var i=1;i<=to_number;i++)
    {
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
    image(drawapple,x,y,50,50)
    document.getElementById("status").innerHTML="apple is drawn"
    draw_apple=""
    }}}
