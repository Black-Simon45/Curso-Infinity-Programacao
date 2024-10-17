class Animal:
    def fazerSom(self):
        pass

class Cachorro(Animal):
    def fazerSom(self):
        return "Auau"

class Gato(Animal):
    def fazerSom(self):
        return "Miau"

def fazerAnimalFalar(animal):
    return animal.fazerSom()

Rex = Cachorro()
Tiger = Gato()


animais = [Rex, Tiger]

for animal in animais:
    print(animal.__class__.__name__, "faz", fazerAnimalFalar(animal))