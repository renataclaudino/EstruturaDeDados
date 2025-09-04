function bubbleSort(vet) {
    for (let i = 0; i < vet.length - 1; i++) {
      for (let j = 0; j < vet.length - i - 1; j++) {
        if (vet[j] > vet[j + 1]) {
          let aux = vet[j];
          vet[j] = vet[j + 1];
          vet[j + 1] = aux;
        }
      }
    }
    return vet;
  }
  
  // Seleção Direta
  function selecaoDireta(vet) {
    for (let i = 0; i < vet.length - 1; i++) {
      let menor = vet[i];
      let pos = i;
  
      for (let j = i + 1; j < vet.length; j++) {
        if (vet[j] < menor) {
          menor = vet[j];
          pos = j;
        }
      }
  
      if (pos !== i) {
        let aux = vet[i];
        vet[i] = vet[pos];
        vet[pos] = aux;
      }
    }
    return vet;
  }
  
  // Inserção Direta
  function insercaoDireta(vet) {
    for (let i = 1; i < vet.length; i++) {
      let aux = vet[i];
      let j;
      for (j = i - 1; j >= 0 && vet[j] > aux; j--) {
        vet[j + 1] = vet[j];
      }
      vet[j + 1] = aux;
    }
    return vet;
  }
  
  ///////Programa Principal INVERTIDO
  
  console.log(`Invertido`);
  
  let vetor1 = [];
  for (let i = 1000; i > 0; i--) {
    vetor1.push(i);
  }
  let vetor2 = vetor1.slice();
  let vetor3 = vetor1.slice();
  
  console.time("Inserção Direta");
  insercaoDireta(vetor1);
  console.timeEnd("Inserção Direta");
  
  console.time("Seleção Direta");
  selecaoDireta(vetor2);
  console.timeEnd("Seleção Direta");
  
  console.time("Bubble Sort");
  bubbleSort(vetor3);
  console.timeEnd("Bubble Sort");
  
  ///////Programa Principal ORDENADO
  
  console.log(`Ordenado`);
  
  vetor1 = [];
  for (let i = 1; i <= 1000; i++) {
    vetor1.push(i);
  }
  vetor2 = vetor1.slice();
  vetor3 = vetor1.slice();
  
  console.time("Inserção Direta");
  insercaoDireta(vetor1);
  console.timeEnd("Inserção Direta");
  
  console.time("Seleção Direta");
  selecaoDireta(vetor2);
  console.timeEnd("Seleção Direta");
  
  console.time("Bubble Sort");
  bubbleSort(vetor3);
  console.timeEnd("Bubble Sort");
  
  ///////Programa Principal ALEATORIO
  
  console.log(`Aleatorio`);
  
  vetor1 = [];
  for (let i = 0; i < 1000; i++) {
    vetor1.push(Math.floor(Math.random() * 1000) + 1);
  }
  vetor2 = vetor1.slice();
  vetor3 = vetor1.slice();
  
  console.time("Inserção Direta");
  insercaoDireta(vetor1);
  console.timeEnd("Inserção Direta");
  
  console.time("Seleção Direta");
  selecaoDireta(vetor2);
  console.timeEnd("Seleção Direta");
  
  console.time("Bubble Sort");
  bubbleSort(vetor3);
  console.timeEnd("Bubble Sort");















//function bubbleSort(vetor) {
    for (let i = 0; i < vetor.length; i++) {
      for (let j = 0; j < vetor.length - 1; j++) {
        if (vetor[j] > vetor[j + 1]) {
          let aux = vetor[j];
          vetor[j] = vetor[j + 1];
          vetor[j + 1] = aux;
        }
      }
    }
  }
  
  function insercaoDireta(vetor) {
    for (let i = 1; i < vetor.length; i++) {
      let atual = vetor[i];
      let j = i - 1;
      while (j >= 0 && vetor[j] > atual) {
        vetor[j + 1] = vetor[j];
        j--;
      }
      vetor[j + 1] = atual;
    }
  }
  
  function selecaoDireta(vetor) {
    for (let i = 0; i < vetor.length; i++) {
      let menor = vetor[i];
      let pos = i;
      for (let j = i + 1; j < vetor.length; j++) {
        if (vetor[j] < menor) {
          menor = vetor[j];
          pos = j;
        }
      }
      let aux = vetor[i];
      vetor[i] = vetor[pos];
      vetor[pos] = aux;
    }
  }
  
 
  
  function gerarAleatorio(tamanho) {
    return Array.from({ length: tamanho }, () => Math.floor(Math.random() * 10000));
  }
  
  function gerarOrdenado(tamanho) {
    return Array.from({ length: tamanho }, (_, i) => i);
  }
  
  function gerarInvertido(tamanho) {
    return Array.from({ length: tamanho }, (_, i) => tamanho - i);
  }
  
  
  function medirTempo(funcao, vetor) {
    const copia = [...vetor];
    const inicio = performance.now();
    funcao(copia);
    const fim = performance.now();
    return (fim - inicio).toFixed(2); 
  }
  
  function testarOrdenacoes(tamanho = 1000) {
    const aleatorio = gerarAleatorio(tamanho);
    const ordenado = gerarOrdenado(tamanho);
    const invertido = gerarInvertido(tamanho);
  
    const algoritmos = [
      { nome: 'Bubble Sort', funcao: bubbleSort },
      { nome: 'Inserção Direta', funcao: insercaoDireta },
      { nome: 'Seleção Direta', funcao: selecaoDireta }
    ];
  
    const vetores = [
      { nome: 'Aleatório', vetor: aleatorio },
      { nome: 'Ordenado', vetor: ordenado },
      { nome: 'Invertido', vetor: invertido }
    ];
  
    console.log(`🔍 Testando algoritmos com vetor de ${tamanho} elementos:\n`);
  
    for (let alg of algoritmos) {
      console.log(`--- ${alg.nome} ---`);
      for (let tipo of vetores) {
        const tempo = medirTempo(alg.funcao, tipo.vetor);
        console.log(`${tipo.nome}: ${tempo} ms`);
      }
      console.log('');
    }
  }
  
  // Executar o teste
  testarOrdenacoes(1000); // Altere o número se quiser testar com mais ou menos elementos
  