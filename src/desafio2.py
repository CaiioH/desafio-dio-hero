class Heroi:
    def __init__(self, vitorias, derrotas):
        self.qt_vitorias = vitorias
        self.qt_derrotas = derrotas
        
    @property
    def saldo_vitorias(self):
        saldo = calcula_vitorias(self.qt_vitorias, self.qt_derrotas)
        return saldo
        
    @property
    def ranking(self):
        self._ranking = ranking(self.saldo_vitorias)
        return self._ranking
    
    def __str__(self):
        return f'\nO Herói tem {self.saldo_vitorias} de saldo de vitórias e está no ranking {self.ranking}'


def ranking(valor):
    if valor < 10:
        return 'Ferro'
    elif valor < 20:
        return 'Bronze'
    elif valor < 50:
        return 'Prata'
    elif valor < 60:
        return 'Ouro'
    elif valor < 70:
        return 'Platina'
    elif valor < 80:
        return 'Diamante'
    elif valor < 90:
        return 'Ascendente'
    elif valor < 100:
        return 'Imortal'
    else:
        return 'Radiante' 
    
def calcula_vitorias(vitorias, derrotas):
    saldo = vitorias - derrotas
    return saldo


def main():
    while True:
        qt_vitorias = int(input('Quantidade de vitórias: '))
        qt_derrotas = int(input('Quantidade de derrotas: '))
        heroi = Heroi(qt_vitorias, qt_derrotas)
        print(heroi.__str__())
        
        resp = input('Quer continuar? ').lower().strip()
        if resp == 'n':
            print('\nPrograma encerrado!')
            break

main()