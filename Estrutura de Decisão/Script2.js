var salarioStr = prompt('Digite seu Salário: ');
var salario = parseInt(salarioStr);
var saldo = 500


if (salario <= saldo) {
    var salario = parseFloat(8 * salarioStr) /100;
    
    alert("Seu salario com o desconto de INSS será: " + (salarioStr - salario));
    
} else {salario >= saldo 
    var salario = parseFloat (9 * salarioStr) /100;
    alert("Seu salario com o desconto de INSS será: " + (salarioStr - salario));
    
} 