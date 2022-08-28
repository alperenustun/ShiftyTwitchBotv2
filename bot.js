require('dotenv').config();
const ComfyJS = require("comfy.js");

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    ComfyJS.Say( "replying to !test" );
  }
}

ComfyJS.onJoin = ( user, self, extra ) => {
    ComfyJS.Say("Hoşgeldin " + user);
}

ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH, "shiftyshifterr" );