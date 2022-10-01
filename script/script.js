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
    secondPlayerEl = document.getElementById('secondPlayer')
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
let Comchoice = Randomchoice() 
function Gamemode(userchoice){
    if (userchoice === comChoice ){
        let scoreEl = document.getElementById('score')
        scoreEl.innerText = "Game is Draw"
    }
}
