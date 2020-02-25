/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src-server/server-ts.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src-server/server-ts.ts":
/*!*********************************!*\
  !*** ./src-server/server-ts.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const eventNames = {
    new_user: 'new_user',
    room_created: 'room_created',
    user_connected: 'user_connected',
    send_chat_message: 'send_chat_message',
    chat_message: 'chat_message',
    user_disconnected: 'user_disconnected'
};
const express = __webpack_require__(/*! express */ "express");
const app = express();
const server = __webpack_require__(/*! http */ "http").createServer(app); //AKA http.
const io = __webpack_require__(/*! socket.io */ "socket.io")(server);
app.set('views', './views'); //set view folder.
app.set('view engine', 'ejs'); //set view engine.
app.use(express.static('public')); //use `public` folder to serve client scripts (for accessing from views).
app.use(express.urlencoded({ extended: true }));
class User {
}
class Room {
}
const rooms = {};
app.get('/', (req, res) => {
    res.render('index', { rooms: rooms });
});
app.post('/create-room', (req, res) => {
    if (rooms[req.body.room] != null) {
        return res.redirect('/');
    }
    rooms[req.body.room] = { users: {} };
    res.redirect(req.body.room);
    // Send message that new room was created
    io.emit(eventNames.room_created, req.body.room);
});
app.get('/:room', (req, res) => {
    if (rooms[req.params.room] == null) {
        return res.redirect('/');
    }
    res.render('room', { roomName: req.params.room });
});
server.listen(3000);
io.on('connection', socket => {
    console.log(`someone connected, socket.id=${socket.id}`);
    socket.on(eventNames.new_user, (room, name) => {
        socket.join(room); //join THIS user to the room (forever?)
        rooms[room].users[socket.id] = name; //create new user info in user list in room info. The id of this user is socket.id .
        socket.to(room).broadcast.emit(eventNames.user_connected, name); //tell everyone else in this room about this new user.
    });
    socket.on(eventNames.send_chat_message, (room, message) => {
        if (message == 'secret1') {
            console.log(`secret message: ${message}`);
        }
        socket.to(room).broadcast.emit(eventNames.chat_message, { message: message, name: rooms[room].users[socket.id] }); /*tell others
                                                                                            in this room about the new message.*/
    });
    socket.on('disconnect', () => {
        getUserRooms(socket).forEach(room => {
            socket.to(room).broadcast.emit(eventNames.user_disconnected, rooms[room].users[socket.id]); /*tell others
                                                                                            in this room that THIS user leave.*/
            delete rooms[room].users[socket.id]; //remove user from room info.
        });
    });
});
function getUserRooms(socket) {
    return Object.entries(rooms).reduce((names, [name, room]) => {
        if (room.users[socket.id] != null)
            names.push(name);
        return names;
    }, []);
}
//test crash:
app.get('/crash', (req, res) => {
    console.log("get cras");
    setTimeout(() => {
        throw new Error("NTS: Intentional Error !");
    });
});
//try crash 2:
let x;
x = 1;
console.log(x / 0);
//try crash 3:
//throw new Error("my error !");
//ts playground:
class Car {
}
// try nameof :
const nameof = (name) => name;
let somename = nameof("userst");
console.log(somename);
let somename2 = nameof("isSlow");
console.log(somename2);
let somename3 = nameof("not-in-use-yet");
console.log(somename3);


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLXNlcnZlci9zZXJ2ZXItdHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRkEsTUFBTSxVQUFVLEdBQUc7SUFDZixRQUFRLEVBQUUsVUFBVTtJQUNwQixZQUFZLEVBQUUsY0FBYztJQUM1QixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxZQUFZLEVBQUUsY0FBYztJQUM1QixpQkFBaUIsRUFBRSxtQkFBbUI7Q0FDekMsQ0FBQztBQUVGLE1BQU0sT0FBTyxHQUFHLG1C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LENBQU0sZ0JBQWdCLENBQUMsQ0FBQztBQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUN2SHZCLG9DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjLXNlcnZlci9zZXJ2ZXItdHMudHNcIik7XG4iLCJleHBvcnQge307XHJcblxyXG5jb25zdCBldmVudE5hbWVzID0ge1xyXG4gICAgbmV3X3VzZXI6ICduZXdfdXNlcicsXHJcbiAgICByb29tX2NyZWF0ZWQ6ICdyb29tX2NyZWF0ZWQnLFxyXG4gICAgdXNlcl9jb25uZWN0ZWQ6ICd1c2VyX2Nvbm5lY3RlZCcsXHJcbiAgICBzZW5kX2NoYXRfbWVzc2FnZTogJ3NlbmRfY2hhdF9tZXNzYWdlJyxcclxuICAgIGNoYXRfbWVzc2FnZTogJ2NoYXRfbWVzc2FnZScsXHJcbiAgICB1c2VyX2Rpc2Nvbm5lY3RlZDogJ3VzZXJfZGlzY29ubmVjdGVkJ1xyXG59O1xyXG5cclxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBzZXJ2ZXIgPSByZXF1aXJlKCdodHRwJykuY3JlYXRlU2VydmVyKGFwcCk7Ly9BS0EgaHR0cC5cclxuY29uc3QgaW8gPSByZXF1aXJlKCdzb2NrZXQuaW8nKShzZXJ2ZXIpO1xyXG5cclxuYXBwLnNldCgndmlld3MnLCAnLi92aWV3cycpOy8vc2V0IHZpZXcgZm9sZGVyLlxyXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdlanMnKTsvL3NldCB2aWV3IGVuZ2luZS5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpOy8vdXNlIGBwdWJsaWNgIGZvbGRlciB0byBzZXJ2ZSBjbGllbnQgc2NyaXB0cyAoZm9yIGFjY2Vzc2luZyBmcm9tIHZpZXdzKS5cclxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcblxyXG5jbGFzcyBVc2Vye1xyXG59XHJcbmNsYXNzIFJvb217XHJcbiAgICB1c2VyczogUmVjb3JkPHN0cmluZywgVXNlcj5cclxufVxyXG5jb25zdCByb29tczogUmVjb3JkPHN0cmluZywgUm9vbT4gPSB7IH07XHJcblxyXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXMucmVuZGVyKCdpbmRleCcsIHsgcm9vbXM6IHJvb21zIH0pXHJcbn0pO1xyXG5cclxuaW50ZXJmYWNlIE15UmVxdWVzdDxUPiBleHRlbmRzIFJlcXVlc3Qge1xyXG4gICAgYm9keTogUmVhZGFibGVTdHJlYW08VWludDhBcnJheT4gJiBUXHJcbn1cclxuYXBwLnBvc3QoJy9jcmVhdGUtcm9vbScsIChyZXE6IE15UmVxdWVzdDx7cm9vbTogYW55fT4sIHJlcykgPT4ge1xyXG4gICAgaWYgKHJvb21zW3JlcS5ib2R5LnJvb21dICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvJylcclxuICAgIH1cclxuICAgIHJvb21zW3JlcS5ib2R5LnJvb21dID0geyB1c2Vyczoge30gfTtcclxuICAgIHJlcy5yZWRpcmVjdChyZXEuYm9keS5yb29tKTtcclxuICAgIC8vIFNlbmQgbWVzc2FnZSB0aGF0IG5ldyByb29tIHdhcyBjcmVhdGVkXHJcbiAgICBpby5lbWl0KGV2ZW50TmFtZXMucm9vbV9jcmVhdGVkLCByZXEuYm9keS5yb29tKVxyXG59KTtcclxuXHJcbmFwcC5nZXQoJy86cm9vbScsIChyZXEsIHJlcykgPT4ge1xyXG4gICAgaWYgKHJvb21zW3JlcS5wYXJhbXMucm9vbV0gPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy8nKVxyXG4gICAgfVxyXG4gICAgcmVzLnJlbmRlcigncm9vbScsIHsgcm9vbU5hbWU6IHJlcS5wYXJhbXMucm9vbSB9KVxyXG59KTtcclxuXHJcbnNlcnZlci5saXN0ZW4oMzAwMCk7XHJcblxyXG5pby5vbignY29ubmVjdGlvbicsIHNvY2tldCA9PiB7Ly9mb3IgZWFjaCBuZXcgc29ja2V0KGNvbm5lY3Rpb24pLCBydW4gdGhpczpcclxuICAgIGNvbnNvbGUubG9nKGBzb21lb25lIGNvbm5lY3RlZCwgc29ja2V0LmlkPSR7c29ja2V0LmlkfWApO1xyXG4gICAgc29ja2V0Lm9uKGV2ZW50TmFtZXMubmV3X3VzZXIsIChyb29tLCBuYW1lKSA9PiB7LyogYXNzaWduIGhhbmRsZXIgb24gdGhpcyBzb2NrZXQgb24gYG5ld191c2VyYCBldmVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgd2hlbiBUSElTIHVzZXIgKEFLQSB0aGlzIHNvY2tldC9jb25uZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkIHJvb20uZWpzIChhZnRlciBwcmVzc2luZyBqb2luaW5nIGEgcm9vbSBPUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQgYSByb29tIEZST00gaW5kZXguZWpzKSAqL1xyXG4gICAgICAgIHNvY2tldC5qb2luKHJvb20pOy8vam9pbiBUSElTIHVzZXIgdG8gdGhlIHJvb20gKGZvcmV2ZXI/KVxyXG4gICAgICAgIHJvb21zW3Jvb21dLnVzZXJzW3NvY2tldC5pZF0gPSBuYW1lOy8vY3JlYXRlIG5ldyB1c2VyIGluZm8gaW4gdXNlciBsaXN0IGluIHJvb20gaW5mby4gVGhlIGlkIG9mIHRoaXMgdXNlciBpcyBzb2NrZXQuaWQgLlxyXG4gICAgICAgIHNvY2tldC50byhyb29tKS5icm9hZGNhc3QuZW1pdChldmVudE5hbWVzLnVzZXJfY29ubmVjdGVkLCBuYW1lKTsvL3RlbGwgZXZlcnlvbmUgZWxzZSBpbiB0aGlzIHJvb20gYWJvdXQgdGhpcyBuZXcgdXNlci5cclxuICAgIH0pO1xyXG4gICAgc29ja2V0Lm9uKGV2ZW50TmFtZXMuc2VuZF9jaGF0X21lc3NhZ2UsIChyb29tLCBtZXNzYWdlKSA9PiB7Ly93aGVuIFRISVMgdXNlciBzZW5kIGhpcyBjaGF0IG1lc3NhZ2UuXHJcbiAgICAgICAgaWYobWVzc2FnZSA9PSAnc2VjcmV0MScpe2NvbnNvbGUubG9nKGBzZWNyZXQgbWVzc2FnZTogJHttZXNzYWdlfWApO31cclxuICAgICAgICBzb2NrZXQudG8ocm9vbSkuYnJvYWRjYXN0LmVtaXQoZXZlbnROYW1lcy5jaGF0X21lc3NhZ2UsIHsgbWVzc2FnZTogbWVzc2FnZSwgbmFtZTogcm9vbXNbcm9vbV0udXNlcnNbc29ja2V0LmlkXSB9KS8qdGVsbCBvdGhlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbiB0aGlzIHJvb20gYWJvdXQgdGhlIG5ldyBtZXNzYWdlLiovXHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgICBnZXRVc2VyUm9vbXMoc29ja2V0KS5mb3JFYWNoKHJvb20gPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQudG8ocm9vbSkuYnJvYWRjYXN0LmVtaXQoZXZlbnROYW1lcy51c2VyX2Rpc2Nvbm5lY3RlZCwgcm9vbXNbcm9vbV0udXNlcnNbc29ja2V0LmlkXSk7Lyp0ZWxsIG90aGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIHRoaXMgcm9vbSB0aGF0IFRISVMgdXNlciBsZWF2ZS4qL1xyXG4gICAgICAgICAgICBkZWxldGUgcm9vbXNbcm9vbV0udXNlcnNbc29ja2V0LmlkXTsvL3JlbW92ZSB1c2VyIGZyb20gcm9vbSBpbmZvLlxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJSb29tcyhzb2NrZXQpIHtcclxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhyb29tcykucmVkdWNlKChuYW1lcywgW25hbWUsIHJvb21dKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvb20udXNlcnNbc29ja2V0LmlkXSAhPSBudWxsKSBuYW1lcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgIHJldHVybiBuYW1lcztcclxuICAgIH0sIFtdKVxyXG59XHJcblxyXG5cclxuLy90ZXN0IGNyYXNoOlxyXG5hcHAuZ2V0KCcvY3Jhc2gnLCAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0IGNyYXNcIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTlRTOiBJbnRlbnRpb25hbCBFcnJvciAhXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vdHJ5IGNyYXNoIDI6XHJcbmxldCB4Om51bWJlcjtcclxueCA9IDE7XHJcbmNvbnNvbGUubG9nKHgvMCk7XHJcblxyXG5cclxuLy90cnkgY3Jhc2ggMzpcclxuLy90aHJvdyBuZXcgRXJyb3IoXCJteSBlcnJvciAhXCIpO1xyXG5cclxuXHJcbi8vdHMgcGxheWdyb3VuZDpcclxuY2xhc3MgQ2Fye1xyXG4gICAgdXNlcnN0OiBzdHJpbmdbXTtcclxuICAgIHJvb214OiBudW1iZXI7XHJcbiAgICBpc1Nsb3c6IGJvb2xlYW47XHJcbiAgICBbXCJub3QtaW4tdXNlLXlldFwiXTogYm9vbGVhbjtcclxufVxyXG4vLyB0cnkgbmFtZW9mIDpcclxuY29uc3QgbmFtZW9mID0gPFQ+KG5hbWU6IEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPik6IHN0cmluZyA9PiBuYW1lO1xyXG5sZXQgc29tZW5hbWUgPSBuYW1lb2Y8Q2FyPihcInVzZXJzdFwiKTtcclxuY29uc29sZS5sb2coc29tZW5hbWUpO1xyXG5sZXQgc29tZW5hbWUyID0gbmFtZW9mPENhcj4oXCJpc1Nsb3dcIik7XHJcbmNvbnNvbGUubG9nKHNvbWVuYW1lMik7XHJcbmxldCBzb21lbmFtZTMgPSBuYW1lb2Y8Q2FyPihcIm5vdC1pbi11c2UteWV0XCIpO1xyXG5jb25zb2xlLmxvZyhzb21lbmFtZTMpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=