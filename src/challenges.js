// Desafio 1: Use o &&
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2: Crie uma função que calcule a área de um triângulo
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3: Crie uma função que divida a frase
function splitSentence(str) {
  let arr = str.split(' ');
  return arr;
}
// let frase = 'go Trybe';
// console.log(splitSentence(frase));
// Eu pesquisei sobre split no https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split

// Desafio 4: Crie uma função que use concatenação de strings
function concatName(arr) {
  let ultimo = arr[arr.length - 1];
  let primeiro = arr[0];
  return ultimo + ', ' + primeiro;
  // outra opção: return ultimo.concat(primeiro);
}
// array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(array));

// Desafio 5: Crie uma função que calcule a quantidade de pontos no futebol
function footballPoints(wins, ties) {
  let pontos = 3 * wins + ties;
  return pontos;
}
// console.log(footballPoints(14, 8));

// Desafio 6: Crie uma função que calcule a repetição do maior número
function highestCount(arr) {
  let cont = 0;
  let maiorNumero = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > maiorNumero) {
      maiorNumero = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === maiorNumero) {
      cont += 1;
    }
  }
  return cont;
}
// let array = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(array));
// OUTRA FORMA:
// const vezesRepete = (array1) => {
//   let contador = 0;
//   let maiorNumero = Math.max(...array1);
//     for(let i = 0; i < array1.length; i++){
//       if(array1[i] === maiorNumero){
//         contador += 1
//       }
//     }
//   return contador;
//   }
//   console.log(vezesRepete([9, 1, 2, 3, 9, 9, 5, 7]));

// Desafio 7
function catAndMouse(pMouse, pCat1, pCat2) {
  let distCat1 = Math.abs(pCat1 - pMouse);
  let distCat2 = Math.abs(pCat2 - pMouse);
  if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat1 > distCat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Utilizei as informações no site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// Math.abs vai pegar o valor absoluto, não vai deixar valor negativo, vai transformar em positivo.

// Desafio 8
function fizzBuzz(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arr[i] = 'fizzBuzz';
    } else if (arr[i] % 5 === 0) {
      arr[i] = 'buzz';
    } else if (arr[i] % 3 === 0) {
      arr[i] = 'fizz';
    } else {
      arr[i] = 'bug!';
    }
  }
  return arr;
}
// let array = [2, 15, 10, 7, 9, 45];
// console.log(fizzBuzz(array));

// Desafio 9
// Utilizando RegEx (regular expression) para buscar todas as ocorrências de cada caractere (https://regex101.com/). Não consegui executar com o '.replaceAll'.
function encode(str) {
  let newStr1 = str.replace(/a/g, '1');
  let newStr2 = newStr1.replace(/e/g, '2');
  let newStr3 = newStr2.replace(/i/g, '3');
  let newStr4 = newStr3.replace(/o/g, '4');
  let newStr5 = newStr4.replace(/u/g, '5');
  return newStr5;
}

// let frase = 'hi there';
// console.log(encode(frase));

function decode(modStr) {
  let newStr1 = modStr.replace(/1/g, 'a');
  let newStr2 = newStr1.replace(/2/g, 'e');
  let newStr3 = newStr2.replace(/3/g, 'i');
  let newStr4 = newStr3.replace(/4/g, 'o');
  let newStr5 = newStr4.replace(/5/g, 'u');
  return newStr5;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
