/* 1) Faça um algoritmo que leia os valores A, B, C e
imprima na tela se a soma de A + B é menor que C */

let A = parseFloat(prompt("Digite o valor de A:"))
let B = parseFloat(prompt("Digite o valor de B:"))
let C = parseFloat(prompt("Digite o valor de C:"))

if (A + B < C) {
    console.log("A soma de A + B é menor que C")
} else {
    console.log("A soma de A + B não é menor que C")
}

/* 2) Faça um algoritmo que leia o nome, o sexo e o
estado civil de uma pessoa. Caso sexo seja “F” e estado
civil seja “CASADA”, solicitar o tempo de casada (anos). */

let nome = prompt("Digite o nome:")
let sexo = prompt("Digite o sexo (M/F):").toUpperCase()
let estadoCivil = prompt("Digite o estado civil:").toUpperCase()
let tempoCasada = ""

if (sexo === "F" && estadoCivil === "CASADA") {
    tempoCasada = parseInt(prompt("Digite o tempo de casada (anos):"))
    console.log(`${nome} está casada há ${tempoCasada} anos.`)
}

/* 3) Faça um algoritmo para receber um número qualquer e
informar na tela se é par ou ímpar. */

let num = parseFloat(prompt("Digite um número:"))

if (num % 2 === 0) {
    console.log("O número é par.")
} else {
    console.log("O número é ímpar.")
}

/* 4) Faça um algoritmo que leia dois valores inteiros
A e B se os valores forem iguais deverá se somar os dois,
caso contrário multiplique A por B. Ao final de qualquer
um dos cálculos deve-se atribuir o resultado para uma
variável C e mostrar seu conteúdo na tela. */

let A1 = parseFloat(prompt("Digite o valor de A:"))
let B1 = parseFloat(prompt("Digite o valor de B:"))
let C1 = ""

if (A1 === B1) {
    C1 = A1 + B1
} else {
    C1 = A1 * B1
}
console.log("O resultado de C é: " + C1)

// de novo uma questão enorme pra uma resposta pequena kkkj

/* 5) Encontrar o dobro de um número caso ele seja positivo e
o seu triplo caso seja negativo, imprimindo o resultado. */

let num1 = parseFloat(prompt("Digite um número:"))

if (num1 >= 0) {
    num1 * 2
    console.log("O dobro do número é:", (num1))
} else {
    num1 * 3
    console.log("O triplo do número é:", (num1))
}

/* 6) Escreva um algoritmo que lê dois valores booleanos
(lógicos) e então determina se ambos são VERDADEIROS ou FALSOS. */

// Brother, vou ter que deixar em branco... vi alguns vídeos, algumas aulas de um curso que tô fazendo, mas não entendi como trabalhar com valores Booleanos.

/* 7) Faça um algoritmo que leia uma variável e some 5 caso seja
par ou some 8 caso seja ímpar, imprimir o resultado desta operação. */

let num2 = parseFloat(prompt("Digite um número:"))

if (num2 % 2 === 0) {
    num2 = num2 + 5
} else {
    num2 = num2 + 8
}
console.log("O resultado é: " + num2)

/* 8) Escreva um algoritmo que leia três valores inteiros e diferentes
e mostre-os em ordem decrescente. */

let n1 = parseInt(prompt("Digite o primeiro valor:"))
let n2 = parseInt(prompt("Digite o segundo valor:"))
let n3 = parseInt(prompt("Digite o terceiro valor:"))

if (n1 >= n2 && n1 >= n3) {
    if (n2 >= n3) {
        console.log("Os valores em ordem decrescente são: " + n1 + ", " + n2 + ", " + n3)
    } else {
        console.log("Os valores em ordem decrescente são: " + n1 + ", " + n3 + ", " + n2)
    }
} else if (n2 >= n1 && n2 >= n3) {
    if (n1 >= n3) {
        console.log("Os valores em ordem decrescente são: " + n2 + ", " + n1 + ", " + n3)
    } else {
        console.log("Os valores em ordem decrescente são: " + n2 + ", " + n3 + ", " + n1)
    }
} else {
    if (n1 >= n2) {
        console.log("Os valores em ordem decrescente são: " + n3 + ", " + n1 + ", " + n2)
    } else {
        console.log("Os valores em ordem decrescente são: " + n3 + ", " + n2 + ", " + n1)
    }
}

// com certeza tinha uma forma melhor de fazer essa questão, mas enfim

/* 9) Tendo como dados de entrada a altura e o sexo de uma pessoa,
construa um algoritmo que calcule seu peso ideal. */

let altura = parseFloat(prompt("Digite a altura (em metros):"))
let sexo1 = prompt("Digite o sexo (M/F):").toUpperCase()
let pesoIdeal = ""

if (sexo1 === "M") {
    pesoIdeal = (72.7 * altura) - 58
} else if (sexo1 === "F") {
    pesoIdeal = (62.1 * altura) - 44.7
}
console.log("O peso ideal é:", pesoIdeal, "kg")

/* 10) Elabore um algoritmo que leia o peso e a altura de um adulto
e mostre sua condição de acordo com a tabela do IMC. */

let peso = parseFloat(prompt("Digite o peso (em kg):"))
let altura1 = parseFloat(prompt("Digite a altura (em metros):"))
let IMC = peso / (altura1 * altura1)

if (IMC < 18.5) {
    console.log("Abaixo do peso")
} else if (IMC >= 18.5 && IMC < 25) {
    console.log("Peso normal")
} else if (IMC >= 25 && IMC < 30) {
    console.log("Acima do peso")
} else {
    console.log("Obeso")
}

/* 11) Elabore um algoritmo que calcule o que deve ser pago por um
produto, considerando o preço normal de etiqueta e a escolha
da condição de pagamento. */

let precoEtiqueta = parseFloat(prompt("Digite o preço do produto:"))
let condicaoPagamento = parseFloat(prompt("Escolha a condição de pagamento: 1. À vista em dinheiro ou cheque / 2. À vista no cartão de crédito / 3. Em 2x no cartão / 4. Em mais de 2x no cartão"))
let precoFinal

switch (condicaoPagamento) {
    case 1:
        precoFinal = precoEtiqueta * 0.9
        break
    case 2:
        precoFinal = precoEtiqueta * 0.85
        break
    case 3:
        precoFinal = precoEtiqueta
        break
    case 4:
        precoFinal = precoEtiqueta * 1.2
        break
    default:
        console.log("Condição de pagamento inválida")
        break
}

if (precoFinal) {
    console.log("O valor a ser pago é: R$", precoFinal)
}

/* 12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas
3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de
aproveitamento */

let numeroIdentificacao = parseFloat(prompt("Digite o seu código de aluno"))
let nota1 = parseFloat(prompt("Qual foi sua nota na primeira verificação?"))
let nota2 = parseFloat(prompt("Qual foi sua nota na segunda verificação?"))
let nota3 = parseFloat(prompt("Qual foi sua nota na terceira verificação?"))
let mediaExercicios = parseFloat(prompt("Qual foi a sua média nos exercícios?"))
let mediaDeAproveitamento = ((nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7)

if (mediaDeAproveitamento >= 90) {
    console.log("Você,", numeroIdentificacao, "tirou A, e está aprovado!")
} else if (mediaDeAproveitamento >= 75 && mediaDeAproveitamento < 90) {
    console.log("Você,", numeroIdentificacao, "tirou B, e está aprovado!")
} else if (mediaDeAproveitamento >= 60 && mediaDeAproveitamento < 75) {
    console.log("Você,", numeroIdentificacao, "tirou C, e está aprovado!")
} else if (mediaDeAproveitamento >= 40 && mediaDeAproveitamento < 60) {
    console.log("Você,", numeroIdentificacao, "tirou D, e infelizmente reprovou!")
} else if (mediaDeAproveitamento < 40) {
    console.log("Você,", numeroIdentificacao, "tirou E, e infelizmente reprovou!")
}

/* o calculo, a não ser que você use valores absurdos, sempre vai dar conceito E por causa dessa
divisão por 7. mas, pelo menos, o algoritmo segue a documentação que o senhor enviou */
