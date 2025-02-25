import { calcular, Operacao } from "./calculadora";

const resultadoSoma = calcular(10, Operacao.SOMA, 20); //30
const resultadoSubtracao = calcular(30, Operacao.SUBTRACAO, 10); //20
const resultadoMultiplicacao = calcular(3, Operacao.MULTIPLICACAO, 7); //21
const resultadoDivisao = calcular(12, Operacao.DIVISAO, 2); //6

calcular(10, Operacao.DIVISAO, 20);

console.log(resultadoSoma);
console.log(resultadoSubtracao);
console.log(resultadoMultiplicacao);
console.log(resultadoDivisao);
