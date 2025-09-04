function insercaoDireta(vetor) {
    for (let i = 1; i < vetor.length; i++) {
        let odio = vetor[i];
        let j = i - 1;

        while (j >= 0 && vetor[j] > odio) {
            vetor[j + 1] = vetor[j];
            j = j - 1;git 
        }
        vetor[j + 1] = odio;
    }
}

let num = [25, 57, 48, 37, 12, 92, 86, 33];

console.log("Os números são: " + num.join(", "));

insercaoDireta(num);

console.log("Os números em ordem crescente são: " + num.join(", "));
