$(document).ready(function(){
	$("#filtro").click(apareceExtraFiltro);
	$(".extra-filtro").hide();
	$(".bye-extra-filtro").click(desapareceExtraFiltro);
	$("label").click(habilitarBoton);
	function apareceExtraFiltro(){
		$(".extra-filtro").fadeIn();
	};
	function desapareceExtraFiltro(){
		$(".extra-filtro").hide();
	};
	function habilitarBoton(){
		$("#habilitar-boton").removeAttr('disabled');	
	};
});


				       