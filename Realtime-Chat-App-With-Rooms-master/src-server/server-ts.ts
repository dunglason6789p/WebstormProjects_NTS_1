export {};

const eventNames = {
    new_user: 'new_user',
    room_created: 'room_created',
    user_connected: 'user_connected',
    send_chat_message: 'send_chat_message',
    chat_message: 'chat_message',
    user_disconnected: 'user_disconnected'
};

const express = require('express');
const app = express();
const server = require('http').createServer(app);//AKA http.
const io = require('socket.io')(server);

app.set('views', './views');//set view folder.
app.set('view engine', 'ejs');//set view engine.
app.use(express.static('public'));//use `public` folder to serve client scripts (for accessing from views).
app.use(express.urlencoded({ extended: true }));

class User{
}
class Room{
    users: Record<string, User>
}
const rooms: Record<string, Room> = { };

app.get('/', (req, res) => {
    res.render('index', { rooms: rooms })
});

interface MyRequest<T> extends Request {
    body: ReadableStream<Uint8Array> & T
}
app.post('/create-room', (req: MyRequest<{room: any}>, res) => {
    if (rooms[req.body.room] != null) {
        return res.redirect('/')
    }
    rooms[req.body.room] = { users: {} };
    res.redirect(req.body.room);
    // Send message that new room was created
    io.emit(eventNames.room_created, req.body.room)
});

app.get('/:room', (req, res) => {
    if (rooms[req.params.room] == null) {
        return res.redirect('/')
    }
    res.render('room', { roomName: req.params.room })
});

server.listen(3000);

io.on('connection', socket => {//for each new socket(connection), run this:
    console.log(`someone connected, socket.id=${socket.id}`);
    socket.on(eventNames.new_user, (room, name) => {/* assign handler on this socket on `new_user` event.
                                                                            This is when THIS user (AKA this socket/connection)
                                                                            loaded room.ejs (after pressing joining a room OR
                                                                             created a room FROM index.ejs) */
        socket.join(room);//join THIS user to the room (forever?)
        rooms[room].users[socket.id] = name;//create new user info in user list in room info. The id of this user is socket.id .
        socket.to(room).broadcast.emit(eventNames.user_connected, name);//tell everyone else in this room about this new user.
    });
    socket.on(eventNames.send_chat_message, (room, message) => {//when THIS user send his chat message.
        if(message == 'secret1'){console.log(`secret message: ${message}`);}
        socket.to(room).broadcast.emit(eventNames.chat_message, { message: message, name: rooms[room].users[socket.id] })/*tell others
                                                                                            in this room about the new message.*/
    });
    socket.on('disconnect', () => {
        getUserRooms(socket).forEach(room => {
            socket.to(room).broadcast.emit(eventNames.user_disconnected, rooms[room].users[socket.id]);/*tell others
                                                                                            in this room that THIS user leave.*/
            delete rooms[room].users[socket.id];//remove user from room info.
        })
    })
});

function getUserRooms(socket) {
    return Object.entries(rooms).reduce((names, [name, room]) => {
        if (room.users[socket.id] != null) names.push(name);
        return names;
    }, [])
}


//test crash:
app.get('/crash', (req, res) => {
    console.log("get cras");
    setTimeout(()=>{
        throw new Error("NTS: Intentional Error !");
    });
});


//try crash 2:
let x:number;
x = 1;
console.log(x/0);


//try crash 3:
//throw new Error("my error !");


//ts playground:
class Car{
    userst: string[];
    roomx: number;
    isSlow: boolean;
    ["not-in-use-yet"]: boolean;
}
// try nameof :
const nameof = <T>(name: Extract<keyof T, string>): string => name;
let somename = nameof<Car>("userst");
console.log(somename);
let somename2 = nameof<Car>("isSlow");
console.log(somename2);
let somename3 = nameof<Car>("not-in-use-yet");
console.log(somename3);
