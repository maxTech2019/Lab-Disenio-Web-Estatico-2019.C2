function esPerfecto()
{
	//Capturando datos del usuario
	var num1 = parseInt(document.frmViernes.cNumber1.value);
	//var num1 = parseInt(document.getElementsByName("cNumber1"));
	var num2 = parseInt(document.frmViernes.cNumber2.value);
    
	//Obtener producto
	var producto = num1 * num2;
	document.write(producto);
	
	//Verificar si es o no Perfecto
	var fact=1;
	var sum=0;

	for(var i=1; i < producto; i++)
	{
		if(producto % i == 0)
			sum=sum + i;
	}

	if(sum == producto)
	{
		document.write("<h2><center>"+ 
			"El Producto es numero Perfecto"+
			"</h2></center>");
	}
	else
	{
		document.write("<h2><center>"+ 
			"El Producto no es numero Perfecto"+
			"</h2></center>");
	}
}