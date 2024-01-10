const yourPrice = document.getElementById('prezzo-finale')

const distance = parseInt(prompt('quanti km vuoi percorrere?'))
console.log(distance)

const age = parseInt(prompt('quanti anni hai?'))
console.log(age)

const price = distance * 0.21
console.log(price)

if (age > 18 || age < 65) {
    const finalPrice = price
    console.log(finalPrice.toFixed(2))
    yourPrice.innerText = 'il tuo prezzo finale è: ' + finalPrice
}
if (age < 18) {
    let discountPerc = 20
    const discount = price * discountPerc / 100

    const finalPrice = price - discount
    console.log(finalPrice.toFixed(2))
    yourPrice.innerText = 'il tuo prezzo finale è: ' + finalPrice

}

if (age > 65) {
    let discountPerc = 40
    const discount = price * discountPerc / 100

    const finalPrice = price - discount
    console.log(finalPrice.toFixed(2))
    yourPrice.innerText = 'il tuo prezzo finale è: ' + finalPrice
}

