cat << 'EOF' > README.md
# 🌤️ Clima em Cidades

> Um pequeno projeto feito em **Node.js** que permite consultar a temperatura atual, sensação térmica e condição do tempo de uma ou várias cidades simultaneamente — direto no terminal!

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![axios](https://img.shields.io/badge/axios-0.27.2-blue?style=flat-square)
![chalk](https://img.shields.io/badge/chalk-5.x-green?style=flat-square)

---

## ✨ Funcionalidades

- Consulta de **clima atual** em múltiplas cidades
- Busca **simultânea** usando \`Promise.all\`
- Mostra:
  - 🌡️ Temperatura atual
  - 🤒 Sensação térmica
  - ☁️ Condição do tempo (ex: "Parcialmente nublado")

---

## 📦 Dependências

| Pacote  | Função                                      |
|---------|---------------------------------------------|
| [\`axios\`](https://www.npmjs.com/package/axios) | Requisições HTTP para API wttr.in     |
| [\`chalk\`](https://www.npmjs.com/package/chalk) | Estiliza o terminal com cores         |

Instale tudo com:

\`\`\`bash
npm install
\`\`\`

---

## 🚀 Como executar

1. Clone o repositório:

\`\`\`bash
git clone https://github.com/toucindev/weather-app
\`\`\`

2. Acesse a pasta do projeto:

\`\`\`bash
cd weather-app
\`\`\`

3. Instale as dependências:

\`\`\`bash
npm install
\`\`\`

4. Rode o projeto:

\`\`\`bash
node main.js
\`\`\`

---

## 🧠 Como usar

Digite o nome de uma ou mais cidades (separadas por vírgula) quando solicitado:

\`\`\`bash
Digite o nome das cidades (separadas por vírgula): São Paulo, Rio de Janeiro, Recife
\`\`\`

Saída esperada:

\`\`\`
🌤️ Clima em São Paulo:
🌡️ Temperatura atual: 28°C
🤒 Sensação térmica: 29°C
☁️ Condição: Parcialmente nublado

🌤️ Clima em Rio de Janeiro:
🌡️ Temperatura atual: 30°C
🤒 Sensação térmica: 32°C
☁️ Condição: Ensolarado
\`\`\`

---

## 🧪 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [axios](https://axios-http.com/)
- [chalk](https://www.npmjs.com/package/chalk)

---

Feito com 💻 e ☕ por [toucindev](https://github.com/toucindev)
EOF
