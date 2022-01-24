var user=0;
var computer_score=0;
document.getElementById('user').innerHTML=user;
document.getElementById('computer').innerHTML=computer_score;
const Rock = document.querySelector('.Rock');
const Paper = document.querySelector('.Paper');
const Scissor = document.querySelector('.Scissor');
Rock.addEventListener('click', greet.bind(this,'Rock'));
Paper.addEventListener('click', greet.bind(this,'Paper'));
Scissor.addEventListener('click', greet.bind(this,'Scissor'));
function greet(x){
    computer=computer_img()
    
    img_mapping(x);
        
    console.log(computer);
    if (x==computer ){
        console.log("Tie")
    }else if(x!=computer && x=='Rock'){
        if(computer=='Paper'){
            computer_score++;
        console.log("Computer Win");
        }
        else{
            user++;
            console.log("User Win");
        }
    }
    else if(x!=computer && x=='Paper')
    { 
        if(computer=='Scissor')
        {
            computer_score++;
        console.log("Computer Win");
        }
        else{
            user++;
            console.log("User Win");
        }
    }
    else if(x!=computer && x=='Scissor'){
        if(computer=='Rock')
        {
            computer_score++;
        console.log("Computer Win");
        }
        else{
            user++;
            console.log("User Win");
        }
    }

        console.log(user);
        document.getElementById('user').innerHTML=user;
        console.log(computer_score);
        document.getElementById('computer').innerHTML=computer_score;
        if(user==5)
        {
            document.getElementById('winner').innerHTML='User';
            document.getElementById("button").disabled = true;
            document.getElementById("button1").disabled = true;
            document.getElementById("button2").disabled = true;
        }
        else if(computer_score==5){
            document.getElementById('winner').innerHTML='Computer';
            document.getElementById("button").disabled = true;
            document.getElementById("button1").disabled = true;
            document.getElementById("button2").disabled = true;
        }
}

    function img_mapping(x){
    if(x=='Rock')
    {
        let img = document.createElement("img");
        img.src = "images/rock.png";
        img.style.border = "10px solid orange";
        img.style.height="100px"
        img.style.borderRadius = "10px";
        let div=document.getElementById('img');
        div.replaceChild(img,div.childNodes[0]);
        
    }   
    else if (x=='Paper')
    {
        let img = document.createElement("img");
        img.src = "images/paper.png";

        img.style.border = "10px solid orange";
        img.style.height="100px"
        img.style.borderRadius = "10px";
        let div=document.getElementById('img');
        div.replaceChild(img,div.childNodes[0]);
    } 
    else{
        let img = document.createElement("img");
        img.src = "images/scissor.png";

        img.style.border = "10px solid orange";
        img.style.height="100px"
        img.style.borderRadius = "10px";
        let div=document.getElementById('img');
        div.replaceChild(img,div.childNodes[0]);
    }
}



function computerPlay() {
    let computerRandomChoices = ['Rock', 'Paper', 'Scissor'];
    let getRandomChoices = Math.floor(Math.random() * computerRandomChoices.length)
    return computerRandomChoices[getRandomChoices];
}
function computer_img(){
    let computer=computerPlay();
    if(computer=='Rock')
    {
        let img1 = document.createElement("img");
        img1.src = "images/rock.png";
        img1.style.border = "10px solid orange";
        img1.style.height="100px"
        img1.style.borderRadius = "10px";
        let div1=document.getElementById('img1');
        div1.replaceChild(img1,div1.childNodes[0]);
        
    }   
    else if (computer=='Paper')
    {
        let img1 = document.createElement("img");
        img1.src = "images/paper.png";

        img1.style.border = "10px solid orange";
        img1.style.height="100px"
        img1.style.borderRadius = "10px";
        let div1=document.getElementById('img1');
        div1.replaceChild(img1,div1.childNodes[0]);
    } 
    else{
        let img1 = document.createElement("img");
        img1.src = "images/scissor.png";

        img1.style.border = "10px solid orange";
        img1.style.height="100px"
        img1.style.borderRadius = "10px";
        let div1=document.getElementById('img1');
        div1.replaceChild(img1,div1.childNodes[0]);
    }
    return computer;
}

// function myFunction() {
//     document.getElementById("myForm").reset();
//   }