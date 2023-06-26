const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
const doble = arr.map(num => num * 2)
console.log(doble)
// [2, 4, 6, 8, 10, 12]
// utilizar el método filter para filtrar los números pares de arr
const filtro = arr.filter(num => num % 2 === 0)
console.log(filtro)
// [2, 4, 6]
// utilizar el método reduce para sumar todos los elementos
const sumatotal = arr.reduce( (acumulador,valor)=>acumulador + valor,0)
console.log(sumatotal)
// 21