
const distance = parseInt(prompt('quanti km vuoi percorrere?'))
console.log(distance)

const age = parseInt(prompt('quanti anni hai?'))
console.log(age)

const price = distance * 0.21
console.log(price)


if (age < 18) {
    let discountPerc = 20
    const discount = price * discountPerc / 100

    const finalPrice = price - discount
    console.log(finalPrice)
}

if (age > 65) {
    let discountPerc = 40
    const discount = price * discountPerc / 100

    const finalPrice = price - discount
    console.log(finalPrice)
}