# Blissfields

## Objetivo do Projeto

O Blissfields tem como objetivo desenvolver um aplicativo de saúde mental que permite aos usuários monitorar seu bem-estar emocional diariamente. Os usuários podem avaliar "como se sentem hoje" usando uma nota acompanhada de um emoji representando seu humor. O aplicativo gera gráficos para traçar os "moods" ao longo do mês ou de períodos específicos, e oferece uma rede social simples onde os usuários podem postar "tweets" com seu humor associado. Além disso, há seções dedicadas a conteúdos como livros de autoajuda e canais de psicólogos. 

O aplicativo também inclui funcionalidades como dark mode/white mode, uma mensagem motivacional aleatória ao abrir o app, e a possibilidade de CRUDs para gerenciar tweets, usuários e o humor diário. 

Curtidas e comentários nos tweets são desabilitados para manter o foco no bem-estar pessoal.


### 🔧 Instalação

- Clone o repositório:
- git clone https://github.com/lucylima/pda-projeto-final-m5-backend.git

- Instale as dependências:
- npm install

- Configure o arquivo .env 

- Execute o servidor:
- npm run dev


### 🔩 Funcionalidades

- CRUD de usuários
- CRUD de "moods" diários
- CRUD de "tweets"
- Autenticação de usuários



### ⌨️ E testes de estilo de codificação

### Endpoints

  ### Usuários
- POST /usuarios: Cria um novo usuário.
- GET /usuarios: Lista todos os usuários.
- PUT /usuarios/:id: Atualiza um usuário.
- DELETE /usuarios/:id: Remove um usuário.

  ###Moods
- POST /moods: Registra o mood do dia.
- GET /moods: Lista os moods.

  ###Tweets
- POST /tweets: Cria um tweet.
- GET /tweets: Lista todos os tweets.


## 🛠️ Construído com:

- Node.js
- Express
- MongoDB
- JWT para autenticação


## 📄 Licença

.
