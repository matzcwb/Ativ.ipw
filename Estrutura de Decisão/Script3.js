var x1 = 0;

for (var index = 0; index < 3; index++) {
    var numStr = prompt('Digite o ' + (index + 1) + "º numero ");
        var aux = parseInt(numStr);
    
	if(aux >= x1){
         x1 = aux;
        }
	
  
}
alert(x1)
    


   
