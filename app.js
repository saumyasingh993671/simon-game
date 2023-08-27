let userSeq = [];
let gameSeq = [];


//color value of button


let h2=document.querySelector("h2");
let started = false; //game was not started yet
let level = 0; //user --> level 0

document.addEventListener("keypress", function(){
    if(started == false)
    {
        console.log("Game Started");
        started = true;

         levelUp();
    }
});



function levelUp(){
    //reset user sequence to start with the beginning after incrementing the level
    userSeq=[];

    //Update the level means move on to the next level
    level++;
    h2.innerText=`Level ${level}`;

    let btns = ['yellow','red','green','blue'];

    //random index choosen from the above btns array to generate the random flash
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);

    // call flash the buttonh
    gameFlash(randBtn);
}

//flash the button
function gameFlash(btn){
    btn.classList.add("flash"); //add the flash class in all list of button which was created in html page 
    setTimeout(function(){
        btn.classList.remove("flash"); //remove all flash name class from all button
    },250);
}

//button click function
function btnPress(){
    //console.log(this); //press the differnt color button
    let colourbtn=this;
    userFlash(colourbtn);

    //enter which type of button enter by the user
    userColor=colourbtn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}
let allbtn=document.querySelectorAll(".btn");
for(btns of allbtn)
{
    btns.addEventListener("click",btnPress);
}

//check answer
function checkAns(idx){
    // console.log("current level",level);
    if(userSeq[idx] === gameSeq[idx])
    {
        //console.log("same value");
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else
    {
        h2.innerText=`Game Over! Your score was ${level} Press any key to restart`;
        document.querySelector("boy").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("boy").style.backgroundColor="white";
        },150);
        reset();
    }
}


function userFlash(btn){
    btn.classList.add("user-flash"); //add the flash class in all list of button which was created in html page 
    setTimeout(function(){
        btn.classList.remove("user-flash"); //remove all flash name class from all button
    },250);
}

function reset()
{
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


