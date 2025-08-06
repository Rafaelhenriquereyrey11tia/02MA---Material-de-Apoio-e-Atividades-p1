function soma(){
    const valor1 = parseFloat(document.getElementById(' input1').value);
    const valor2 = parseFloat(document.getElementById(' input2').value);
    const total =valor1 +valor2
    document.getElementById('resultado').innerText ='Resultado: ${total}';
}