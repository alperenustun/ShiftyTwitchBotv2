// let myUser = document.getElementById('user');
// let secondUser = document.getElementById('secondUser');

ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (flags.broadcaster ) {
        switch (command) {
            case 'test':
                console.log('test message');
                break;
            default:
                console.log('default');
                break;
        }
    }
}
ComfyJS.Init("shiftyshifterr");


const chatElem = document.querySelector('.chat-items');

let chatUsers = [];

ComfyJS.onChat = (user, message, flags, self, extra) => {
    chatMessager(flags, user, message, extra);

    console.log(extra.userColor);
}




function chatMessager(flags, user, message, extra){
    let newMessage;
    if(flags.broadcaster === true){
        newMessage = `
    <li class="chat__item">
        <h3 class="chat__item-username" style="color:${extra.userColor}"><img style="width: 32px; margin-right: 15px" src="images/broadcaster.png" alt="broadcaster">${user}</h3>
        <p class="chat__item-message">${message}</p>
    </li>
    `
    }
    else if(flags.mod === true){
        newMessage = `
    <li class="chat__item">
        <h3 class="chat__item-username" style="color:${extra.userColor}"><img style="width: 32px; margin-right: 15px" src="images/sword2.png" alt="moderator">${user}</h3>
        <p class="chat__item-message">${message}</p>
    </li>
    `
    }
    else{
        newMessage = `
    <li class="chat__item">
        <h3 class="chat__item-username" style="color:${extra.userColor}"><img style="width: 32px; margin-right: 15px;" src="images/humanoid.png" alt="moderator">${user}</h3>
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
}




