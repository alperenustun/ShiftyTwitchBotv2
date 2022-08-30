require('dotenv').config();
const ComfyJS = require("comfy.js");
const fs = require('fs');

ComfyJS.onCommand = (user, command, message, flags, extra) => {
  switch (command) {
    case 'join':
      saveData(user);
      break;
    case 'joinfight':
      joinFighters(user);
      break;
    case 'attack':
      attack(user);
      break;
    default:
      break;
  }
  if(flags.broadcaster === true){
    switch (command) {
      case 'clearfighters':
        clearFighters();
        break;
      default:
        break;
    }
  }
}

ComfyJS.onJoin = (user, self, extra) => {
  if (user === "artixkrieger") {
    ComfyJS.Say("/announce Artix bot online!");
  }
}

ComfyJS.Init(process.env.TWITCHUSER, process.env.OAUTH, "shiftyshifterr");



let firstFighter = '';
let secondFighter = '';
let firstFighterHealth = 0;
let secondFighterHealth = 0;
let firstPlayerTurn = 0;
let secondPlayerTurn = 0;



function attack(user){
  if(user === firstFighter && firstPlayerTurn === 1){
    firstPlayerTurn--;
    secondPlayerTurn++;
    console.log('first player vurdu');
  }
  else if(user === secondFighter && secondPlayerTurn === 1){
    firstPlayerTurn++;
    secondPlayerTurn--;
    console.log('second player vurdu');
  }
  else{
    ComfyJS.Say(`@${user} senin sıran değil!`);
  }
}

/********* JOINING THE FIGHT *******/
function joinFighters(user){
  if(firstFighter === ''){
    firstFighter = user;
    ComfyJS.Say('Birinci savaşçı: ' + firstFighter);
    firstFighterHealth = 100;
    firstPlayerTurn = 1;
    console.log(firstFighter);
  }
  else if(secondFighter === ''){
    secondFighter = user;
    ComfyJS.Say('İkinci savaşçı: ' + secondFighter);
    secondFighterHealth = 100;
  }
  else{
    ComfyJS.Say('Bütün savaşçılar yerlerindeler, sıranı beklemelisin.');
  }
}

function clearFighters(){
  firstFighter = '';
  secondFighter = '';
  let firstFighterHealth = 0;
  let secondFighterHealth = 0;
  ComfyJS.Say('Şuan kimse sırada değil.');
}



/* KATILMA İLE ALAKALI */
/* KATILMA İLE ALAKALI */
/* KATILMA İLE ALAKALI */
let newUser = secondFileRead();
const saveData = (user) => {
  const finished = (error) => {
    if (error) {
      console.log(error);
      return
    }
  }

  let reader = secondFileRead();

  let result = reader.find(item => item.username == user);
  if (result === undefined) {
    characterAdd(user);
    const jsonData = JSON.stringify(newUser);
    fs.writeFile('userDB.json', jsonData, finished);
    ComfyJS.Say(`@${user} Cybercity'e hoşgeldin.`);
  }
  else {
    console.log(result);
    ComfyJS.Say(`@${user} sen zaten Cybercity'de varsın.`);
  }
}

function secondFileRead() {
  let rawdata = fs.readFileSync('userDB.json');
  let data = JSON.parse(rawdata);
  return data;
}

function characterAdd(user) {
  let userToAdd = { username: user, xp: 0, coin: 0 }
  newUser.push(userToAdd);
  return newUser;
}

