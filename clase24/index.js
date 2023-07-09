import { sum, multiply, substract } from './utils.js'

import fs from 'node:fs'

// import utils from './utils.js'

console.log('Probando Node en clase 24 de Global Learning')

console.log('Shalom')

console.log(sum(5, 8))
// console.log(utils.sum(5,8));

console.log(substract(5, 8))
// console.log(utils.substract(5,8));

console.log(multiply(5, 8))
// console.log(utils.multiply(5,8));

const data = fs.readFileSync('./texto.txt', 'utf-8')

if (!data.includes('Y SACALA, RIVEEEEER!')) {
  fs.writeFileSync('./texto.txt', `${data} Y SACALA, RIVEEEEER!`)
}
console.log(data)
