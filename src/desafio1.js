class Hero {
    constructor(nome, qtXP) {
        this.nome = nome;
        this.qtXP = qtXP;
    }

    get nivel() {
        return this.define_level(this.qtXP);
    }

    define_level(lvl) {
        if (lvl < 1000) {
            return 'Ferro';
        } else if (lvl < 2000) {
            return 'Bronze';
        } else if (lvl < 5000) {
            return 'Prata';
        } else if (lvl < 6000) {
            return 'Ouro';
        } else if (lvl < 7000) {
            return 'Platina';
        } else if (lvl < 8000) {
            return 'Diamante';
        } else if (lvl < 9000) {
            return 'Ascendente';
        } else if (lvl < 10000) {
            return 'Imortal';
        } else {
            return 'Radiante';
        }
    }

    toString() {
        return `
            Herói: ${this.nome}
            XP: ${this.qtXP}
            Nivel: ${this.nivel}
        `;
    }

}


function listarHerois(herois) {
    if (herois.length === 0) {
        console.log('&@? Nenhum Herói encontrado! &@?');
    } else {
        herois.forEach(heroi => {
            console.log('='.repeat(50));
            console.log(heroi.toString());
        });
    }

}


function main() {
    let herois = [];
    const prompt = require('prompt-sync')();
    do {
        let nome = prompt("Digite o nome do Herói: ");
        let xp = parseFloat(prompt("Digite a quantidade de XP do Herói: "));

        const heroi = new Hero(nome, xp);
        herois.push(heroi);

        resp = prompt('Quer continuar? [s/n] ').toLowerCase().trim();

    } while (resp !== 'n');
    listarHerois(herois);

}

main();


