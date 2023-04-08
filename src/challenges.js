// Desafio 1 - Crie a função compareTrue
const compareTrue = (parametro1, parametro2) => {
  const trueExpresion = (parametro1 === true && parametro2 === true) ? true : false;
  return trueExpresion;
};

// Desafio 2 - Crie a função splitSentence
const splitSentence = (string) => {
  return string.split(' '); 
};

// Desafio 3 - Crie a função concatName
const concatName = (array) => {
  return `${array[array.length-1]}, ${array[0]}`;
};

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {
  return (wins * 3) + ties;
};

// Desafio 5 - Crie a função highestCount
const MayorNumber = (array) => {
  let MayorNumberArray = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > MayorNumberArray) {
      MayorNumberArray = array[i]
    }
  }
  return MayorNumberArray
};

const highestCount = (array) => {
  let searchNumber = MayorNumber(array);
  let counterNumber = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === searchNumber) {
      counterNumber += 1;
    }
  }
  return counterNumber; 
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => {
  return (base * height) / 2;
};

const calcRectangleArea = (base, height) => {
  return base * height;
};

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  let status = ''
  if ((Math.abs(cat1)) === (Math.abs(cat2))) {
    status = `os gatos trombam e o rato foge`;
  } else if ((((Math.abs(cat1)) - (Math.abs(mouse))) < ((Math.abs(cat2)) - (Math.abs(mouse))))) {
    status = 'cat1';
  } else {
    status = 'cat2';
  }
  return status;
};

console.log(catAndMouse(-50, 6, 5))
// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) => {
  let newArray = [];
  for (let numero in array) {
    if (array[numero] % 3 !== 0 && array[numero] % 5 !== 0) {
      newArray.push('bug!');
    } else if (array[numero] % 3 === 0 && array[numero] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[numero] % 5 === 0 && array[numero] % 3 !== 0) {
      newArray.push('buzz');
    } else if (array[numero] % 3 === 0 && array[numero] % 5 !== 0) {
      newArray.push('fizz');
    }
  }
  return newArray;
};

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
