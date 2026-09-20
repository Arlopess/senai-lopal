let temperatura = Number(prompt(`${nome}, digite a temperatura em Celsius: `))

if (temperatura >= 30) {
    alert(`${nome}, está muito quente!`)
    console.log(`${nome}, está muito quente!`)
} 
if (temperatura < 30) {
    alert(`${nome}, A temperatura esta amena.`)
    console.log(`${nome}, A temperatura esta amena.`)
}
else if (temperatura <= 15) {
    alert(`${nome}, está frio!`)
    console.log(`${nome}, está frio!`)
}