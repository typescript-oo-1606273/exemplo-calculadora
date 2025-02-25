export enum Operacao {
  SOMA = "+",
  SUBTRACAO = "-",
  MULTIPLICACAO = "*",
  DIVISAO = "/",
}

export function calcular(num1: number, op: Operacao, num2: number): number {
  if (op == Operacao.SOMA) {
    return num1 + num2;
  }

  if (op == Operacao.SUBTRACAO) {
    return num1 - num2;
  }

  if (op == Operacao.MULTIPLICACAO) {
    return num1 * num2;
  }

  if (op == Operacao.DIVISAO) {
    return num1 / num2;
  }

  throw new Error("Operação não encontrada");

  // switch (op) {
  //   case "+":
  //     return num1 + num2;
  //   case "-":
  //     return num1 - num2;
  //   case "*":
  //     return num1 * num2;
  //   case "/":
  //     return num1 / num2;
  //   default:
  //     return 0;
  // }

  // if (op == "+") {
  //   return num1 + num2;
  // } else if (op == "-") {
  //   return num1 - num2;
  // } else if (op == "*") {
  //   return num1 * num2;
  // } else if (op == "/") {
  //   return num1 / num2;
  // } else {
  //   return 0;
  // }
}
