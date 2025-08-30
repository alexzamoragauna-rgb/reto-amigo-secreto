// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
agregarAmigo();
recorrelista(amigos);

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
    if (nuevoAmigo == ''){
        alert('Por favor, inserte un nombre')
    } else{
         amigos.push(nuevoAmigo);
         //console.log(amigos);    
    }
    recorrelista(amigos);
    limpiarCaja();
    return amigos;
}

function limpiarCaja() {
    document.querySelector("#amigo").value = ''; 
}

function recorrelista (lista) {
    let li = '';
    for (let i = 0; i < lista.length; i++){
        li = li + `<li>${lista [i]}</li>`      
    };
    return document.getElementById('listaAmigos').innerHTML = li;
};

function sortearAmigo (lista) {
    if (lista != []){
        let numeroGenerado = Math.floor(Math.random()*(lista.length));
        console.log(numeroGenerado);
        let ganador = lista[numeroGenerado];
        console.log(ganador);
        document.getElementById('listaAmigos').innerHTML='';
        let elem = document.getElementById('resultado');
        let elementli = `<li>Tu amigo secreto es ${lista[numeroGenerado]}</li>`;
        elem.innerHTML=elementli;
    } else {
        alert("Ingresael nombre de tus amigos por favor");
    }
}