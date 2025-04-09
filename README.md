# setup-api-nodejs

**Descrição Breve:**
Este projeto tem como objetivo disponibilizar um setup pré-configurado, contendo suas configurações e dependencias, para quem deseja iniciar o desenvolvimento de uma API usando Typescript e Nodejs.

## 🛠 Tecnologias Utilizadas

- Nodejs [v22.14.0]
- Typescript [^5.8.3]
- Express [^5.1.0]
- tsc-watch [^6.2.1]
- mongoose: [^8.13.2]
- dotenv: [^16.4.7]
- MongoDB Compass: [Version 1.46.0]

## 📋 Pré-requisitos

Certifique-se de ter instalado:

- Nodejs (versão recomendada 22.14.0+)
- npm (versão recomendada 11.2.0+)
- MongoDB Compassas (versão recomendada 1.46.0)

## 🚀 Configuração e Instalação

1. Clone o repositório:

```bash
    git clone https://github.com/JoelcioFacanha/setup-api-nodejs.git
```

2. Entre na pasta do projeto (Lembrando que você pode renomear o diretório do projeto para qualquer nome que você deseje.):

   cd [diretorio-do-projeto]

3. Instale as dependências:

   npm install

▶️ Como Executar a API

1. Execute o comando:

   npm start

2. Você receberá as seguintes mensagens no terminal:

Servidor ativo na port: 3000
Banco mongodb conectado!

3. Testando a API (Abra o seu browser):

   Digite a url: http://localhost:3000/test

4. Você deve receber a seguinte resposta no browser:

   > {"message":"Api está ativa e funcional!"}

📁 Estrutura de Pastas

- src/ - Código fonte principal.
- controllers/ - Gerencia requisições.
- dtos/ - Data Transfer Object (DTO)
- models/ - Modelos e interfaces TypeScript.
- routes/ - Define as rotas da API.
- services/ - Serviços da API.

💡 Funcionalidades

- CRUD de usuários.
  - GET: localhost:3000/users - Lista TODOS os usuários cadastrados
  - GET: localhost:3000/users/:id - Obtém os dados de um usuário especifico
  - POST: localhost:3000/users - Cadastra um único usuário
  - PUT: localhost:3000/users/:id - Atualiza os dados de um usuário especifico
  - DELETE: localhost:3000/users/:id - Excluí um usuário especifico
  - POST: localhost:3000/registers - Cadastra uma lista de usuários
