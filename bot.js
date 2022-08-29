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


function joinFighters(user){
  if(firstFighter === ''){
    firstFighter = user;
    ComfyJS.Say('Birinci savaşçı: ' + firstFighter);
    console.log(firstFighter);
  }
  else if(secondFighter === ''){
    secondFighter = user;
    ComfyJS.Say('İkinci savaşçı: ' + secondFighter);
  }
  else{
    ComfyJS.Say('Bütün savaşçılar yerlerindeler, sıranı beklemelisin.');
  }
}

function clearFighters(){
  firstFighter = '';
  secondFighter = '';
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

