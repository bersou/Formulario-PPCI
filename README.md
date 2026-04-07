# 🚒 Sistema Integrado PPCI - CBMRS

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

> Este é um Progressive Web App (PWA) desenvolvido em React (via CDN), projetado para **automatizar, facilitar e modernizar** o preenchimento do formulário do Plano de Prevenção e Proteção Contra Incêndios (PPCI).

---

## ✨ Destaques do Projeto

- **100% Client-Side:** Não requer servidor ou banco de dados. Toda a lógica de formatação de documento acontece localmente no navegador do usuário (livre de custos de hospedagem com backend).
- **Integração com WhatsApp:** Ao finalizar o processo, a aplicação gera automaticamente a mensagem formatada para vistoria e direciona o usuário para o WhatsApp.
- **Geração Automática de PDF:** O sistema captura as entradas de dados (responsável, endereço via CEP, características da edificação e medidas preventivas) e constrói de forma assíncrona um PDF timbrado e oficializado usando a biblioteca **jsPDF**.
- **ViaCEP Integrado:** Preenchimento automático e inteligente de endereços.
- **Interface Glassmorphism & UI 3D:** Fundo cinematográfico dinâmico com partículas de brasa animadas, sobreposição translúcida e brasão oficial em perspectiva 3D.

---

## 🛠️ Stack Tecnológico

| Tecnologia | Uso |
|---|---|
| **HTML5 / CSS3** | Estrutura base, metadados Open Graph e manifesto PWA |
| **React 18** | Renderização da interface via Babel Standalone, `useState`, `useEffect` |
| **Tailwind CSS** | Estilização rápida, responsividade e efeitos de glassmorphism |
| **Lucide Icons / SVG** | Ícones vetoriais componentizados em React puro |
| **jsPDF** | Geração de PDF estruturado e oficial no lado do cliente |

---

## 🚀 Como Executar Localmente

> Não há necessidade de `npm install` ou servidores Node.js.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/bersou/Formulario-PPCI.git
   ```

2. **Abra o arquivo** `index.html` em qualquer navegador moderno (Chrome, Edge, Safari).

3. **Preencha os dados** — use um CEP real para ver o autopreenchimento via ViaCEP.

4. **No Passo 4**, clique no botão verde **"Protocolar e Abrir WhatsApp"**.

5. O **PDF oficial** será baixado automaticamente e o WhatsApp abrirá com a mensagem formatada.

---

## 📱 Instalação PWA (Dispositivos Móveis)

1. Acesse o link do projeto hospedado (ex: GitHub Pages) no navegador móvel.
2. Nas opções do navegador, clique em **"Adicionar à Tela Inicial"**.
3. O app será instalado com o Brasão Oficial como ícone, abrindo em tela cheia com experiência nativa.

---

## ⚠️ Aviso

> Este software é um **projeto experimental** focado em usabilidade e Design Front-end. Não possui integração ou vínculo oficial com o portal governamental. Os logotipos servem estritamente para simulação do fluxo operacional do projeto.
