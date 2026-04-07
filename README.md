🚒 Sistema Integrado PPCI - CBMRS
<div align="center">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/HTML5-E34F26%3Fstyle%3Dfor-the-badge%26logo%3Dhtml5%26logoColor%3Dwhite" alt="HTML5" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/CSS3-1572B6%3Fstyle%3Dfor-the-badge%26logo%3Dcss3%26logoColor%3Dwhite" alt="CSS3" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/JavaScript-F7DF1E%3Fstyle%3Dfor-the-badge%26logo%3Djavascript%26logoColor%3Dblack" alt="JavaScript" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/React-20232A%3Fstyle%3Dfor-the-badge%26logo%3Dreact%26logoColor%3D61DAFB" alt="React" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Tailwind_CSS-38B2AC%3Fstyle%3Dfor-the-badge%26logo%3Dtailwind-css%26logoColor%3Dwhite" alt="Tailwind CSS" />
</div>
Este é um Progressive Web App (PWA) desenvolvido em React (via CDN) projetado para automatizar, facilitar e modernizar o preenchimento do formulário do Plano de Prevenção e Proteção Contra Incêndios (PPCI).
✨ Destaques do Projeto
100% Client-Side: Não requer servidor ou banco de dados para operar. Toda a lógica de formatação de documento acontece localmente no navegador do usuário (livre de custos de hospedagem com backend).
Integração com WhatsApp: Ao finalizar o processo, a aplicação gera automaticamente a mensagem formatada para vistoria e direciona o usuário para o aplicativo do WhatsApp na mesma hora.
Geração Automática de PDF: O sistema pega as entradas de dados (como responsável, endereço via CEP, características da edificação e medidas preventivas) e constrói de forma assíncrona um PDF timbrado e oficializado (usando a biblioteca estática jsPDF).
ViaCEP Integrado: Preenchimento automático e inteligente de endereços.
Interface Glassmorphism & UI 3D: Fundo cinematográfico dinâmico (com partículas de brasa animadas e vídeo), sobreposição translúcida (Glassmorphism) e brasão oficial interagindo em perspectiva 3D ao passar o mouse.
🛠️ Stack Tecnológico Detalhado
HTML5 / CSS3: Estrutura base, metadados Open Graph (para preview em redes sociais) e manifesto PWA.
React 18: Renderização ágil da interface, componentização e gerenciamento de estados (useState, useEffect) diretamente via Babel Standalone.
Tailwind CSS: Framework utilitário para estilização rápida, responsividade e efeitos de glassmorphism (desfoque e transparência).
Lucide Icons / SVG: Ícones vetoriais componentizados em React puro, garantindo total estabilidade visual.
jsPDF: Biblioteca JavaScript para manipulação, desenho de layouts estruturados e geração do arquivo PDF oficial no lado do cliente.
🚀 Como Executar Localmente e Testar
Não há necessidade de processos de build complexos como npm install ou servidores Node.js.

1. Baixe ou clone este repositório.

git clone [https://github.com/seu-usuario/ppci-cbmrs.git](https://github.com/seu-usuario/ppci-cbmrs.git)


2. Abra o arquivo index.html em qualquer navegador moderno (Chrome, Edge, Safari).

3. Preencha os dados (você pode testar um CEP verdadeiro para ver o autopreenchimento).

4. No Passo 4, clique no botão final verde "Protocolar e Abrir WhatsApp".

5. O PDF oficial será baixado imediatamente no seu computador ou celular, e o navegador abrirá automaticamente o link de conversa do seu WhatsApp com a mensagem formatada.

📱 Instalação PWA (Dispositivos Móveis)
Para usuários de Android ou iOS, a aplicação possui metadados configurados para instalação:
Acesse o link do projeto hospedado (Ex: via GitHub Pages) no seu navegador móvel.
Acesse as opções do navegador e clique em "Adicionar à Tela Inicial".
O aplicativo será instalado no celular. Ele aparecerá na lista de apps e na gaveta do sistema usando o Brasão Oficial como ícone, abrindo em tela cheia e oferecendo uma experiência imersiva e nativa.
Aviso: Este software é um projeto experimental focado em usabilidade e Design Front-end. Não tem integração ou vínculo oficial com o portal governamental. Os logotipos servem estritamente para simulação do fluxo operacional do projeto em questão.
