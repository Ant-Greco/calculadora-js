function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma +\n 2 - Subtração -\n 3 - Multiplicação *\n 4 - Divisão Real /\n 5 - Divisão Inteira %\n 6 - Potenciação **'));

        if(!operacao || operacao >= 7){
            alert('Erro - Operação Inválida');
            calculadora();
        }else{
        
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if(!n1 || !n2){
            alert('Erro - Parâmetros Inválidos')
            calculadora();
        }else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoR(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoI(){
                resultado = n1 % n2;
                alert(`O valor que sobra da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`O resultado do número ${n1} elevado a ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
        }
    
                function novaOperacao(){
                   let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                if (opcao == 1){
                    calculadora();
                }else if(opcao == 2){
                    alert('Muito obrigado pela utilização\nEspero te ver novamente');
                }else{
                    alert('Digite uma opção válida');
                    novaOperacao();
                }
                }
        }

        

    if (operacao == 1) {
        soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoR();
        } else if (operacao == 5) {
            divisaoI();
        } else if (operacao == 6) {
            potenciacao();
        } 
        }
    
    
calculadora();