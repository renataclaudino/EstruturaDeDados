function selecaoDireta(vetor) {
    let tam = vetor.length;

    for (let i = 0; i < tam - 1; i++) {
        let menor = i;

        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }

        if (minIndex !== i) {
            let aux = vetor[i];
            vetor[i] = vetor[menor];
            vetor[menor] = aux;
        }
    }
}

let vet = [25, 57, 48, 37, 12, 92, 86, 33];
console.log("Antes da ordenação:", vet);

selecaoDireta(vet);

console.log("Depois da ordenação:", vet);
