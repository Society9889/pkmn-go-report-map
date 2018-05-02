var room = "pkmnroom",
	users = 0;
	firebase = require('./firebase.js');

module.exports = function (io) {

	//set up the connection to firebase
	firebase.initSetup(io, room);

	io.on('connection', function (socket) {
		socket.join(room);
		users+=1;

		firebase.getUsers();

		socket.on('disconnect', function(){
			console.log("User disconnected");
			users-=1;
		});

	});
}

