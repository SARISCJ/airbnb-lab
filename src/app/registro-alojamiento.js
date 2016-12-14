	var config = {
	  apiKey: "AIzaSyCqzEZoupk5SYmk2VudQ8I_Ewxb8w6Kl8I",
	  authDomain: "airbnb-79f45.firebaseapp.com",
	  databaseURL: "https://airbnb-79f45.firebaseio.com",
	  storageBucket: "airbnb-79f45.appspot.com",
	  messagingSenderId: "747603500897"
	  };
var numId = 0;

$(document).ready(function() {
	firebase.initializeApp(config);
	var bd = firebase.database();
	
	var lugar = bd.ref("alojamientos");

	lugar.on("value", function(snapshot) {
			numId = snapshot.val().length;
			console.log(numId);
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);

	});

	  $("#btn-reg-lugar").click(function(event) {
	  	event.preventDefault();
		firebase.database().ref('alojamiento/' + $("#codigo").val()).set({
		departamento:  $("#distrito").val(),
	  	direccion: $("#departamento").val(),
	  	imagenLugar: $("#imagen").val(),
	  	precio: $("#precio").val()
		  });
			alert("Registrado");
	});


});