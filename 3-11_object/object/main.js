'use strict'

let jsbook = {

    title: 'JavaScript入門',
    price: 2500,
    stock: 3,
}

console.log(jsbook)

let bookTitle = jsbook.title
console.log(bookTitle)
console.log(jsbook.price)
console.log(jsbook.stock)

//オブジェクトの値を変える場合
jsbook.price = 3000
console.log('オブジェクトの値を変える場合は', jsbook.price)

console.log(jsbook['stock'])