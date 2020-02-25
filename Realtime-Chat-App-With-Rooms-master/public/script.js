const eventNames = {
  ['new_user']: 'new_user',
  ['room_created']: 'room_created',
  ['user_connected']: 'user_connected',
  ['send_chat_message']: 'send_chat_message',
  ['chat_message']: 'chat_message',
  ['user_disconnected']: 'user_disconnected'
};

const socket = io('http://localhost:3000');
const messageContainer = document.getElementById('message-container');
const roomContainer = document.getElementById('room-container');
const messageForm = document.getElementById('send-container');
//alert(messageForm);
const messageInput = document.getElementById('message-input');

if (messageForm != null) {//messageForm != null only when this script is loaded by room.ejs, not by index.ejs !
  const name = prompt('What is your name?');
  appendMessage('You joined');
  socket.emit(eventNames['new_user'], roomName, name);
  messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    appendMessage(`You: ${message}`);
    socket.emit(eventNames['send_chat_message'], roomName, message);
    messageInput.value = '';
  })
}

socket.on(eventNames['room_created'], room => {
  const roomElement = document.createElement('div');
  roomElement.innerText = room;
  const roomLink = document.createElement('a');
  roomLink.href = `/${room}`;
  roomLink.innerText = 'join';
  roomContainer.append(roomElement);
  roomContainer.append(roomLink);
});

socket.on(eventNames['chat_message'], data => {
  appendMessage(`${data.name}: ${data.message}`);
});

socket.on(eventNames['user_connected'], name => {
  appendMessage(`${name} connected`);
});

socket.on(eventNames['user_disconnected'], name => {
  appendMessage(`${name} disconnected`);
});

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}

function ntsTestThisIsNotBundled(){
  console.log("this_should_not_be_bundled");
}
