let num = [5, 8, 2, 9, 3]

 
num.push(1) //coloca um número na última posição
num.sort() // coloca os números em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`) //mostra a quantidade de posições começando pelo número 0

console.log(`O primeiro valor do vetor é ${num[0]}`) 
let pos= num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}






