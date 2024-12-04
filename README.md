
# Blissfields Notes API

Uma API feita para o aplicativo web e mobile [Blissfields Notes](https://blissfieldsnotes.vercel.app).
A API tem como objetivo permitir aos usuários monitorar seu bem-estar emocional diariamente. Os usuários podem avaliar "como se sentem hoje" usando uma nota acompanhada de um emoji representando seu humor.  A API também oferece uma rede social simples onde os usuários podem postar "bits" com seu humor associado.

## Sumário
- [Instalação](#instalação)
- [Uso](#uso)
- [Documentação da API](#documentação-da-api)
- [Licença](#license)


## Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/lucylima/blissfields-notes-backend.git
   cd blissfields-notes-backend
   ```
   
2.  Instale as dependências
    
    ```bash
    npm install
    ```
    
3.  Defina as variáveis de ambiente
    -   Crie um arquivo chamado `.env`  na raiz do projeto.
    -   Adicione as seguintes variáveis de ambiente:
        ```env
        DATABASE_URL=sua_string_do_banco_de_dados
        PORT=3000
        ```
        
4.  Inicie o servidor de desenvolvimento
    
    ```bash
    npm run dev
    ```

## Uso

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`. Use ferramentas como cURL, Postman ou Insomnia para testar os endpoints da aplicação


## Documentação da API

### Usuários

| **Método** | **Endpoint**         | **Descrição**                                                                   |
|------------|----------------------|---------------------------------------------------------------------------------|
| POST       | `/login`            | Autentica um usuário e retorna um token de sessão. **Requer um request body.** |
| POST       | `/user`             | Registra um novo usuário. **Requer um request body.**                          |
| GET        | `/alluser`          | Recupera uma lista de todos os usuários.                                       |
| PUT        | `/user/:user_id`    | Edita os detalhes de um usuário pelo seu ID. **Requer um request body.**                                     |
| DELETE     | `/user/:user_id`    | Remove um usuário pelo seu ID.                                                 |

### Notas

| **Método** | **Endpoint**         | **Descrição**                                                                   |
|------------|----------------------|---------------------------------------------------------------------------------|
| POST       | `/notes`            | Cria uma nova nota. **Requer um request body.**                                |
| GET        | `/notes`            | Recupera todas as notas.                                                       |
| GET        | `/notes/:notes_id`  | Recupera uma nota específica pelo seu ID.                                      |
| PUT        | `/notes/:notes_id`  | Atualiza uma nota pelo seu ID. **Requer um request body.**                                             |
| DELETE     | `/notes/:notes_id`  | Deleta uma nota pelo seu ID.                                                   |

### Bits

| **Método** | **Endpoint**         | **Descrição**                                                                   |
|------------|----------------------|---------------------------------------------------------------------------------|
| POST       | `/bits`             | Cria um novo bit. **Requer um request body.**                                  |
| GET        | `/bits`             | Recupera todos os bits.                                                        |
| GET        | `/bits/:user_id`    | Recupera todos os bits criados por um usuário específico.                      |
| PUT        | `/bits/:bits_id`    | Atualiza um bit pelo seu ID. **Requer um request body.**   |
| DELETE     | `/bits/:bits_id`    | Deleta um bit pelo seu ID.                                                     |

### Corpos da requisição

**POST  /login**
```json
{
	"email": "seu@email.com",
	"password": "suaSenha"
}
``` 
**POST /user**
```json
{
	"username": "John Doe",
	"email": "seu@email.com",
	"password": "suaSenha"
}
```
**POST /notes**
```json
{
	"title": "Bolo de chocolate",
	"text": "Hoje me sinto feliz! comi um bolo de chocolate",
	"mood": "feliz",
	"user_id": "7ba1a42d-934e-4695-9b03-456acf0294e0" // exemplo de ID UUID4
}
```
**POST /bits**
```json
{
	 "text": "Hoje eu comi uma maçã, me deixou feliz."
	 "user_id": "7ba1a42d-934e-4695-9b03-456acf0294e0" // exemplo de ID UUID4
}
```
## Licença
This project is licensed under the MIT License - see the LICENSE file for details.
