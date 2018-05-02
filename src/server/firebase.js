var firebase = require('firebase-admin'),
	config = require('./config.js'),
	ref = '',
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

        ref = fireApp.database().ref('Users'),

        //read the past builds from firebase
        ref.on('value', function(snapshot) {
            users = [];
            snapshot.forEach(function(urlSnapshot) {
                users.push(urlSnapshot.val());
            });
            this.getUsers();
        }, this);
    },

    getUsers : function(){
    	this.io.to(this.room).emit('Users', users);
    }

}

module.exports = firebaseServerClient;