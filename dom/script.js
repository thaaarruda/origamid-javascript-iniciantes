// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementAtivo = document.querySelector ('.ativo')

// Retorne a linguagem do navegador
const linguagem = window.Navigator.linguagem
console.log(linguagem);

// Retorne a largura da janela 
const windowWidth = window.innerWidth;
console.log('innerWidth');