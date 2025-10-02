function quicksort(array, left, rigth){
    var i = left;
    var j = rigth;
    var aux
var pivotidx = (left + rigth /2)
var pivot = parseInt (array[pivotidx.foFixed()])
while(i <= j){
    while(parseInt(array[i]) <pivot)
    i++;
while(parseInt(array[i]) <pivot)
    j--
if(i <=j){
    aux = array [i]
    array[i] = array[j]
    array[j] = aux
}
}
 if (left < j) 
 quicksort(array, left, j)
if(i < rigth)
quicksort(array, i, rigth)  
return array
}

let vet = [ 77, 44, 22, 33 ,99 ,55 ,8 ,0, 66 ,11]
quicksort(vet, 0, vet.length -1)
console.log(vet)
