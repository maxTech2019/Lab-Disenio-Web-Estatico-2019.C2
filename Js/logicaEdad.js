function esMayorEdad() 
{
	//alert("Función en Javascript");
	n = new Date ();
	var fnacimiento = document.miform.bnacimiento.value;
	var nombre = document.miform.txtnombre.value;
	var factual = n.getFullYear();
	var edad = factual - fnacimiento;
	if(edad >=18)
	{
		alert (nombre +" eres mayor de edad");
	}
	else
	{
		alert (nombre + " eres menor de edad");
	}
	//alert ("Su edad actual es: "+ edad);
}