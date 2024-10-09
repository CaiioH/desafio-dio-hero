const prompt = require('prompt-sync')();

class Heroi {
    constructor(nome, idade, tipo, arma) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.arma = arma;
    }

    atacar() {
        return `\n${this.nome}, da classe ${this.tipo}, atacou usando ${this.arma} !!!`;
    }
}

// -- TIPOS DE HEROIS --

class Guerreiro extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, 'Guerreiro', 'espada');
    }
}

class Mago extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, 'Mago', 'magia');
    }
}

class Monge extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, 'Monge', 'artes marciais');
    }
}

class Ninja extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, 'Ninja', 'shirikens');
    }
}
// -- FIM TIPOS DE HEROIS --


function escolheTipo(nome, idade) {
    console.log('\nEscolha a classe(tipo) do Herói:');
    let valor = parseInt(prompt('1: Guerreiro \n2: Mago \n3: Monge \n4: Ninja \n\n▶ '));

    if (valor === 1) {
        return new Guerreiro(nome, idade);
    } else if (valor === 2) {
        return new Mago(nome, idade);
    } else if (valor === 3) {
        return new Monge(nome, idade);
    } else if (valor === 4) {
        return new Ninja(nome, idade);
    } else {
        console.log('Opção inválida, escolhendo NPC.');
        return new Heroi(nome, idade, 'NPC', 'nenhuma arma');
    }
}

function main() {
    while (true) {
        let nome = prompt('Digite o nome do Herói: ').trim();
        if (!nome) {
            console.log('Nome não pode estar vazio. Tente novamente.');
            continue; // Pede novamente o nome
        }

        let idade = parseInt(prompt('Digite a idade do Herói: '));
        if (isNaN(idade) || idade <= 0) {
            console.log('Idade inválida. Deve ser um número positivo. Tente novamente.');
            continue; // Pede novamente a idade
        }

        const heroi = escolheTipo(nome, idade);
        console.log(heroi.atacar());

        let resp = prompt('\nQuer continuar? [s/n] ').toLowerCase().trim();
        if (resp === 'n') {
            console.log('Fim do programa.');
            break;
        }
    }
}

main();
