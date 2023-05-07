
/*
----------------------------------- Switch Case -----------------------------------
*/
/*
*** Switch Case    ----> avalia uma expressão e, em seguida, compara o valor da expressão com cada caso
 (case) em uma lista. Se um caso corresponder ao valor da expressão, o código dentro desse caso é executad
o. Se nenhum dos casos corresponder ao valor da expressão, o código dentro do bloco "default" é executado.
*/

//------------------------------------ Ex: 001 ------------------------------------

const temperature = 36

switch (temperature) {
    case 30:
        console.log('A pessoa está com a temperatura MUITO a baixo do normal')
        break;  // sem ele o sistema mais continuar indetermidado ate o BREAK

    case 33:
        console.log('A pessoa está com a temperatura a baixo do normal')
        break;
    case 36:
        console.log('A pessoa está com a temperatura normal')
        break;

    default:
        console.log('Temperatura não encontrada')
}

//------------------------------------ Ex: 002 ------------------------------------

const bool = false

switch (bool) {
    case true:
        console.log("it's true")
        break;

    case false:
        console.log("it's false")
        break;

    default:
        console.log('Something wrong is not right')
        break;
}
















