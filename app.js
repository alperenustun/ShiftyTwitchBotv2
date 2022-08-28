const botTitle = document.getElementById('title');
ComfyJS.Init("shiftyshifterr");


const chatElem = document.querySelector('.chat-items');

let chatUsers = [];

ComfyJS.onChat = (user, message, flags, self, extra) => {
    chatMessager(flags, user, message, extra);

    console.log(extra.userColor);
}

ComfyJS.onJoin = ( user, self, extra ) =>{
    botTitle.innerHTML = `HELLO <span style="color: aqua;">${user}</span>`;
    setTimeout(() => {
        botTitle.innerHTML = `WELCOME TO <span style="color: aqua;">CYBERCITY</span>`;
    }, 25000);
}

ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (flags.broadcaster ) {
        switch (command) {
            case 'render':
                renderUsers();
                break;
            default:
                console.log('default');
                break;
        }
    }
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
        chatUsers.shift();
        chatUsers.push(newMessage);
    }
    else{
        chatUsers.push(newMessage);
    }
    
    chatElem.innerHTML = chatUsers;
}

async function getUsers() {
    let url = 'userDB.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <h2>${user.username} ${user.xp}</h2>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}








