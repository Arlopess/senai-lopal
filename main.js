let valor = Number(prompt("Digite o valor da sua compra: "))

if (valor <= 100) {
    alert("Sem desconto")
} else if (valor <=299.99) {
    let desconto = valor * 0.1
    let valor_total = valor - desconto
    alert(`10% de desconto
        Você ira pagar: ${valor_total}`)
} else if (valor <=499.99) { 
    let valor_total = valor * 0.8
    alert(`20% de desconto
        Você ira pagar: ${valor_total}`)
} else {
    let valor_total = valor * 0.7
    alert(`30% de desconto 
        Você ira pagar: ${valor_total}`)
}
