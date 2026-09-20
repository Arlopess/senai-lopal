let numero = Number(prompt(`${nome}, digite um número pra saber se é par ou ímpar: `))

if (numero % 2 === 0) {
    alert(`O número ${numero} é par.`)
    console.log(`O número ${numero} é par.`)
} else {
    alert(`O número ${numero} é ímpar.`)
    console.log(`O número ${numero} é ímpar.`)
}