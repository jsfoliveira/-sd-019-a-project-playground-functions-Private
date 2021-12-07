// Desafio 10
//Entendi o método assign neste site https://www.delftstack.com/pt/howto/javascript/array-to-objects-javascript/
function techList(arr, name) {
  let novoArray = []; //lista de objetos
  if (arr.length < 1) {
    return 'Vazio!';
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      //adicionando os objetos da lista novoArray
      arr.sort();
      let obj = {}; //criei o objeto vazio
      obj.tech = arr[i]; //coloquei a propriedade tech
      obj.name = name; //coloquei a propriedade name
      novoArray.push(obj); //adicionei o objeto no novoArray
    }
    return novoArray; //retornei a lista
  }
}
let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
console.log(techList([], 'Lucas'));

// Desafio 11 // não consegui fazer o ultimo return
function generatePhoneNumber(arr) {
  let repeatThree = false;
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0 || arr[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    //let num = arr[i];
    let contador = 0;
    for (let a = 0; a < arr.length; a += 1) {
      if (arr[i] === arr[a]) {
        contador += 1;
      }
    }
    if (contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numeroTelefone =
    '(' +
    arr[0] +
    arr[1] +
    ')' +
    ' ' +
    arr[2] +
    arr[3] +
    arr[4] +
    arr[5] +
    arr[6] +
    '-' +
    arr[7] +
    arr[8] +
    arr[9] +
    arr[10];
  return numeroTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangulo = [lineA, lineB, lineC];
  for (let i = 0; i < triangulo.length; i += 1) {
    triangulo[i];
    if (
      triangulo[i] < triangulo[i] + triangulo[i] &&
      triangulo[i] > triangulo[i] - triangulo[i]
    ) {
      return true;
    }
  }
  return triangulo;
}
// console.log(triangleCheck, 10, 4, 8);

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
