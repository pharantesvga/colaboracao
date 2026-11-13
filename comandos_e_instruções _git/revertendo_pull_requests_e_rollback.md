# ⏪ Guia Prático: Como Reverter Pull Requests e Fazer Rollback no Git/GitHub

Este documento ensina o passo a passo de como desfazer um Pull Request mesclado com erro, como restaurar versões anteriores do código (Rollback) e boas práticas de colaboração em equipe.

---

## 1. O que acontece com a branch após o Merge?

* **No GitHub:** A branch **não é deletada automaticamente** por padrão. 
  * Se alguém clicar no botão *"Delete branch"* após o merge, o GitHub ainda mantém o botão **"Restore branch"** no histórico daquele Pull Request para recuperá-la com 1 clique a qualquer momento.
* **No seu computador local:** A branch **NUNCA é deletada sozinha**. Ela continua existindo intacta na sua máquina até que você decida rodar `git branch -d nome-da-branch`.
* **Conclusão:** Nenhum código é perdido. Se precisar de uma branch antiga, ela continua no histórico.

---

## 2. Cenário 1: Reverter o último Pull Request pelo GitHub (Botão Revert)

Se um Pull Request acabou de ser aceito na `main` e você percebeu que ele quebrou algo ou subiu errado:

### Passo a passo:
1. Abra a página do **Pull Request mesclado** no site do GitHub.
2. Role até a parte inferior, no box roxo com status **Merged**.
3. Clique no botão **`Revert`** (ao lado do status).
4. O GitHub criará automaticamente uma nova branch e um novo Pull Request (ex: `revert-9-feature/ph-v2`) contendo o código inverso daquele que deu erro.
5. O outro desenvolvedor revisa e aprova o Pull Request de reversão.
6. Após o merge, volte ao terminal local e puxe a atualização:
   ```bash
   git switch main
   git pull origin main
   ```
7. **Resultado:** A `main` volta ao estado limpo anterior sem apagar o histórico de ninguém.

---

## 3. Cenário 2: Erro "Sorry, this pull request couldn't be reverted automatically"

Se ao tentar clicar no botão **Revert** o GitHub exibir o erro:
> ⚠️ *"Sorry, this pull request couldn’t be reverted automatically. It may have already been reverted, or the content may have changed since it was merged."*

### Por que isso acontece?
O GitHub só consegue reverter com 1 clique se **nenhum outro commit ou PR posterior tiver alterado o mesmo arquivo**. Se outros PRs foram mesclados depois e mexeram nas mesmas linhas, o Git não sabe como desfazer sem gerar conflito.

### Como resolver (Padrão Profissional via Branch `fix/`):

Nunca tente forçar ou apagar direto na `main`. O fluxo correto e seguro em equipe é:

#### 1. Atualize a sua `main` local:
```bash
git switch main
git pull origin main
```

#### 2. Crie uma branch de correção:
Seguindo o padrão do projeto (`fix/<autor>-<descricao>`):
```bash
git switch -c fix/pedro-reverte-erro
# ou: git switch -c fix/gustavo-reverte-erro
```

#### 3. Corrija o arquivo no editor:
* Abra o arquivo que contém o erro no Antigravity/VS Code.
* Remova as linhas com erro ou restaure o conteúdo correto manualmente.
* Salve o arquivo (`Ctrl + S`).

#### 4. Comite e envie para o GitHub:
```bash
git add .
git commit -m "Corrige arquivo removendo erro da v2"
git push origin fix/pedro-reverte-erro
```

#### 5. Abra o Pull Request:
Vá no GitHub, abra o PR da sua branch `fix/...` para a `main`, peça a revisão do colega e faça o merge.

---

## 4. Cenário 3: Restaurar arquivos de um commit específico (`git restore`)

Se você quer que um arquivo (ou todo o projeto) volte exatamente ao estado de um commit ou PR antigo do passado:

### 1. Encontre o código (hash) do commit desejado:
```bash
git log --oneline -n 10
```
*(Você verá uma lista com os hashes de 7 caracteres, por exemplo: `0ae51a3`, `eedcffe`, etc.)*

### 2. Crie uma branch de fix:
```bash
git switch main
git pull origin main
git switch -c fix/pedro-restaura-versao-antiga
```

### 3. Restaure o arquivo para aquele commit:
```bash
# Para restaurar apenas um arquivo específico:
git restore --source=<codigo-do-commit> --staged --worktree nome-do-arquivo.txt

# Para restaurar o projeto INTEIRO para o estado daquele commit:
git restore --source=<codigo-do-commit> --staged --worktree .
```

### 4. Comite e envie:
```bash
git commit -m "Restaura arquivos para o estado do commit <codigo-do-commit>"
git push origin fix/pedro-restaura-versao-antiga
```
Abra o PR no GitHub e aprove.

---

## 5. ⚠️ Por que NÃO usar `git reset --hard` e `git push --force` na `main`?

Você pode ver tutoriais na internet sugerindo `git reset --hard` seguido de `git push origin main --force`.

**Em projetos em equipe, isso é proibido porque:**
1. **Reescreve a história:** Quem já baixou o código (seu colega) terá erros graves de divergência de histórico na próxima sincronização.
2. **Viola a regra número 1 do repositório (`AGENTS.md`):** *"A branch main é estritamente protegida: NUNCA comite diretamente na main e NUNCA sugira git push origin main"*.
3. O jeito com **Pull Request de reversão** ou **branch `fix/`** mantém o histórico auditável: todo mundo sabe o que foi feito, por que deu erro e como foi consertado.

---

## 6. 💡 Recursos Úteis para o Dia a Dia

### Ver em qual branch você está no terminal (Git Bash):
No terminal do Antigravity, clique na setinha `⌵` ao lado do `+` e selecione **Git Bash**. Ele já mostra a branch atual colorida entre parênteses: `(main)`, `(feature/...)`.

### "Radar" automático de Pull Requests (Auto Fetch):
Para o Antigravity avisar quando um colega fez merge na `main`:
1. Abra as Configurações com `Ctrl + ,`.
2. Pesquise por `git.autofetch`.
3. Mude de `false` para `true` (ou `all`).
4. Quando alguém aceitar um PR no GitHub, o rodapé do editor mostrará automaticamente: `main ↓ 1` avisando que há novos commits para puxar!

