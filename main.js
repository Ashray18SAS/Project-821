var mouseevent="";
 var lastX, LastY;
color1= "black";
width1= "3";
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
canvas.addEventListener("mouseup",up);
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
function up(e) {
    mouseevent= "mouseup";
}
canvas.addEventListener("mousedown",down);
canvas.addEventListener("mousedown",mousecircle)
function mousecircle(e){
    x = e.clientX-canvas.offsetLeft;
   y = e.clientY-canvas.offsetTop;
   console.log("x= "+x+", y= "+y);
   ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=width1;
ctx.arc(x, y, 40, 0, 2*Math.PI);
ctx.stroke();
}
function down(e) {
    color1= document.getElementById("color").value;
    width1= document.getElementById("width").value;
    mouseevent= "mousedown";
    
}
canvas.addEventListener("mousemove",move);
function move(e) {
    currentX= e.clientX-canvas.offsetLeft;
    currentY= e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
ctx.strokeStyle=color1;
        ctx.lineWidth=width1;
        ctx.moveTo(LastX, LastY);
        ctx.lineTo(currentX, currentY);
        console.log("X=(LastX) "+LastX+"Y=(LastY) "+LastY);
        console.log("X=(CurrentX) "+currentX+"Y=(CurrentY) "+currentY);
        ctx.stroke();

}
LastX=currentX;
LastY=currentY;

}
function cleararea(){
    ctx.clearRect(0, 0, 800, 600);

}