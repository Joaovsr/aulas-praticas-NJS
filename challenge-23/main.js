(function(win, doc){

	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:
	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente;
	- O input deve iniciar com valor zero;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;
	- A cada número pressionado, o input deve atualizar concatenando cada valor
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/
	var operationSign = {
		'*': function(){
				return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
			},
		'+': function(){
				return ( Number(firstValue) + Number(lastValue) ) 
			}, 
		'-': function(){
				total / input;
			}, 
		'': function(){
				total - input;
			}
	}
	var $visor = doc.querySelector(['[name="view"]'])
	var $btnNumber = doc.querySelectorAll('[data-js="btnNumber"]');
	var $btnOperation =  doc.querySelectorAll('[data-js="btnOperation"]');
	var $btnCe = doc.querySelector('[data-js="btnCe"]');
	var $btnEqual = doc.querySelector('[data-js="btn="]')

	Array.prototype.forEach.call($btnNumber, function(button){
		button.addEventListener('click', handleClickNumber, false)
	});
	Array.prototype.forEach.call($btnOperation, function(button){
		button.addEventListener('click', handleClickOperation, false)
	});
	$btnEqual.addEventListener('click', handleClickEqual, false);
	$btnCe.addEventListener('click', handleClickCe, false);

	function handleClickNumber(){
		$visor.value += this.value;
	}
	function handleClickOperation(){
		$visor.value = removeLastItemIfItIsAnOperator($visor.value);
		$visor.value += this.value;
	}
	function handleClickCe(){
		$visor.value = '0';
	}
	function isLastItemAOperation(number){
		var operations = ['+', '-', 'x', '÷'];
		var lastItem = number.split('').pop();
		return operations.some(function(operator){
			return operator === lastItem;
		})
	}
	function removeLastItemIfItIsAnOperator(number){
		if (isLastItemAOperation(number))
			return number.slice(0, -1);

		return number;
	}
	function handleClickEqual(){
		$visor.value = removeLastItemIfItIsAnOperator($visor.value);
		var allValues = $visor.value.match( /\d+[+x÷-]?/g );
		$visor.value = allValues.reduce(function(accumulated, actual){
			var firstValue = accumulated.slice(0,-1);
			var operator = accumulated.split('').pop();
			var lastValue = removeLastItemIfItIsAnOperator(actual);
		    var lastOperator = isLastItemAOperation(actual) ? actual.split('').pop() : '';
			switch(operator) {
		      case '+':
		        return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
		      case '-':
		        return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
		      case 'x':
		        return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
		      case '÷':
		        return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
		    }
		}) 
	}

})(window, document);