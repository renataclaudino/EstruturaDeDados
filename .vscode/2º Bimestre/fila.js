function clear(){
    while(fila.length != 0){
        fila.serve();

    }
}

var fila = [];

let x = parseInt(prompt("Insira um número: "));
fila.push(x);
fila.push(1);
fila.push(2);

console.log(fila.shift());
console.log("elementos na fila: " + fila.length);
console.log("Fila: " + fila);

clear();