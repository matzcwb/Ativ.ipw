var n1Str = prompt("Digite seu Salário em R$: ");
var s = parseInt(n1Str);
 
var n2Str = prompt("Quantos filhos possui? ");
var f = parseInt(n2Str);
var f2 = 50
var f3 = 70
var ff2 = 40
var ff3 = 60
var fff2 = 30
var fff3 = 20


if (s < 300 && f <= 2) {
    alert("Seu Reajuste salárial Fámiliar será de: " + (s + f2))}
else if (s < 300 && f > 2){
    alert("Seu Reajuste salárial Fámiliar será de: " + (s + f3))
}

    if (s > 300 && s < 500 && f <= 2)
        alert("Seu Reajuste salárial Fámiliar será de: " + (s + ff2))
        else if ( s > 300 && s < 500 && f > 2){
            alert("Seu Reajuste salárial Fámiliar será de: " + (s + ff3))
        
    }
        if (s >= 500 && f <= 2)
         alert("Seu Reajuste salárial Fámiliar será de: " + (s + fff2))
            else if ( s >= 500 && f > 2){
                alert("Seu Reajuste salárial Fámiliar será de: " + (s + fff3))
        
    
            }    

    


 

    
     




    

