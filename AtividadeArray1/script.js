var campo = document.querySelector("input")
var btn = document.querySelector("button")
var btn1 = document.getElementById('btn1')
var objetos = ['cadeira', 'impressora', 'garfo'];

btn.onclick = function(){
    objetos.push(campo.value);
    console.log(objetos);

    if(document.getElementById('objeto').value === ''){
        alert('Informe um valor válido')
    
    }else if(document.getElementById('objeto').value === 'cadeira' || document.getElementById('objeto').value === 'impressora' || document.getElementById('objeto').value === 'garfo'){
        alert('Este objeto já foi adicionado, informe outro.')

    }else{
        objetos.push(campo.value);
        console.log(objetos); 
    }
}

btn1.onclick = function(){
    console.log(objetos.sort())
}
