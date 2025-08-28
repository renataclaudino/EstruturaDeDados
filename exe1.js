function bubbleSort(vetor) {
    for ( i =0; i <vetor.length; i++) {
        var aux
        for (j = 0; j < vetor.length - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
}
}
vet = []
for (let i = 0; i < 10; i++) {
    vet[i] = Math.round(Math.random() * (100-1) + 1);   
}
console.log(vet)
bubbleSort(vet)
console.log(vet)