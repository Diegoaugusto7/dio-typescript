// Como podemos melhorar o esse código usando TS? 

//Resolução do Desafio-2

enum Profissao {
    Atriz,
    Padeiro
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}


const pessoa1 : pessoa = {
nome : "Maria",
idade : 29,
profissao : Profissao.Atriz
}

const pessoa2 : pessoa = {
    nome : "Roberto",
    idade : 19,
    profissao : Profissao.Padeiro
    }

const pessoa3 : pessoa = {
    nome : "laura",
    idade : 32,
    profissao : Profissao.Atriz
     }
    

const pessoa4 : pessoa = {
    nome : "Carlos",
    idade : 19,
    profissao : Profissao.Padeiro
       }
//




