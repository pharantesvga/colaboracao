# 📘 Guia Inicial: Primeiros Passos e Convenções de Branch no Git

Este documento reúne explicações fundamentais sobre o início do trabalho em repositórios clonados, a evolução dos comandos de branch no Git, o ciclo de vida completo de uma funcionalidade e as boas práticas de nomenclatura.

---

## 1. Por que NÃO rodar `git init` após um `git clone`?

### A dúvida comum
> *"Depois de clonar o repositório com `git clone <url> .`, preciso rodar `git init`?"*

### A resposta
**Não!** Você nunca deve rodar `git init` dentro de um repositório que acabou de clonar.

### O que acontece por baixo dos panos?
- **`git init`**: Serve para iniciar um repositório Git do zero em uma pasta local vazia ou que ainda não possui controle de versão.
- **`git clone`**: Faz muito mais do que apenas baixar os arquivos. Ele automaticamente:
  1. Cria a pasta oculta `.git` com todo o histórico do projeto;
  2. Configura a branch padrão (geralmente `main`);
  3. Cria a conexão remota chamada `origin`, apontando para o GitHub;
  4. Deixa seu ambiente local pronto para receber e enviar atualizações (`git pull` e `git push`).

Executar `git init` em um diretório já clonado é redundante e desnecessário.

---

## 2. 💡 Evolução dos Comandos: `git checkout` vs `git switch`

Historicamente, o comando **`git checkout`** era responsável por muitas tarefas diferentes ao mesmo tempo:
1. Trocar de branch;
2. Criar branches novas;
3. Restaurar arquivos modificados ou descartar alterações locais.

Essa sobrecarga causava confusão, especialmente para quem estava começando. Por isso, a partir da versão **Git 2.23 (2019)**, o Git separou essas responsabilidades em dois comandos específicos, mais claros e seguros:

- **`git switch`**: Focado **exclusivamente em navegar e criar branches**.
- **`git restore`**: Focado **exclusivamente em restaurar arquivos e descartar mudanças**.

| Ação desejada | Opção Moderna (Recomendada) | Opção Clássica (Tradicional) |
| :--- | :--- | :--- |
| **Mudar para branch existente** | `git switch main` | `git checkout main` |
| **Criar e entrar em nova branch** | `git switch -c feature/sua-tarefa` *(c = create)* | `git checkout -b feature/sua-tarefa` *(b = branch)* |
| **Voltar para a branch anterior** | `git switch -` | `git checkout -` |

> [!NOTE]
> Ambas as opções continuam funcionando 100% no Git atual. Você pode usar a que achar mais confortável, mas o **`switch`** é considerado a melhor prática moderna.

---

## 3. Como começar a desenvolver corretamente?

Em projetos colaborativos (como este de estudo com revisão cruzada), a regra de ouro é: **nunca comite diretamente na branch `main`**. A branch `main` deve conter apenas código testado, revisado e aprovado.

### Ciclo de vida completo de uma funcionalidade:

#### 1. Garantir que a branch principal está atualizada
Antes de iniciar qualquer código, certifique-se de que a sua `main` tem as últimas alterações:
```bash
# Opção moderna (recomendada):
git switch main
git pull origin main

# Ou opção clássica:
# git checkout main
# git pull origin main
```

#### 2. Criar e entrar na sua branch de trabalho
Crie uma branch isolada para a tarefa:
```bash
# Opção moderna:
git switch -c feature/seu-nome-sua-pagina

# Ou opção clássica:
# git checkout -b feature/seu-nome-sua-pagina
```

#### 3. Fazer o desenvolvimento
Edite ou crie os arquivos da sua tarefa (ex: `pedro-sobre.html` ou `gustavo-sobre.html`).

#### 4. Salvar o progresso localmente (Stage e Commit)
```bash
git add .
git commit -m "Cria a estrutura inicial da página X"
```

#### 5. Enviar para o GitHub
```bash
git push origin feature/seu-nome-sua-pagina
```

#### 6. Abrir o Pull Request (PR)
Acesse a página do repositório no GitHub para abrir o PR e solicitar a revisão cruzada do colega.

#### 7. Aprovação, Merge e Exclusão da Branch (Limpeza e Organização)
> [!IMPORTANT]
> **Por que deletar a branch após o merge?**
> A branch de funcionalidade é temporária. Uma vez que o código foi aprovado e incorporado à `main`, a branch já cumpriu seu papel. Mantê-la no repositório acumula "lixo" e poluição visual, tornando difícil saber quais tarefas ainda estão ativas.

Assim que o colega revisar, aprovar e clicar em **Merge pull request**:

1. **Deletar a branch no GitHub (Remoto):**
   - Logo após fazer o merge, clique no botão cinza/roxo **"Delete branch"** na própria tela do PR no GitHub.
   *(Ou pelo terminal: `git push origin --delete feature/seu-nome-sua-pagina`)*

2. **Deletar a branch no seu computador (Local):**
   ```bash
   # 1. Saia da branch de trabalho e volte para a main:
   git switch main          # (ou: git checkout main)

   # 2. Atualize sua main local com o código recém-mergeado:
   git pull origin main

   # 3. Delete a branch local que já foi mergeada (o -d é seguro e só apaga se mergeada):
   git branch -d feature/seu-nome-sua-pagina

   # 4. (Opcional) Limpe referências locais a branches que já foram apagadas no GitHub:
   git fetch --prune
   ```

Pronto! Seu repositório volta a ter **apenas a branch `main` ativa**, limpa e sincronizada com o projeto.

---

## 4. Por que usamos `feature/pedro-sobre` em vez de apenas `pedro-sobre`?

### Poderia ser apenas `pedro-sobre`?
**Sim, tecnicamente sim.** O Git aceita praticamente qualquer string válida como nome de branch. Porém, a convenção `tipo/detalhe` traz grandes vantagens no dia a dia.

---

### Principais motivos para usar o padrão com barra (`/`):

#### 1. Agrupamento em "Pastas" Virtuais
Para o Git e interfaces visuais (como **GitHub**, **VS Code** e extensões como **GitLens**), a barra `/` atua como um separador de pastas.
Em projetos reais com dezenas ou centenas de branches, elas ficam agrupadas de forma limpa:

```text
📁 feature/
   ├── pedro-sobre
   ├── pedro-motos
   └── gustavo-setup
📁 fix/
   └── correcao-menu
📁 docs/
   └── atualiza-readme
```

#### 2. Clareza imediata sobre a intenção da branch
Ao bater o olho no nome da branch, qualquer pessoa da equipe sabe exatamente a finalidade daquele código antes mesmo de abri-lo:

| Prefixo | Finalidade | Exemplo prático |
| :--- | :--- | :--- |
| `feature/` | Nova funcionalidade, página ou recurso | `feature/pedro-sobre` |
| `fix/` ou `bugfix/` | Correção de defeito/bug em desenvolvimento | `fix/ajuste-layout-mobile` |
| `hotfix/` | Correção crítica e urgente enviada direto para produção | `hotfix/erro-ao-carregar-fotos` |
| `docs/` | Alterações exclusivas de documentação | `docs/guia-de-contribuicao` |
| `refactor/` | Melhoria interna de código sem alterar o comportamento visual/funcional | `refactor/otimizacao-css` |
| `chore/` | Tarefas de manutenção rotineira (ex: dependências, build) | `chore/atualiza-pacotes` |

#### 3. Contexto e Identificação em Equipe
A nomenclatura estruturada `feature/pedro-sobre` responde instantaneamente a três perguntas:
1. **O que é?** Uma nova funcionalidade (`feature`).
2. **Quem é o autor?** Pedro (`pedro`).
3. **Qual é o escopo?** A página "sobre" (`sobre`).

---

## 📌 Resumo Rápido

- Fez `git clone`? **Não use `git init`**, já está tudo pronto.
- Trocar/criar branch? **Prefira `git switch`** (`git switch main` / `git switch -c feature/...`), embora `git checkout` continue válido.
- Terminou e o PR foi mergeado? **Delete a branch remota e local (`git branch -d ...`)** para manter o projeto limpo com foco apenas na `main`.
- Nomeie suas branches seguindo padrões como `feature/nome-tarefa` para manter o projeto organizado e profissional.
