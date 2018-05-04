var firebase = require('firebase-admin'),
	config = require('./config.js'),
	usersRef = '',
	gymRef = ','
	users ={},
	io = {},
	room = '',
	gyms = {};

var firebaseServerClient = {

    initSetup : function (io, room){
        console.log("setting up firebase connection");
        this.io = io;
        this.room = room;

        fireApp = firebase.initializeApp({
            credential: firebase.credential.cert(config.serviceAccount),
            databaseURL: config.databaseURL
        });

        usersRef = fireApp.database().ref('Users');
        gymRef = fireApp.database().ref('Gyms');

        usersRef.on('value', function(snapshot) {
            users = [];
            snapshot.forEach(function(urlSnapshot) {
                users.push(urlSnapshot.val());
            });
            this.getUsers();
        }, this);

        gymRef.on('value', function(snapshot) {
            gyms = [];
            snapshot.forEach(function(urlSnapshot) {
                gyms.push(urlSnapshot.val());
            });
            this.getGyms();
        }, this);
    },

    getUsers : function(){
    	this.io.to(this.room).emit('Users', users);
    },

    getGyms : function(){
    	this.io.to(this.room).emit('Gyms', gyms);
    },

    addGym: function(gym){
        gymRef.push(gym);
    }

}

module.exports = firebaseServerClient;