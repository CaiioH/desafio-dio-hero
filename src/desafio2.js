class Heroi {
    constructor(vitorias, derrotas) {
        this.qtVitorias = vitorias;
        this.qtDerrotas = derrotas;
    }

    get saldoVitorias() {
        saldo = calculaVitorias(this.qtVitorias, this.qtDerrotas);
        return saldo;
    }

    get ranking() {
        return ranking(this.saldoVitorias);
    }

    toString() {
        return `\nO Herói tem ${this.saldoVitorias} de saldo de vitórias e está no ranking ${this.ranking}.`;
    }

}

function ranking(valor) {
    if (valor < 10) {
        return 'Ferro';
    } else if (valor < 20) {
        return 'Bronze';
    } else if (valor < 50) {
        return 'Prata';
    } else if (valor < 60) {
        return 'Ouro';
    } else if (valor < 70) {
        return 'Platina';
    } else if (valor < 80) {
        return 'Diamante';
    } else if (valor < 90) {
        return 'Ascendente';
    } else if (valor < 100) {
        return 'Imortal';
    } else {
        return 'Radiante';
    }
}

function calculaVitorias(vitorias, derrotas) {
    saldo = vitorias - derrotas;
    return saldo;
}


function main() {
    while (true) {
        const prompt = require('prompt-sync')();

        let qtVitorias = parseInt(prompt('Quantidade de vitórias: '));
        let qtDerrotas = parseInt(prompt('Quantidade de derrotas: '));

        const heroi = new Heroi(qtVitorias, qtDerrotas);
        console.log(heroi.toString());

        let resp = prompt('Quer continuar? [s/n] ').toLowerCase().trim();
        if (resp === 'n') {
            console.log('\nPrograma encerrado!');
            break;
        }
    }

}


main();