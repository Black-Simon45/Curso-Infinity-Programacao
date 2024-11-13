class ContaBancaria:
    def __init__(self, titular, saldo_inicial=0):
        self._titular = titular
        self._saldo = saldo_inicial

    def exibir_saldo(self):
        print(f"Saldo atual: R$ {self._saldo:.2f}")

    def depositar(self, valor):
        if valor > 0:
            self._saldo += valor
            print(f"Depósito de R$ {valor:.2f} realizado.")
        else:
            print("Valor de depósito inválido.")

    def sacar(self, valor):
        if 0 < valor <= self._saldo:
            self._saldo -= valor
            print(f"Saque de R$ {valor:.2f} realizado.")
        else:
            print("Saque inválido ou saldo insuficiente.")


conta = ContaBancaria("João", 1000)
conta.exibir_saldo()     # Saldo atual: R$ 1000.00
conta.depositar(200)     # Depósito de R$ 200.00 realizado.
conta.exibir_saldo()     # Saldo atual: R$ 1200.00
conta.sacar(300)         # Saque de R$ 300.00 realizado.
conta.exibir_saldo()     # Saldo atual: R$ 900.00
