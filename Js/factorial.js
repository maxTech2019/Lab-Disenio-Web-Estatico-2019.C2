function ObtenerFactorial()
{
	//Capturar el valor del formulario
	var num=document.miformulario.cmValor.value;
	var fact=1;
	//Ciclo for
	for(var i=1; i<=num; i++)
	{
		fact = fact * i;
		document.write(fact + "<br>");
	}
}