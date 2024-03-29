// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
	return x+y;
}
soma(joao,maria);

// Declare uma variável que receba a invocação da função criada acima,
// passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma('joao','maria')+5;

// Qual o valor atualizado dessa variável?
joaomaria5

// Declare uma nova variável, sem valor.
var novaVariavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuir (variavel){
	return variavel = 5;
}

// Invoque a função criada acima.
atribuir(novaVariavel);

// Qual o retorno da função? (Use comentários de bloco).
/*Undefined*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicacao(a,b,c){
	if (a == Undefined || b == Undefined || c == Undefined) 
		return
	return a*b*c+3;
}

// Invoque a função criada acima, passando só dois números como argumento.
?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
?

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?