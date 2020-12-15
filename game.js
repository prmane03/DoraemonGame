var character = document.getElementById("character");
var block = document.getElementById("block");
var scorebox = document.getElementById("scorebox");
var playbox = document.getElementById("playbox");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}
var score = 0;
//animate character

var i =1;
var run = setInterval(function (){
    if(i>6){
        i=1;
    }
    character.src="img/char0"+i+".png";
    i++;
    score +=10;
    scorebox.innerText = "Score : "+score;
},80)

var highscore =0;
var checkDead = setInterval(function(){
    var chartop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft < 35 && blockleft > 0 && chartop>= (playbox.style.height-20)){
        highscore = (score>highscore?score:highscore);
        if(confirm("Your Score "+score+"\nDo u want To continue ?")){
            block.style.left=window.width-20;
            score = 0;
            document.getElementById("msg").innerText = "Your Highscore : "+highscore;
        }
        else{
            block.style.animation = "none";
            clearInterval(run);
        }
    }
},10)
