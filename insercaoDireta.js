function insercaoDireta(vetor) {
    for (let i = 1; i < vetor.length; i++) {
        let num = vetor[i];
        let j = i - 1;

        while (j >= 0 && vetor[j] > chave) {
            vetor[j + 1] = vetor[j];
            j = j - 1;
        }
        vetor[j + 1] = num;
    }
}

let num = [25, 57 ,48 ,37 ,12 ,92 ,86, 33]
console.log("Os números são: " + vetor);


insercaoDireta();