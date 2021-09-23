var resto = 0;
var soma = 0; 
   var numStr = prompt("Digite um nº inteiro de 4 dig: ");
   var aux = parseInt(numStr);

while (aux > 0){

resto = aux % 10;
aux = (aux-resto)/10;
soma = soma + resto;
}


alert(soma)


