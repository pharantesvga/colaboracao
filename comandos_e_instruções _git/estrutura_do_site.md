# 🏗️ Guia da Estrutura e Arquitetura do Site

Este documento descreve como o site está estruturado, o papel de cada arquivo e o guia prático para que **Pedro** e **Gustavo** criem suas páginas mantendo o mesmo padrão visual.

---

## 1. Visão Geral da Arquitetura

O projeto é um **site estático puro** construído com:
- **HTML5 semântico**: Estrutura acessível e bem dividida.
- **CSS3 moderno**: Variáveis CSS (*Custom Properties*), CSS Grid, Flexbox e tema escuro nativo.
- **JavaScript Vanilla**: Scripts leves, sem frameworks ou dependências pesadas.
- **Execução direta**: Abre diretamente no navegador (`file:///`) ou através de extensões como o *Live Server* do VS Code.

---

## 2. Mapa de Arquivos e Pastas

```text
colaboracao_git/
├── index.html                           # Página inicial (Hub central do projeto)
├── style.css                            # Folha de estilos central e compartilhada
├── script.js                            # Scripts globais (ano no rodapé, validações)
├── assets/                              # Recursos estáticos
│   └── images/                          # Imagens, fotos e ícones
│       └── .gitkeep                     # Mantém a pasta versionada no Git
├── comandos_e_instruções _git/          # Guias de estudo e tutoriais da equipe
│   ├── primeiros_passos_e_padroes_de_branch.md
│   ├── set_config_cruzada.md
│   └── estrutura_do_site.md             # (Este documento)
└── README.md                            # Regras do projeto e divisão de tarefas
```

---

## 3. Detalhamento dos Arquivos Principais

### 🌐 `index.html` (Hub Central)
Funciona como o "painel de controle" do projeto. Contém:
- **Cabeçalho Fixo**: Logotipo, links de navegação suave e atalho para o repositório no GitHub.
- **Hero Section**: Apresentação inicial do propósito do projeto de estudo.
- **Card do Pedro (`#pedro`)**: Lista com links diretos para as 5 páginas do Pedro.
- **Card do Gustavo (`#gustavo`)**: Lista com links diretos para as 5 páginas do Gustavo.
- **Card de Regras**: Resumo das boas práticas de branches e Pull Requests.
- **Rodapé**: Direitos autorais com ano atualizado automaticamente.

### 🎨 `style.css` (Estilos Compartilhados)
O CSS foi planejado para ser facilmente compreendido e editado por ambos:
- **Variáveis Globais (`:root`)**: Cores de fundo (`--bg-color`, `--bg-card`), cores de texto e tipografia padrão.
- **Identidade Visual por Colaborador**:
  - 🟠 **Pedro**: Variáveis `--color-pedro` e `--color-pedro-soft` (Laranja vibrante).
  - 🔵 **Gustavo**: Variáveis `--color-gustavo` e `--color-gustavo-soft` (Azul celeste).
- **Layout Responsivo**: O grid de colaboradores e o menu se ajustam automaticamente para telas menores (smartphones e tablets).

### ⚙️ `script.js` (Interatividade Leve)
- Atualiza o elemento `#current-year` do rodapé com o ano vigente do sistema.
- Emite aviso amigável caso alguém clique no link de uma página que ainda não foi mergeada.

### 🖼️ `assets/images/`
Diretório reservado para imagens que serão usadas nas páginas individuais:
- Fotos da restauração da Honda CB 400;
- Fotos e modelos de impressão 3D (Bambu Lab);
- Screenshots de jogos / setup;
- Imagens dos grãos de café.

---

## 4. Como Criar uma Nova Página (Template Recomendado)

Quando você estiver em sua branch (ex: `feature/pedro-motos` ou `feature/gustavo-setup`), crie o arquivo HTML na raiz do projeto seguindo este modelo base para manter o visual consistente:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da Página | Nome do Autor</title>
  <!-- Importa o CSS compartilhado da raiz -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Cabeçalho com link de retorno -->
  <header class="header">
    <div class="container nav-container">
      <div class="logo">
        <a href="index.html" style="text-decoration: none; color: inherit;">
          <span class="logo-icon">⬅️</span> <strong>Voltar ao Hub</strong>
        </a>
      </div>
    </div>
  </header>

  <!-- Conteúdo Principal -->
  <main class="container" style="padding: 3rem 0;">
    <article class="collaborator-card">
      <h1>Título da sua Página</h1>
      <p style="color: var(--text-muted); margin: 1rem 0;">
        Escreva aqui o seu conteúdo, adicione fotos de <code>assets/images/</code>, etc.
      </p>
    </article>
  </main>

  <!-- Rodapé -->
  <footer class="footer">
    <div class="container footer-content">
      <p>© GitColab — Projeto Pedro & Gustavo</p>
    </div>
  </footer>
</body>
</html>
```

---

## 5. Dica de Ouro para Praticar Conflitos de Merge no Git

Como `index.html` e `style.css` são **arquivos compartilhados**, ambos podem:
1. Criar novas classes específicas para suas páginas no `style.css`;
2. Ajustar links ou ícones no `index.html`.

Quando dois Pull Requests alterarem linhas próximas nesses arquivos ao mesmo tempo, vocês terão a oportunidade perfeita de **resolver conflitos de merge** juntos no GitHub!

