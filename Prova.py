import flet as ft

def main(page: ft.Page):
    page.title = "Formulário de Contato"

    nome = ft.TextField(label="Nome", width=300)

    email = ft.TextField(label="Email", width=300)

    mensagem = ft.TextField(label="Mensagem", multiline=True, width=300, height=150)
    
    def enviar_formulário(e):
        if nome.value and email.value and mensagem.value:
            page.add(ft.Text(f"Formulário enviado com sucesso! Obrigado, {nome.value}.", color="green"))

            nome.value = ""
            email.value = ""
            mensagem.value = ""
            page.update()

        else:
            page.add(ft.Text("Por favor, preencha todos os campos.", color="red"))
            page.update()

    enviar_btn = ft.ElevatedButton("Enviar", on_click=enviar_formulário)

    page.add(
        ft.Column([
            ft.Text("Formulário de Contato", style="hedlineMedium"),
            nome,
            email, 
            mensagem,
            enviar_btn
        ], alignment=ft.MainAxisAlignment.CENTER)
    )  

if __name__ == "__main__":
    ft.app(target=main)              