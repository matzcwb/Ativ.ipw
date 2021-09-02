var soma = 0;
var cont = 0;
    for(var i = 1 ;i <= 20; i++) {
        if (i % 2 == 0){
         soma = soma + i;  
            cont++; 
       

    }
}


alert("A média é: " + (soma/cont))