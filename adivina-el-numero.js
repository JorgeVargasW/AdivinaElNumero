const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
    prompt('Adivina el número secreto entre el 1 al 10')
);

console.log(`Este es el número con el que juegas ${numeroJugador}`);

if(numeroJugador === numeroSecreto){
    console.log('Felicidades, adivinaste el número secreto!');
}else if(numeroJugador < numeroSecreto){
    console.loh('Tu número es menor al numero secreto, vuelve a intentar.');
}else if(numeroJugador > numeroSecreto){
    console.log('Tu número es mayor al numero secreto, vuelve a interlo.');
}else{
    console.log('Lo siento no entiendo lo que escribiste, vuelve a interlo.');
}