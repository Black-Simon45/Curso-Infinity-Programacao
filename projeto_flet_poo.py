class Cliente:
    def __init__(self, id_cliente, nome):
        self.id_cliente = id_cliente
        self.nome = nome
        self.historico_reservas = []
        self.pontos_fidelidade = 0

    def adicionar_reserva(self, reserva):
        self.historico_reservas.append(reserva)
        self.pontos_fidelidade += 10  # Adiciona pontos de fidelidade

    def calcular_desconto(self):
        # 10% de desconto para clientes com mais de 50 pontos
        return 0.1 if self.pontos_fidelidade >= 50 else 0.0


class Quarto:
    def __init__(self, numero, tipo, preco):
        self.numero = numero
        self.tipo = tipo
        self.preco = preco
        self.disponivel = True


class Reserva:
    def __init__(self, cliente, quarto, data_entrada, data_saida, preco_final):
        self.cliente = cliente
        self.quarto = quarto
        self.data_entrada = data_entrada
        self.data_saida = data_saida
        self.preco_final = preco_final
        self.confirmada = False

    def confirmar_reserva(self):
        self.confirmada = True
        self.quarto.disponivel = False


class GerenciadorDeReservas:
    def __init__(self):
        self.reservas = []
        self.clientes = []
        self.quartos = []

    def adicionar_cliente(self, cliente):
        self.clientes.append(cliente)

    def adicionar_quarto(self, quarto):
        self.quartos.append(quarto)

    def fazer_reserva(self, cliente, quarto, data_entrada, data_saida):
        desconto = cliente.calcular_desconto()
        preco_final = quarto.preco * (1 - desconto)
        nova_reserva = Reserva(cliente, quarto, data_entrada, data_saida, preco_final)
        cliente.adicionar_reserva(nova_reserva)
        self.reservas.append(nova_reserva)
        return nova_reserva

    def processar_pagamento(self, reserva, valor):
        # Simulação de integração com serviço de pagamento (PayPal/Stripe)
        if valor >= reserva.preco_final:
            reserva.confirmar_reserva()
            return True
        else:
            return False


import flet as ft

def tela_principal(page, gerenciador):
    page.title = "Sistema de Reservas de Hotel"
    page.add(ft.Text("Lista de Quartos Disponíveis"))

    for quarto in gerenciador.quartos:
        if quarto.disponivel:
            page.add(ft.Text(f"Quarto {quarto.numero} - {quarto.tipo} - R${quarto.preco}/noite"))
            page.add(ft.ElevatedButton("Reservar", on_click=lambda e, q=quarto: tela_reserva(page, gerenciador, q)))


def tela_reserva(page, gerenciador, quarto):
    page.clean()
    page.add(ft.Text(f"Reserva para Quarto {quarto.numero}"))

    cliente_nome = ft.TextField(label="Nome do Cliente")
    data_entrada = ft.TextField(label="Data de Entrada")
    data_saida = ft.TextField(label="Data de Saída")
    page.add(cliente_nome, data_entrada, data_saida)

    def confirmar_reserva(e):
        cliente = next((c for c in gerenciador.clientes if c.nome == cliente_nome.value), None)
        if not cliente:
            cliente = Cliente(id_cliente=str(len(gerenciador.clientes) + 1), nome=cliente_nome.value)
            gerenciador.adicionar_cliente(cliente)

        reserva = gerenciador.fazer_reserva(cliente, quarto, data_entrada.value, data_saida.value)
        page.add(ft.Text(f"Reserva criada para {cliente.nome}. Valor a pagar: R${reserva.preco_final}"))
        page.add(ft.ElevatedButton("Pagar", on_click=lambda e: tela_pagamento(page, gerenciador, reserva)))

    page.add(ft.ElevatedButton("Confirmar Reserva", on_click=confirmar_reserva))


def tela_pagamento(page, gerenciador, reserva):
    page.clean()
    page.add(ft.Text(f"Pagamento para Reserva do Quarto {reserva.quarto.numero}"))

    valor_pagamento = ft.TextField(label="Valor do Pagamento")
    page.add(valor_pagamento)

    def confirmar_pagamento(e):
        valor = float(valor_pagamento.value)
        if gerenciador.processar_pagamento(reserva, valor):
            page.add(ft.Text("Pagamento confirmado e reserva completada!"))
        else:
            page.add(ft.Text("Erro: Valor insuficiente para confirmar o pagamento."))

    page.add(ft.ElevatedButton("Confirmar Pagamento", on_click=confirmar_pagamento))


def main(page):
    gerenciador = GerenciadorDeReservas()
    gerenciador.adicionar_quarto(Quarto(numero=101, tipo="Simples", preco=200))
    gerenciador.adicionar_quarto(Quarto(numero=102, tipo="Duplo", preco=300))

    tela_principal(page, gerenciador)

ft.app(target=main)




