# 📘 Guia Inicial: Primeiros Passos e Convenções de Branch no Git

Este documento reúne explicações fundamentais sobre o início do trabalho em repositórios clonados e as boas práticas de nomenclatura de branches adotadas no mercado.

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

## 2. Como começar a desenvolver corretamente?

Em projetos colaborativos (como este de estudo com revisão cruzada), a regra de ouro é: **nunca comite diretamente na branch `main`**. A branch `main` deve conter apenas código testado, revisado e aprovado.

### Passo a passo para iniciar qualquer tarefa:

1. **Garantir que a branch principal está atualizada:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Criar e entrar na sua branch de trabalho:**
   ```bash
   git checkout -b feature/seu-nome-sua-pagina
   ```

3. **Fazer o desenvolvimento:**
   Edite ou crie os arquivos da sua tarefa.

4. **Salvar o progresso localmente (Stage e Commit):**
   ```bash
   git add .
   git commit -m "Cria a estrutura inicial da página X"
   ```

5. **Enviar para o GitHub:**
   ```bash
   git push origin feature/seu-nome-sua-pagina
   ```

6. **Abrir o Pull Request (PR):**
   Acesse o repositório no GitHub para solicitar a revisão do seu colega.

---

## 3. Por que usamos `feature/pedro-sobre` em vez de apenas `pedro-sobre`?

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
- Vai começar a programar? **Crie uma branch nova (`git checkout -b ...`)**.
- Nomeie suas branches seguindo padrões como `feature/nome-tarefa` para manter o projeto organizado e profissional.

