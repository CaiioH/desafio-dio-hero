from datetime import datetime

class Hero:
    def __init__(self, nome, qt_xp):
        self.nome = nome
        self.qt_xp = qt_xp
        
    @property
    def nivel(self):
        self._nivel = define_level(self.qt_xp)
        return self._nivel
             
    def __str__(self):
        return f"""
            Herói: {self.nome}
            XP: {self.qt_xp}
            Nivel: {self.nivel}
        """
    
def define_level(lvl):
    if lvl < 1000:
        return 'Ferro'
    elif lvl < 2000:
        return 'Bronze'
    elif lvl < 5000:
        return 'Prata'
    elif lvl < 6000:
        return 'Ouro'
    elif lvl < 7000:
        return 'Platina'
    elif lvl < 8000:
        return 'Diamante'
    elif lvl < 9000:
        return 'Ascendente'
    elif lvl < 10000:
        return 'Imortal'
    else:
        return 'Radiante'  


def log_transacao(func):
    def envelope(*args, **kwargs):
        resultado = func(*args, **kwargs)
        print(f'{datetime.now()}: {func.__name__.upper()}')
        return resultado    
    
    return envelope


@log_transacao
def listar_herois(herois):
    if herois == []:
        print('&@? Nenhum Herói encontrado! &@?')
    else:
        for heroi in herois:
            print('=' * 50)
            print(str(heroi))    


def main():
    herois = []
    while True:
        nome = input('Digite o nome do Herói: ')
        xp = float(input('Digite a quantidade de XP do Herói: '))
        heroi = Hero(nome, xp)
        herois.append(heroi)
        
        resp = input('Quer continuar? [s/n] ').lower().strip()
        if resp == 'n':
            listar_herois(herois)
            break
        
main()
        