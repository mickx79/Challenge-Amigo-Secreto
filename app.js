let amigos = [];

function sortearAmigo(){
    let amigoAleatorio = amigos[Math.floor(Math.random()*amigos.length)];
    if (amigos.length <= 1){desactivarBoton('botonSorteo') 
        alert('No hay amigos suficientes para sortear')
    } else {if(amigos => 2){
        activarBoton('botonSorteo')
    asignarTextoElemento('resultado', `El amigo sorteado es: ${amigoAleatorio}`);
    asignarTextoElemento('listaAmigos', '');
    desactivarBoton('botonSorteo');
    desactivarBoton('botonDeAgregar');
    setTimeout(() => {
        alert('Si quiere realizar otro sorteo, actualice la página');
    }, 400);}
    }
}

function desactivarBoton(id){
    document.getElementById(id).setAttribute('disabled', true)
}

function asignarTextoElemento(id, texto){
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
    return
}

function agregarAmigo(){
  let nombreDeAmigos = document.getElementById('friends').value;
  if(nombreDeAmigos.trim() !== ''){
    activarBoton('botonSorteo')
    amigos.push(nombreDeAmigos);
  } else {
    alert('Introduzca un nombre válido');
  }

  asignarTextoElemento('listaAmigos', amigos.map(nombre => `<p>${nombre}</p>`).join(''));
console.log(amigos);
return limpiarCaja();
}

function limpiarCaja() {
    let valorCaja = document.getElementById('friends');
    valorCaja.value = '';
}

function activarBoton(id){
    document.getElementById(id).removeAttribute('disabled')
}
