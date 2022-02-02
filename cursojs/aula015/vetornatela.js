let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

/*for( let pos = 0; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //forma tradicional do percurso em vetores
}*/

// simplificando o código

for( let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


/*
num.indexOf(7) = ele vai procurar lá no vetor onde está o valor 7 */