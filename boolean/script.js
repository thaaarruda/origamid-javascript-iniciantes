// EXERCICIO

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 26;
var idadeIrma = 36;

if(minhaIdade > IdadeIrma){
    console.log('É maior')
} else if (minhaIdade === idadePrimo){
    console.log('É igual')
} else {
    console.log('É menor')
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // truthy
var idade = 28; // truthy
var possuiDoutorado = false; //falsy
var empregoFuturo; //falsy
var dinheiroNaConta = 0; // falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china ) {
    console.log('Brasil tem mais habitantes')
       
} else {
    console.log ('Brasil tem menos habitantes')
}

// O que irá aparecer no console? RESPOSTA: FALSO
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}


// O que irá aparecer no console? RESPOSTA: FALSO
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}