`use strict`
//user need to give his/her name, name will be display on first player name 
// and for second player need to generate random name form the complayer names eg : ric
// if first player select any of the wepon computer need to come with counter wepon
// based on the rules need to show the winner 

const Firstplayer = document.getElementById('Playername')
const ConformPlayer = document.getElementById('firstname')
    
function randomcom(){
    let comName = ['Rick','Lee','Jack','Sam']
    geneRandom = Math.trunc(Math.random() * comName.length)
    comChoice = comName[geneRandom]
    return comChoice
}


function nameOfPlayer(){
    let name = Firstplayer.value;
    ConformPlayer.textContent = name 
    secondPlayerEl = document.getElementById('secondPlayer')
    secondPlayerEl.textContent = randomcom()
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
        return 'you won';
        }else if (computerChoice === "lizard") {
            return 'you won';}
        else {
        return "you are lost";
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "paper") {
        return 'draw';
        } else if (computerChoice === "rock") {
        return 'your lost';
        }else if (computerChoice === "spock") {
            return 'you won';}
            else {
        return "you are lost";
        }
    }
    else if (userChoice === "scissor") {
        if (computerChoice === "scissor") {
        return 'draw';
        } else if (computerChoice === "paper") {
        return 'you won';
        }else if (computerChoice === "lizard") {
            return 'you won';
        }else {
        return "you are lost";
        }
    }
    else if (userChoice ==='spock'){
        if (computerChoice === 'spock'){
            return 'draw';
        }
        else if (computerChoice === "scissor") {
            return 'your won';
        }
        else if (computerChoice === "rock") {
            return 'your won';
        } else {
            return "you are lose";
        }
    } 
    else if (userChoice ==='lizard'){
        if (computerChoice === 'lizard'){
            return 'draw';
        }
        else if (computerChoice === "spock") {
            return 'your won';
        }
        else if (computerChoice === "paper") {
            return 'your won';
        } else {
            return "you are lose";
        }
    } 
    
}
    


function Gamemode(wepons){
    const userChoice = wepons;
    const computerChoice = Randomchoice();
    const result = showResult(userChoice, computerChoice);
}
