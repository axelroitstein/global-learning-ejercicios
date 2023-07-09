import fs from 'node:fs'
const evenNumbersArray = []

function showEvenNumbers (array) {
  array = fs.readFileSync('./datos.txt', 'utf-8').split(' ').filter(stringToNumber => Number(stringToNumber) % 2 === 0)
  return array.length
}
fs.writeFileSync('./numeros-pares.txt', `La cantidad de números pares en total es: ${showEvenNumbers(evenNumbersArray)}`)
