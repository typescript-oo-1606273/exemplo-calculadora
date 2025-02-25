export function calcular(num1: number, op: string, num2: number): number {
  if (op == "+") {
    return num1 + num2;
  }

  if (op == "-") {
    return num1 - num2;
  }

  if (op == "*") {
    return num1 * num2;
  }

  if (op == "/") {
    return num1 / num2;
  }

  return 0;

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
