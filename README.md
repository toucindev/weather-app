# 🌤️ Clima em Cidades

> Um pequeno projeto feito em **Node.js** que permite consultar a temperatura atual, sensação térmica e condição do tempo de uma ou várias cidades — direto no terminal!

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![axios](https://img.shields.io/badge/axios-0.27.2-blue?style=flat-square)
![chalk](https://img.shields.io/badge/chalk-5.x-green?style=flat-square)

---

## ✨ Funcionalidades

- Consulta de **clima atual** em múltiplas cidades
- Busca **simultânea** usando \`Promise.all\`
- Exibe:
  - 🌡️ Temperatura atual
  - 🤒 Sensação térmica
  - ☁️ Condição do tempo (ex: "Parcialmente nublado")

---

## 📦 Dependências

| Pacote                              | Função                                   |
|-------------------------------------|------------------------------------------|
| [`axios`](https://www.npmjs.com/package/axios) | Requisições HTTP para a API wttr.in      |
| [`chalk`](https://www.npmjs.com/package/chalk) | Estiliza a saída do terminal com cores   |

Para instalar as dependências:

`bash npm install`

---

## 🚀 Como executar

1. Clone o repositório:

`bash git clone https://github.com/toucindev/weather-app`

2. Acesse a pasta do projeto:

`bash cd weather-app`

3. Instale as dependências:

`bash npm install`

4. Execute o projeto:

`bash node main.js`

---

## 🧠 Como usar

Digite o nome de uma ou mais cidades (separadas por vírgula) quando solicitado:

`Digite o nome das cidades (separadas por vírgula): São Paulo, Rio de Janeiro, Recife`

Saída esperada:

`🌤️ Clima em São Paulo:\n🌡️ Temperatura atual: 28°C\n🤒 Sensação térmica: 29°C\n☁️ Condição: Parcialmente nublado`

`🌤️ Clima em Rio de Janeiro:\n🌡️ Temperatura atual: 30°C\n🤒 Sensação térmica: 32°C\n☁️ Condição: Ensolarado`

---

## 🧪 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [axios](https://axios-http.com/)
- [chalk](https://www.npmjs.com/package/chalk)

---

Feito com 💻 e ☕ por [toucindev](https://github.com/toucindev)
