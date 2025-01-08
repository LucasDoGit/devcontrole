<div style="display: flex; flex-direction: column; text-align: center;">
    <h1>DevControle - Sistema de chamados</h1>
    <img style="max-width: 1024px; margin: auto;" src="public/github/1.png" alt="preview do site">
</div>

## Sumário

- [\[DevControle\]](#)
  - [Sumário](#sumário)
  - [Introdução](#introdução)
  - [Tecnologias Usadas](#tecnologias-usadas)
  - [Snapshots](#snapshots)
  - [Ambiente de desenvolvimento](#ambiente-de-desenvolvimento)
  - [Informações Técnicas](#informações-técnicas)
  - [Como Executar o Projeto](#como-executar-o-projeto)
  - [Contato](#contato)

## Introdução

Este projeto é um sistema de chamados, com objetivo de organizar solicitações ou tarefas de uma empresa. A aplicação utiliza Next.js 14 com App Router, com recursos de renderização SSR e CSR, para garantir uma otimização na lado do cliente e servidor. O sistema também conta com autenticação via conta Google atráves do NextAuth e o gerenciamento dos dados é feito com o MongoDB, utilizando Prisma como ORM.

## Tecnologias Usadas

![NextJS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)&nbsp;
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;

## Ambiente de desenvolvimento

- Virtual Studio Code - Version 1.96.2
- GitHub Desktop - Version 3.4.12 
- Node.js - Version 22.11.0
- MongoDB Atlas
- Google Cloud

## Informações técnicas

- Utilizado Next 14 com App Router;
- Utilizado TypeScript;
- Armazenamentos dos dados no MongoDB integrado com Prisma ORM;
- Validação dos formulários com Zod;
- Requisições feitas com Axios;
- Utilizado regras e padrões do Prettier;

## Snapshots

### Home

<img src="public/github/1.png" alt="home" width="683">

### Chamados

<img src="public/github/2.png" alt="servicos" width="683">

### Cadastro de chamados

<img src="public/github/3.png" alt="contato" width="683">

### Visualizando chamados

<img src="public/github/4.png" alt="Pagina de servico" width="683">

### Clientes cadastrados

<img src="public/github/5.png" alt="cosmic cms" width="683">

### Cliente abrindo chamados sem login

<img src="public/github/6.png" alt="retorno api" width="683">

## Como Executar o Projeto

Para executar o projeto siga as instruções:

1. Clone o repositório:

```bash
git clone https://github.com/LucasDoGit/devcontrole
cd devcontrole
```

2. Instale as dependências:

```bash
npm install
```

3. Crie o arquivo *.env* na raiz do projeto e configure as variáveis de ambiente, conforme abaixo.

```javascript
HOST_URL=/* "http://localhost:3000" ou a URL do seu site*/
NODE_ENV=/* "development" para desenvolvimento ou "production" para produção*/

NEXTAUTH_URL=/* "http://localhost:3000" ou a URL do seu site*/
NEXTAUTH_SECRET=/*crie um chave aleatória*/

DATABASE_URL=/*url de acesso ao seu MongoDB*/
/* exemplo (não deixe os espaços) */
DATABASE_URL="mongodb+srv://lucastimoteo: ${senha_de_acesso} @devcontrole.llv6c.mongodb.net/ ${collection} ?retryWrites=true&w=majority&appName= ${appname} "


AUTH_GOOGLE_ID=/* id do seu projeto no google cloud */
AUTH_GOOGLE_SECRET=/* chave secreta do seu projeto */
```

4. Crie os schemas no MongoDB usando o comando.

```bash
npx prisma generate
```

5. use o comando abaixo para iniciar o projeto e aguarde.

```bash
npm run dev
```

6. Feito! O projeto deve ser iniciado e pode ser acesso usando um navegador pela url "http://localhost:3000"

## Contato

Para obter mais informações, entre em contato comigo em:

- Email: lucas.saiz19@gmail.com
- GitHub: https://github.com/LucasDoGit