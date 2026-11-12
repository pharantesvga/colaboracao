# 🤖 Guia de Instruções para Agentes de IA (AGENTS.md)

Este documento estabelece o contexto, as diretrizes técnicas e as regras operacionais estritas para qualquer agente de inteligência artificial (Antigravity, Cursor, Copilot, etc.) atuando neste repositório.

---

## 1. Contexto do Projeto

- **Objetivo**: Treinamento prático de colaboração em equipe utilizando **Git e GitHub**.
- **Desenvolvedores**: **Pedro Henrique** e **Gustavo**.
- **Metodologia**: Fluxo baseado em branches com **Revisão Cruzada Obrigatória (Cross-Review)** via Pull Requests (quando Pedro coda, Gustavo revisa e aprova; e vice-versa).

---

## 2. Restrições Técnicas (Stack Estrita)

> [!IMPORTANT]
> **ESTE É UM SITE 100% ESTÁTICO.**
> - **NÃO** sugira nem instale ferramentas de build, gerenciadores de pacotes (`npm`, `yarn`, `pnpm`), bundlers (`vite`, `webpack`) ou frameworks (`React`, `Vue`, `Tailwind`).
> - **NÃO** crie dependências de back-end (`Node.js`, `Python`, `Express`, etc.).
> - O código deve rodar diretamente no navegador abrindo os arquivos HTML ou via extensões simples de servidor local (ex: *Live Server*).
> - **Tecnologias permitidas**: HTML5 semântico, CSS3 puro (com variáveis já definidas em `style.css`) e Vanilla JavaScript (sem bibliotecas externas).

---

## 3. Regras Estritas de Git e Versionamento

Qualquer agente deve obedecer e reforçar as seguintes regras ao interagir com os desenvolvedores:

1. **A branch `main` é estritamente protegida:**
   - **NUNCA** comite diretamente na `main`.
   - **NUNCA** sugira `git push origin main`.
   - Sempre instrua a criar uma branch antes de escrever ou sugerir alterações.

2. **Padrão Obrigatório de Nomenclatura de Branches:**
   - Para o Pedro: `feature/pedro-<nome-da-pagina>`
   - Para o Gustavo: `feature/gustavo-<nome-da-pagina>`
   - Para correções de bugs: `fix/<autor>-<descricao>`

3. **Fluxo de Trabalho a ser Orientado:**
   ```bash
   # 1. Atualizar a main (ou: git checkout main)
   git switch main
   git pull origin main

   # 2. Criar a branch de trabalho (ou: git checkout -b feature/<autor>-<tarefa>)
   git switch -c feature/<autor>-<tarefa>

   # 3. Comitar com mensagens claras em português
   git add .
   git commit -m "Adiciona a página X com o conteúdo Y"

   # 4. Enviar a branch e abrir PR
   git push origin feature/<autor>-<tarefa>

   # 5. Após o merge do PR: deletar a branch no GitHub e limpar localmente:
   # git switch main && git pull origin main && git branch -d feature/<autor>-<tarefa>
   ```

4. **Revisão Cruzada:**
   - O merge para a `main` deve ser feito exclusivamente através de um Pull Request aprovado pelo outro colega no GitHub.

---

## 4. Divisão de Responsabilidades e Arquivos

### 🌐 Arquivos Compartilhados (Raiz)
- `index.html`: Hub central que referencia todas as páginas do site.
- `style.css`: Folha de estilo global. Contém variáveis de cores personalizadas:
  - Pedro: `--color-pedro` (`#f97316`)
  - Gustavo: `--color-gustavo` (`#38bdf8`)
- `script.js`: Scripts globais de suporte (ano dinâmico no rodapé, etc.).
- `assets/images/`: Diretório para fotos, ilustrações e mídias do projeto.

### 🏍️ Páginas do Pedro (Branch: `feature/pedro-*`)
1. `pedro-sobre.html` (Biografia profissional e pessoal)
2. `pedro-motos.html` (Restauração da Honda CB 400)
3. `pedro-impressao3d.html` (Portfólio de peças e Bambu Lab)
4. `pedro-games.html` (Mortal Kombat 1, setup do PS5)
5. `pedro-cafe.html` (Produção de Calil Cafés Especiais)

### 💻 Páginas do Gustavo (Branch: `feature/gustavo-*`)
1. `gustavo-sobre.html` (Biografia e contatos)
2. `gustavo-setup.html` (Ambiente, SO e ferramentas de dev)
3. `gustavo-projetos.html` (Scripts, automações e estudos)
4. `gustavo-hobbies.html` (Interesses fora da tecnologia)
5. `gustavo-links.html` (Agregador de links e redes)

---

## 5. Diretrizes para Criação de Novas Páginas

Ao auxiliar na criação de qualquer página nova:
1. Salvar o arquivo `.html` na raiz do projeto;
2. Conectar à folha de estilo global com `<link rel="stylesheet" href="style.css">`;
3. Incluir um cabeçalho com botão de retorno ao hub (`index.html`);
4. Usar as classes CSS já padronizadas (`.container`, `.collaborator-card`, etc.) para preservar a harmonia estética do projeto;
5. Guardar imagens em `assets/images/`.

