`use strictly`
//user need to give his/her name, name will be display on first player name 
// and for second player need to generate random name form the complayer names eg : ric
// if first player select any of the wepon computer need to come with counter wepon
// based on the rules need to show the winner 

const Firstplayer = document.getElementById('Playername')
const ConformPlayer = document.getElementById('firstname')
    
function nameOFPlayer(){

    let Takename = Firstplayer.value
    ConformPlayer.innerText = Takename

}

nameOFPlayer()