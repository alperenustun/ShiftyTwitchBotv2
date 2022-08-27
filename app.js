// let myUser = document.getElementById('user');
// let secondUser = document.getElementById('secondUser');

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( flags.broadcaster && command === "test" ) {
    console.log( "!test was typed in chat" );
  }
}
ComfyJS.Init( "shiftyshifterr" );


const chatElem = document.querySelector('.chat');

let chatUsers = [];

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    console.log(extra);
    
    // console.log(extra);
    
    // if(chatUsers.find(element => element === user)){
    //     console.log("this guy is already exists!");
    // }
    // else{
    //     chatUsers.push(user);
    // }
    // secondUser.innerHTML = chatUsers;
}




