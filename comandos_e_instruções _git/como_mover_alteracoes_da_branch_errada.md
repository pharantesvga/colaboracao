# 🔀 Guia Prático: Como Mover Alterações da Branch Errada para uma Nova Branch

Um dos erros mais comuns no dia a dia com Git é começar a criar arquivos ou editar código na branch errada (geralmente na `main`) antes de criar a sua branch de trabalho.

Este guia ensina como resgatar seu trabalho e movê-lo para a branch certa **sem perder nenhuma linha de código**.

---

## 1. Cenário 1: Criei ou alterei arquivos, mas AINDA NÃO comitei (Mais Fácil ⭐)

Se você rodar `git status` e os arquivos aparecerem como *Untracked* (não rastreados) ou *Changes not staged*:

### Como resolver:
O Git permite que alterações não comitadas "viajem" com você para uma nova branch automaticamente!

```bash
# 1. Basta criar e trocar para a sua nova branch normalmente:
git switch -c feature/pedro-minha-tarefa
# ou comando clássico: git checkout -b feature/pedro-minha-tarefa

# 2. Veja que os arquivos continuam intactos na nova branch:
git status

# 3. Agora basta comitar na branch correta:
git add .
git commit -m "Adiciona arquivos da nova funcionalidade"
git push origin feature/pedro-minha-tarefa
```

> **O que aconteceu:** Ao criar a branch, o Git transportou todos os arquivos modificados para ela. A sua branch `main` não foi tocada e permaneceu 100% limpa.

---

## 2. Cenário 2: Já comitei na branch errada (mas NÃO dei `push`)

Se você já executou `git commit` estando na `main`, mas ainda **não** rodou `git push`:

### Como resolver:
Você pode "repassar" o commit para a branch nova e limpar a `main`:

```bash
# 1. Cria a branch nova a partir do commit que você acabou de fazer
git branch feature/pedro-minha-tarefa

# 2. Desfaz o último commit na main, voltando ela para o estado limpo
git reset --hard HEAD~1

# 3. Muda para a sua branch nova, onde o commit estará seguro e salvo!
git switch feature/pedro-minha-tarefa

# 4. Envia a branch nova para o GitHub:
git push origin feature/pedro-minha-tarefa
```

> **Explicação dos comandos:**
> * `git branch nome`: cria a branch apontando para o seu commit atual.
> * `git reset --hard HEAD~1`: "rebobina" a `main` em 1 commit, deixando-a como estava antes do seu engano.
> * O seu trabalho fica 100% preservado na nova branch.

---

## 3. Cenário 3: Usando o `git stash` (A "Gaveta" do Git)

Se você já tem uma branch existente e quer mover suas alterações atuais para ela:

```bash
# 1. Guarda todas as alterações (inclusive arquivos novos não rastreados) na gaveta:
git stash -u

# 2. Muda para a branch de destino:
git switch feature/pedro-outra-branch

# 3. Tira as alterações da gaveta e aplica na branch atual:
git stash pop
```

> **Dica:** O `-u` no comando `git stash -u` é fundamental, pois garante que arquivos novinhos criados (untracked) também sejam guardados na gaveta.

---

## 4. Cenário 4: Já comitei E dei `git push origin main` (E agora?)

Se o commit com erro já subiu para o GitHub:
* **NUNCA** use `git push --force` na `main`, pois isso quebra o repositório dos seus colegas.
* **Solução:** Crie imediatamente uma branch de correção (`fix/<autor>-reverte-engano`), reverta a alteração ou use o botão **Revert** do Pull Request no GitHub conforme o guia [revertendo_pull_requests_e_rollback.md](file:///c:/Users/Bruce/colaboracao/comandos_e_instruções%20_git/revertendo_pull_requests_e_rollback.md).

---

## 5. 🛡️ Como Evitar Esse Erro no Futuro

Para nunca mais começar a codar na `main` por distração:

1. **Use o Git Bash no terminal:**
   * No terminal do Antigravity, clique na setinha `⌵` ao lado do `+` e selecione **Git Bash**.
   * Ele sempre exibirá a branch atual colorida na linha de comando: `(main)`, `(feature/...)`.
2. **Crie o hábito de rodar antes de codar:**
   ```bash
   git branch
   ```
   A branch com o asterisco `*` verde é onde você está trabalhando no momento.

