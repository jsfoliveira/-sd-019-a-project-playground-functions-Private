# 	:woman_technologist: Project Playground Functions

Esse projeto contém uma série de informações sobre o que eu aprendi aqui na Trybe ao longo dos primeiros três blocos do curso de desenvolvimento web da Trybe. <br>
### Habilidades desenvolvidas
* Escrever códigos em JavaScript que usam variáveis e tipos primitivos;
* Utilizar conceitos da linguagem como a tipagem dinâmica e operadores lógicos/aritméticos/de atribuição no seu código;
* Criar códigos que usam estruturas condicionais, como o if/else ;
* Manipular arrays (listas);
* Utilizar o comando for ;
* Quebrar grandes problemas em pequenos;
* Utilizar a lógica de programação na resolução de problemas;
* Manipular objetos;
* Utilizar o comando for/in ;
* Utilizar funções para organizar e estruturar o seu código;

## :rocket:Começando
Esse projeto foi proposto pelo curso de desenvolvimento web da Trybe.
### Desenvolvimento
Essa página foi feita usando JavaScript
### Commits
Os commits foram feitos de acordo com os requisitos finalizados.
### Branch
Todo o projeto foi feita na branch 'juliana-oliveira-playground-functions', isso por conta da exigência do curso.
### Instalação
Antes de realizar o projeto, precisei instalar as dependências usando npm install.
### Testes
Os testes usando foram ESLint e Cypress, através dos **comandos**: <br>
* npm test <br>
* npm run lint
### Autores
Esse foi um projeto individual,que desenvolvido somente por Juliana Oliveira.
### Ferramentas usadas
Foi usado Visual Studio Code, além do Trello que auxiliou na organização das tarefas.
### Framework usado
Nenhum.
### Informações importantes
Todas as funções já estão declaradas nos arquivos challenges.js e challenges2.js

## :footprints:Requisitos
### Metodologia usada
No trabalho do desenvolvimento de software a gente sempre tem prazos, muitas vezes os prazos são apertados.<br>
Por outro lado, eu não quero criar algo que não entendo perfeitamente, como também fazer códigos rápidos pode levar a erros que podem demorar muito pra corrigir.<br>
Por isso, usei e sempre uso o método Baby Steps, que é uma estratégia de abordar o desafio passo à passo, defensivamente.<br>
Baby steps é um termo em inglês que quer dizer passos de bebê. Refere-se a fazer as coisas, quaisquer que sejam, devagar, com calma, passo a passo.
#### :footprints:Requisito 1
JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.<br>
Considerando isso, implemente na função compareTrue, um código que ao receber dois parâmetros booleanos deve:<br>
* Retornar true se ambos os valores forem verdadeiros;<br>
* Retornar false se um ou ambos os parâmetros forem falsos.<br>
* Faça a função somente utilizando o operador &&.<br>

#### :footprints:Requisito 2
Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.<br>

#### :footprints:Requisito 3
Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.<br>
Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].
#### :footprints:Requisito 4
Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.<br>
Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.
#### :footprints:Requisito 5
Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.<br>
Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
#### :footprints:Requisito 6
Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.<br>
Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.
#### :footprints:Requisito 7
Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.<br>
Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).<br>
Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".<br>
Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".
#### :footprints:Requisito 8
Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:<br>
* Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";<br>
* Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";<br>
* Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";<br>
* Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";<br>
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].
#### :footprints:Requisito 9
Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:<br>

a -> 1<br>
e -> 2<br>
i -> 3<br>
o -> 4<br>
u -> 5<br>

Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".<br>

A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").<br>
#### :footprints:Requisito 10
Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.<br>

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:<br>

{
  tech: "NomeTech",
  name: name
}
Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.<br>

A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.<br>

Exemplo:<br>

Entradas da função:<br>

["React", "Jest", "HTML", "CSS", "JavaScript"]<br>
"Lucas"

// Saída:<br>

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
Caso o array venha vazio sua função deve retornar 'Vazio!'
#### :footprints:Requisito 11
Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.<br>

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.<br>

* Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".<br>

* Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".<br>
#### :footprints:Requisito 12
Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.<br>

* Para tanto, tenha em mente algumas considerações:<br>

* Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.<br>

* Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.<br>

* O retorno da sua função deverá ser um booleano.<br>

Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.

