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
  {
    username: 'Newly added boi',
    xp: 33
  },
  {
    username: 'secondly added gal',
    xp: 498
  }
]

const saveData = (user) =>{
  const finished = (error) =>{
      if(error){
          console.log(error);
          return
      }
  }

  const jsonData = JSON.stringify(user);
  fs.writeFile('newuserDB.json', jsonData, finished);
}



function characterAdd(user) {
  let userToAdd = {username: user, xp: 0}
  newUser.push(userToAdd);
  return newUser;
}

