

var cargarPagina=function(){
	$('#modal1').modal();
	$("#btn-add").click(imprimir);
}



var imprimir= function(){
	var nombre=$("#first_name").val();
	var apellido=$("#last_name").val();	
	var numero=$("#numberCell").val();
	var email=$("#email").val();
	var seccion=$("#posts");
	

	var contenedor= $("<div></div>");
	var postName=$("<p>"+"Nombre:"+nombre+"</p>");
	var postApellido=$("<p>"+"Apellido:"+apellido+"</p>");
	var postNumero=$("<p>"+"Número:"+numero+"</p>");
	var postEmail=$("<p>"+"E-mail:"+email+"</p>");
	
	seccion.append(contenedor);
	contenedor.append(postName);
	contenedor.append(postApellido);
	contenedor.append(postNumero);
	contenedor.append(postEmail);

	nombre.val('');
	apellido.val('');
	

};




  	

$(document).ready(cargarPagina);



