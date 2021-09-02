var x1 = 0;
var x2 = 0;

for (var index = 0; index < 10; index++) {
    var numStr = prompt('Digite o ' + (index + 1) + "º numero ");
        var aux = parseInt(numStr);
    
	if(aux >= x1){
         x1 = aux;
        }
	else aux <= x2 
     x2 = aux ;
  
}
alert(x1)
alert(x2)