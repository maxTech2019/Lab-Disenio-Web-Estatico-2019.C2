function EsPerfecto()
{
	//Capturar el valor del formulario
	var num1=parseInt(document.miformulario.cmNumber1.value);
	var num2=parseInt(document.miformulario.cmNumber2.value);
	var sum=0, acum=0;

	//obtenemos la suma de los dos numeros
	sum = num1 + num2;

	//verificamos si es o no Numero Perfecto
	for(var i=1; i<sum;i++)
	{
		if(sum % i == 0)
			acum = acum + i;
	}

	document.write("La suma de sus divisores es: "+acum+"<br>");
	
	if (acum == sum)
		document.write("El resultado de la suma SI ES PERFECTO");
	else
		document.write("El resultado de la suma NO ES PERFECTO");
	
}