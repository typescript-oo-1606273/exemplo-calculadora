import { calcular } from "./calculadora";

const resultadoSoma = calcular(10, "+", 20); //30
const resultadoSubtracao = calcular(30, "-", 10); //20
const resultadoMultiplicacao = calcular(3, "*", 7); //21
const resultadoDivisao = calcular(12, "/", 2); //6

console.log(resultadoSoma);
console.log(resultadoSubtracao);
console.log(resultadoMultiplicacao);
console.log(resultadoDivisao);
