let valor = Number(prompt(`${nome}, digite o valor da sua compra em nossa loja: `))

if (valor <= 100) {
    alert(`Sem desconto
        Você ira pagar: ${valor}`)
        console.log(`Sem desconto
        Você ira pagar: ${valor}`)
} else if (valor <=299.99) {
    let desconto = valor * 0.1
    let valor_total = valor - desconto
    alert(`10% de desconto
        Você ira pagar: ${valor_total}`)
    console.log(`10% de desconto
        Você ira pagar: ${valor_total}`)
} else if (valor <=499.99) { 
    let valor_total = valor * 0.8
    alert(`20% de desconto
        Você ira pagar: ${valor_total}`)
    console.log(`20% de desconto
        Você ira pagar: ${valor_total}`)
} else {
    let valor_total = valor * 0.7
    alert(`30% de desconto 
        Você ira pagar: ${valor_total}`)
    console.log(`30% de desconto
        Você ira pagar: ${valor_total}`)
}
