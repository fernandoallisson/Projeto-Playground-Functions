// Desafio 11 - Crie a função generatePhoneNumber
const verifArray = (array) => {
  let verifyNumber = true; 
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let index in array) {
    if (array[index] < 0 || array[index] > 9){
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  let counter = {}; 
  array.forEach(num => {
    if (counter[num]) {
      counter[num] += 1; 
    } else {
      counter[num] = 1
    }
  });
    for (let numb in counter) {
      if (counter[numb] > 3) {
        verifyNumber = false;
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    return verifyNumber; 
};

const generatePhoneNumber = (array) => {
  let validation = verifArray(array); 
  if (validation === true) {
    const formated = (`(${array.slice(0, 2).join('')}) ${array.slice(2 , 7).join('')}-${array.slice(7).join('')}`);
    return formated; 
  }
  return validation
}

// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
