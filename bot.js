require('dotenv').config();
const ComfyJS = require("comfy.js");
const fs = require('fs');

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  switch (command) {
    case 'join':
      ComfyJS.Say( `/me ${user} joined the database` );
      saveData(characterAdd(user));
      break;
    default:
      break;
  }
}

ComfyJS.onJoin = ( user, self, extra ) => {
    if(user === "artixkrieger"){
      ComfyJS.Say("/announce Artix bot online!");
    }
    else{
      ComfyJS.Say("Hoşgeldin " + user);
    }
}

ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH, "shiftyshifterr" );

const newUser = [
]

const saveData = (user) =>{
  const finished = (error) =>{
      if(error){
          console.log(error);
          return
      }
  }

  const jsonData = JSON.stringify(user);
  fs.writeFile('userDB.json', jsonData, finished);
}

const readFile = () => {
  let rawdata = fs.readFileSync('userDB.json');
  let data = JSON.parse(rawdata);
  //console.log(data[0].username);

  for(let i = 0; i < data.length; i++){
    console.log(data[i].username);
  }
}

readFile();

function characterAdd(user) {
  let userToAdd = {username: user, xp: 0, coin: 0}
  newUser.push(userToAdd);
  return newUser;
}

