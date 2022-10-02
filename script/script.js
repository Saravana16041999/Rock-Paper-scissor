`use strict`
//user need to give his/her name, name will be display on first player name 
// and for second player need to generate random name form the complayer names eg : ric
// if first player select any of the wepon computer need to come with counter wepon
// based on the rules need to show the winner 

const Firstplayer = document.getElementById('Playername')
const ConformPlayer = document.getElementById('firstname')
const secondPlayerEl = document.getElementById('secondPlayer')    

function randomcom(){
    let comName = ['Rick','Lee','Jack','Sam']
    geneRandom = Math.trunc(Math.random() * comName.length)
    comChoice = comName[geneRandom]
    secondPlayerEl.textContent = comChoice
}



function nameOfPlayer(){
    let name = Firstplayer.value;
    ConformPlayer.textContent = name 
    randomcom()
}


nameOfPlayer()
function Randomchoice(){
    let comName = ['paper','scissor','rock','lizard','spock']
    geneRandom = Math.trunc(Math.random() * comName.length)
    comChoice = comName[geneRandom]
    return comChoice
}

Comchoice = Randomchoice() 


function showResult(userChoice, computerChoice) {
    // comparing user and computer answers
    if (userChoice === "rock") {
        if (computerChoice === "rock") {
        return 'draw';
        } else if (computerChoice == "scissor") {
        return 'won';
        }else if (computerChoice === "lizard") {
            return 'won';}
        else {
        return "lost";
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "paper") {
        return 'draw';
        } else if (computerChoice === "rock") {
        return 'lost';
        }else if (computerChoice === "spock") {
            return 'won';}
            else {
        return "lost";
        }
    }
    else if (userChoice === "scissor") {
        if (computerChoice === "scissor") {
        return 'draw';
        } else if (computerChoice === "paper") {
        return 'won';
        }else if (computerChoice === "lizard") {
            return 'won';
        }else {
        return "lost";
        }
    }
    else if (userChoice ==='spock'){
        if (computerChoice === 'spock'){
            return 'draw';
        }
        else if (computerChoice === "scissor") {
            return 'won';
        }
        else if (computerChoice === "rock") {
            return 'won';
        } else {
            return "lost";
        }
    } 
    else if (userChoice ==='lizard'){
        if (computerChoice === 'lizard'){
            return 'draw';
        }
        else if (computerChoice === "spock") {
            return 'won';
        }
        else if (computerChoice === "paper") {
            return 'won';
        } else {
            return "lost";
        }
    } 
    
}
let computerEl = document.getElementById('Compscore')
let playerEl = document.getElementById('Plscore')
let scoreEL = document.getElementById('score')

let userscore = 0
let comscore = 0
let drawel = 0 
function showScore(result){
    
    if(result === 'won'){
        userscore++
        playerEl.textContent = userscore
        scoreEL.textContent = `you won the match`
    }else  if(result === 'lost'){
        comscore++
        computerEl.textContent = comscore
        scoreEL.textContent = `computer won the match`
    }else{
        scoreEL.textContent = 'draw'
    }
}

function Gamemode(wepons){
    const userChoice = wepons;
    const computerChoice = Randomchoice();
    const result = showResult(userChoice, computerChoice);
    showScore(result)
}
