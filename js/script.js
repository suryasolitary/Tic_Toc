const boxs=document.querySelectorAll('.box');
const Status=document.querySelector('#showlevel');
const btnRestart= document.querySelector('#restart');
const x= "<img src='../img/x.png'>";
const o= "<img src='../img/o.png'>";
console.log(x)




const Win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let options = ["","","","","","","","",""];
let CurrentPlayer=x;
let Player ="X"
let running = false;
inint();

function inint(){
    boxs.forEach(box=>{
        box.addEventListener('click',boxClick)
    });
    btnRestart.addEventListener('click',restart)
    Status.textContent=`${Player} Your turn`
    running=true;
    
}

function boxClick(){
     const index= (this.dataset.index);
     if(options[index]!="" || !running){
        return 
    }
    UpdateBox(this,index)
    CheckWinner();
}
function UpdateBox(box,index){
    options[index]=Player;
    box.innerHTML=CurrentPlayer;

}
function ChangePlayer(){
   Player=(Player=='X') ? "O" : "X"
   console.log(Player);
   Status.textContent=`${Player} Your Turn `;
   CurrentPlayer=(CurrentPlayer==x) ? o : x;


}

function CheckWinner(){
    isVictory=false;
    for(i=0;i<Win.length;i++){
        let ConditionChecking = Win[i];
        let box1=options[ConditionChecking[0]]
        let box2=options[ConditionChecking[1]]
        let box3=options[ConditionChecking[2]]
        if(box1=="" || box2=="" || box3==""){
            continue
        }
        if(box1==box2 && box2==box3){
            isVictory=true;
            boxs[ConditionChecking[0]].classList.add('won');
            boxs[ConditionChecking[1]].classList.add('won');
            boxs[ConditionChecking[2]].classList.add('won');
        }
    }
        if(isVictory){ 
            Status.textContent=`${Player} You Won `
            running=false;
        }
        else if(!options.includes("")){
           Status.textContent= `Game Draw`;
           running = false;
        }else{
            ChangePlayer();
        }

}
function restart(){
    options = ["","","","","","","","",""];
    CurrentPlayer=x;
    Player ="X"
    running = true;
    Status.textContent=`${Player} Your turn`
    boxs.forEach(box=>{
        box.innerHTML=""
        box.classList.remove('won');
    })
}