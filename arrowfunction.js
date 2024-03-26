var num = 5;

const dobro = (num) => {
    return num*num
};

console.log(dobro(num));
//----------------------------------------------------------------

var array = [1,2,3,4,5];

const soma = array.reduce((total, valor) => total + valor, 0);

console.log(soma);
//----------------------------------------------------------------
const palavra = 'Beterraba';

const numeroVogais = palavra
  .toLowerCase()
  .split('')
  .filter(letra => ['a', 'e', 'i', 'o', 'u'].includes(letra))
  .length;

console.log(numeroVogais);
//----------------------------------------------------------------
const calcularOperacao = (num1, num2, operacao) => {
    switch (operacao) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return "Operação inválida";
    }
  };
  
  // Exemplos de uso
  console.log(calcularOperacao(5, 2, '+')); // Output: 7
  console.log(calcularOperacao(10, 3, '-')); // Output: 7
  console.log(calcularOperacao(4, 6, '*')); // Output: 24
  console.log(calcularOperacao(20, 5, '/')); // Output: 4
  console.log(calcularOperacao(8, 2, '%')); // Output: Operação inválida
//----------------------------------------------------------------

var numero = prompt("Informe um numero");

function verificarParidade(numero) {
    return new Promise((resolve, reject) => {
      if (numero % 2 === 0) {
        resolve("Número é par");
      } else {
        reject("Número é ímpar");
      }
    });
  }
  
  console.log(verificarParidade(numero));