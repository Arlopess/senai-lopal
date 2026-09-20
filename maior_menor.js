let numero1 = Number(prompt(`${nome}, digite o primeiro número: `))
let numero2 = Number(prompt(`${nome}, digite o segundo número: `))
let numero3 = Number(prompt(`${nome}, digite o terceiro número: `))

if (numero1 > numero2 && numero1 > numero3) {
    alert(`O número ${numero1} é maior que ${numero2} e ${numero3}`)
    console.log(`O número ${numero1} é maior que ${numero2} e ${numero3}`)
} else if (numero2 > numero1 && numero2 > numero3) {
    alert(`O número ${numero2} é maior que ${numero1} e ${numero3}`)
    console.log(`O número ${numero2} é maior que ${numero1} e ${numero3}`)
} else if (numero3 > numero1 && numero3 > numero2) {
    alert(`O número ${numero3} é maior que ${numero1} e ${numero2}`)
    console.log(`O número ${numero3} é maior que ${numero1} e ${numero2}`)
} else {
    alert(`Os números são iguais: ${numero1}`)
    console.log(`Os números são iguais: ${numero1}`)
}