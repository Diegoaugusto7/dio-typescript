// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*
let employee = {};
employee.code = 10;
employee.name = "John";
*/

//Resposta do Desafio
//Parte1
const employee = { 
    code: 10,
    name:'John'
}



//Parte 2
const funcionario : {code:number,name:string} ={
    code:employee.code,
    name:employee.name
}
//Parte 3 - criando mais um exemplo, para verificar.

const employee2 = { 
    code: 19,
    name:'Diego'
}

const funcionario2 : {code:number,name:string} ={
    code:employee2.code,
    name:employee2.name
}

//verificando se está indo certo.
console.log(funcionario, funcionario2)

