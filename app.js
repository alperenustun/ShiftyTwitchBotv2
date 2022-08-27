// let myUser = document.getElementById('user');
// let secondUser = document.getElementById('secondUser');

ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (flags.broadcaster && command === "test") {
        console.log("!test was typed in chat");
    }
}
ComfyJS.Init("shiftyshifterr");


const chatElem = document.querySelector('.chat');

let chatUsers = [];

ComfyJS.onChat = (user, message, flags, self, extra) => {
    let newMessage;
    if(flags.broadcaster === true){
        newMessage = `
    <li class="chat__item">
        <h3 class="chat__item-username">${user} <img width="32px" src="images/broadcaster.png" alt="broadcaster"></h3>
        <p class="chat__item-message">${message}</p>
    </li>
    `
    }
    else{
        newMessage = `
    <li class="chat__item">
        <h3 class="chat__item-username">${user}</h3>
        <p class="chat__item-message">${message}</p>
    </li>
    `
    }
    
    if(chatUsers.length > 5){
        chatUsers.pop();
        chatUsers.unshift(newMessage);
    }
    else{
        chatUsers.push(newMessage);
    }
    
    chatElem.innerHTML = chatUsers;
    // console.log(extra);

    // if(chatUsers.find(element => element === user)){
    //     console.log("this guy is already exists!");
    // }
    // else{
    //     chatUsers.push(user);
    // }
    // secondUser.innerHTML = chatUsers;
}




