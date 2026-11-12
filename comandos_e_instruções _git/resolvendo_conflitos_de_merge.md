# ⚔️ Guia Prático: Como Resolver Conflitos de Merge (Merge Conflicts)

Este documento ensina o passo a passo exato de como proceder quando dois desenvolvedores abrem Pull Requests quase ao mesmo tempo e o segundo PR entra em **conflito** após o primeiro ser mergeado.

---

## 1. O Cenário: Como o conflito acontece?

1. **Ponto de partida comum:** Tanto o Pedro quanto o Gustavo rodaram `git pull origin main` e estavam 100% atualizados.
2. **Desenvolvimento paralelo:** 
   - Pedro criou `feature/pedro-sobre` e mexeu no `index.html`.
   - Gustavo criou `feature/gustavo-sobre` e também mexeu no `index.html` nas mesmas linhas para colocar o link dele.
3. **Envio simultâneo:** Gustavo abriu o PR dele e Pedro abriu o dele 5 minutos depois.
4. **O primeiro merge:** O PR do Gustavo foi revisado, aprovado e mergeado na `main`.
5. **O problema no segundo PR:** A branch `main` agora mudou! O GitHub analisa o PR do Pedro e exibe o aviso:
   > ⚠️ **"This branch has conflicts that must be resolved"** (Esta branch tem conflitos que precisam ser resolvidos). O botão de merge fica bloqueado.

---

## 2. Por que o Git bloqueia o merge?

O Git é excelente em juntar código automaticamente quando os arquivos são diferentes. Porém, quando duas pessoas alteram a **mesma linha de um arquivo**, o Git não adivinha qual das duas versões deve prevalecer para não correr o risco de apagar o trabalho de ninguém. Ele pausa o processo e pede para um humano arbitrar a decisão.

---

## 3. Passo a Passo para Resolver Localmente (Padrão Profissional)

A melhor forma de resolver um conflito é no seu próprio computador (no VS Code/terminal), onde você pode testar o código antes de reenviar ao GitHub.

### Passo 1: Atualize a sua branch `main` local
Como o código do seu colega acabou de entrar na `main` do GitHub, você precisa baixá-lo:
```bash
# Opção moderna:
git switch main
git pull origin main

# Opção clássica:
# git checkout main
# git pull origin main
```

### Passo 2: Volte para a sua branch de trabalho
```bash
# Opção moderna:
git switch feature/pedro-sua-pagina

# Opção clássica:
# git checkout feature/pedro-sua-pagina
```

### Passo 3: Mescle a `main` atualizada para dentro da sua branch
```bash
git merge main
```
*O Git informará no terminal que ocorreu um conflito:*
```text
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

---

## 4. Entendendo e Editando o Arquivo em Conflito

Abra o arquivo conflitante (ex: `index.html`) no seu editor de código (como o **VS Code**). O Git insere marcadores visuais para indicar o que veio de onde:

```html
<<<<<<< HEAD (O seu código da branch atual)
  <li><a href="pedro-sobre.html">Sobre Pedro</a></li>
=======
  <li><a href="gustavo-sobre.html">Sobre Gustavo</a></li>
>>>>>>> main (O código que veio da main atualizada do colega)
```

### O que significam esses símbolos?
- **`<<<<<<< HEAD`**: Início das mudanças feitas por você.
- **`=======`**: Linha divisória entre as duas versões.
- **`>>>>>>> main`**: Fim das mudanças que vieram da branch principal (código do colega).

### Como resolver no VS Code:
1. O VS Code exibe botões rápidos logo acima do conflito:
   - **Accept Current Change** (Manter apenas o seu código);
   - **Accept Incoming Change** (Manter apenas o código que veio da `main`);
   - **Accept Both Changes** (Manter ambos);
2. Na maioria dos casos em colaboração (como listas de links, estilos ou menus), o objetivo é **manter o trabalho dos dois**.
3. Você também pode apagar os marcadores manualmente e deixar o código limpo e correto, assim:

```html
  <li><a href="pedro-sobre.html">Sobre Pedro</a></li>
  <li><a href="gustavo-sobre.html">Sobre Gustavo</a></li>
```

4. **Salve o arquivo** (`Ctrl + S`).

---

## 5. Finalizando e Liberando o Pull Request no GitHub

Depois de salvar o arquivo sem os marcadores de conflito:

1. **Adicione os arquivos corrigidos ao stage:**
   ```bash
   git add .
   ```

2. **Crie o commit de resolução do conflito:**
   ```bash
   git commit -m "Resolve conflito de merge integrando alterações da main"
   ```

3. **Envie a atualização para o GitHub:**
   ```bash
   git push origin feature/pedro-sua-pagina
   ```

---

## 6. Resultado no GitHub

Assim que o comando `git push` for executado:
- O GitHub detecta automaticamente o novo commit na sua branch;
- O aviso de conflito desaparece;
- O botão verde **"Merge pull request"** fica liberado novamente;
- O seu colega pode fazer a revisão final e aprovar o merge! 🚀

---

## 💡 Dicas de Ouro para o Dia a Dia

- **Não se assuste:** Conflitos são normais em qualquer equipe de desenvolvimento e acontecem todos os dias.
- **Mantenha sua branch fresca:** Se você estiver trabalhando em uma tarefa que demora horas ou dias, rode `git switch main && git pull` (ou `git checkout main && git pull`) e depois `git merge main` na sua branch com frequência para não acumular muitas divergências.
- **Comunicação:** Avise o colega quando for alterar arquivos centrais e compartilhados (como `index.html` ou `style.css`).

