# 🚀 Projeto de Estudo: Git e GitHub Colaborativo

## 📌 Objetivo do Projeto
Este projeto tem como foco principal o aprendizado do fluxo de trabalho colaborativo utilizando Git e GitHub. A regra de ouro é: **ninguém comita diretamente na branch `main`**. Todo código deve passar pelo processo de criação de branch, Pull Request (PR) e Revisão Cruzada.

---

## 👥 Modelo de Revisão Cruzada (Cross-Review)
Para garantir que todos aprendam a revisar, aprovar e lidar com o código de outra pessoa, usaremos o modelo de Revisão Cruzada:
- Quando o **Pedro** desenvolve, o **Gustavo** é o revisor (e vice-versa).
- O revisor deve analisar as mudanças na aba *Files changed* do GitHub, testar mentalmente (ou localmente) e aprovar ou solicitar mudanças antes de fazer o merge.

### 🔒 Regras de Proteção do Repositório
A branch `main` está protegida pelas configurações do GitHub:
- `Require a pull request before merging`: Ativado.
- `Require approvals`: 1 (Nenhum PR pode ser mergeado sem a aprovação do colega).

---

## 📂 Divisão de Tarefas e Páginas

### 🌐 Arquivos Compartilhados (Base do Site)
*Ambos editarão estes arquivos, o que é ótimo para praticar a resolução de conflitos de merge.*
- `index.html`: Página inicial com o menu de navegação.
- `style.css`: Arquivo central de estilos do site.

### 🏍️ Páginas do Pedro
*Padrão de nome da branch:* `feature/pedro-nome-da-pagina`
1. **`pedro-sobre.html`**: Biografia profissional e pessoal.
2. **`pedro-motos.html`**: Projetos de restauração (ex: Honda CB 400).
3. **`pedro-impressao3d.html`**: Portfólio de peças, dicas de filamento e Bambu Lab.
4. **`pedro-games.html`**: Seção de jogos (Mortal Kombat 1, setup do PS5).
5. **`pedro-cafe.html`**: Produção e processo da marca Calil Cafés Especiais.

### 💻 Páginas do Gustavo
*Padrão de nome da branch:* `feature/gustavo-nome-da-pagina`
1. **`gustavo-sobre.html`**: Biografia e contatos.
2. **`gustavo-setup.html`**: Detalhes da máquina, SO e ferramentas de desenvolvimento.
3. **`gustavo-projetos.html`**: Portfólio de scripts, automações e estudos.
4. **`gustavo-hobbies.html`**: Interesses pessoais fora da tecnologia.
5. **`gustavo-links.html`**: Agregador de links úteis, redes sociais e repositórios.

---

## 🔄 Resumo do Fluxo de Trabalho (Cheat Sheet)

### 1. Preparação (Sempre antes de começar)
```bash
# Opção moderna (ou: git checkout main)
git switch main
git pull origin main
```

### 2. Desenvolvimento (O Desenvolvedor)
```bash
# Crie sua branch (Opção moderna com switch -c ou clássica com checkout -b)
git switch -c feature/seu-nome-sua-pagina
# (ou: git checkout -b feature/seu-nome-sua-pagina)

# Trabalhe no código, depois adicione e comite
git add .
git commit -m "Cria a página X com o conteúdo Y"

# Envie para o GitHub
git push origin feature/seu-nome-sua-pagina
```
*-> Vá para o GitHub e abra o Pull Request.*

### 3. Revisão (O Revisor)
1. Abra o PR no GitHub.
2. Vá na aba **Files changed**.
3. Deixe comentários em linhas específicas, se necessário.
4. Clique em **Review changes** e selecione **Approve**.
5. Clique no botão verde **Merge pull request** e clique no botão **Delete branch** no GitHub.

### 4. Sincronização e Limpeza Final (Ambos)
*Sempre que um PR for aprovado e mergeado, limpe a branch e volte para a `main`:*
```bash
# Volte para a main e atualize (ou: git checkout main)
git switch main
git pull origin main

# Delete a branch local que já foi mergeada
git branch -d feature/seu-nome-sua-pagina
```
