
class Heroi:
    def __init__(self, nome, idade, tipo, arma):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo
        self.arma = arma
        
    def atacar(self):
        return f"\n{self.nome}, da classe {self.tipo}, atacou usando {self.arma} !!!"
 
# -- TIPOS DE HEROIS --     
class Guerreiro(Heroi):
    def __init__(self, nome, idade):
        super().__init__(nome, idade, 'Guerreiro', 'espada')


class Mago(Heroi):
    def __init__(self, nome, idade):
        super().__init__(nome, idade, 'Mago', 'magia')


class Monge(Heroi):
    def __init__(self, nome, idade):
        super().__init__(nome, idade, 'Monge', 'artes marciais')


class Ninja(Heroi):
    def __init__(self, nome, idade):
        super().__init__(nome, idade, 'Ninja', 'shurikens')
# -- FIM TIPOS DE HEROIS --

def escolhe_tipo(nome, idade):
    print('\nEscolha a classe(tipo) do Herói:')
    valor = int(input('1: Guerreiro \n2: Mago \n3: Monge \n4: Ninja \n\n▶ '))
    if valor == 1:
        return Guerreiro(nome,idade)
    
    elif valor == 2:
        return Mago(nome,idade)
    
    elif valor == 3:
        return Monge(nome,idade)
    
    elif valor == 4:
        return Ninja(nome,idade)
    
    else:
        print('Opção inválida, escolhendo NPC.')
        return Heroi(nome, idade, 'NPC', 'nenhuma arma')


def main():
    while True:
        nome = input('Digite o nome do Herói: ').strip().capitalize()
        idade = int(input('Digite a idade do Herói: '))
        
        heroi = escolhe_tipo(nome, idade)
        print(heroi.atacar())
        
        resp = input('\nQuer continuar? [s/n] ').lower().strip()
        if resp == 'n':
            print('Fim do programa.')
            break
main()