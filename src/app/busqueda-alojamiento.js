var templateLugar = 	'<div class="col-lg-4">'+
				'<img src={{imagenLugar}} class="img-responsive" alt="">'+
					'<div class="row">'+
						'<div class="col-lg-7">'+
							'<h5>Distrito :<span id="distrito">{{distrito}}</span></h5>'+
							'<h5>Departamento :<span id="departamento">{{departamento}}</span></h5>'+
						'</div>'+
						'<div class="col-lg-5">'+
							'<h5>S/. <span id="precio" >{{precio}}</span></h5>'+
						'</div>'+
				'</div>'+
			'</div>';

var config = {
	  apiKey: "AIzaSyCqzEZoupk5SYmk2VudQ8I_Ewxb8w6Kl8I",
	  authDomain: "airbnb-79f45.firebaseapp.com",
	  databaseURL: "https://airbnb-79f45.firebaseio.com",
	  storageBucket: "airbnb-79f45.appspot.com",
	  messagingSenderId: "747603500897"
	  };

firebase.initializeApp(config);
	var bd = firebase.database();
	var lugar = bd.ref("alojamiento");


$(document).ready(function() {
	
	lugar.on("value", function(snapshot) {
		var lugares = "";
		$.each(snapshot.val(), function (index, value) {
			lugares += templateLugar.replace("{{imagenLugar}}", value.imagenLugar)
									.replace("{{distrito}}", value.departamento)
									.replace("{{departamento}}", value.direccion)
									.replace("{{precio}}", value.precio);
		});
		$("#resultado").append(lugares);    
	}, function (errorObject) {
	  console.log("Error: " + errorObject.code);
	});



	$("#btn-reg-lugar").click(function(event) {
		event.preventDefault();
		$("#resultado").hide(); 
		$("#resultadoBusqueda").children().remove(); 
	 	var lugares = "";

		lugar.orderByChild("departamento").equalTo($("#busqueda").val()).on("value", function(snapshot) {
		  	console.log(snapshot.val());
			var lugares= "";
			$.each(snapshot.val(), function (index, value) {
				lugares += templateLugar.replace("{{imagenLugar}}", value.imagenLugar)
										.replace("{{distrito}}", value.departamento)
										.replace("{{departamento}}", value.direccion)
										.replace("{{precio}}", value.precio);
			});
		$("#resultadoBusqueda").append(lugares);  
		}, function (errorObject) {
		  console.log("Error: " + errorObject.code);
		});

	});


});


