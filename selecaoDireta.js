function selecaoDireta(vetor) {
    for (var i = 0; i <vetor.length; i++){
        var menor = vetor [i]
        var pos = i+1
        for (var j = i+1; j <vetor.length; j++){
            if (vetor[j] <menor){
                menor = vetor[j]
                pos = j
            }
        }
        var aux = vetor[i]
        vetor[i] = vetor[pos]
        vetor[pos] = aux
    }
}
let nums = [25, 57 ,48 ,37 ,12 ,92 ,86, 33]
selecaoDireta(nums)
console.log(nums)