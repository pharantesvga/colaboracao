# Como configurar o GitHub para o modelo de Revisão Cruzada

Para que a Revisão Cruzada funcione como no mercado de trabalho, não basta apenas combinar de boca. Vocês precisam configurar o repositório para bloquear envios diretos (pushes) para a branch `main`. Isso força o sistema a aceitar código apenas através de um Pull Request aprovado por outra pessoa.

### 1. Criar o repositório e convidar o parceiro
**Configuração inicial.** Um de vocês cria um repositório normal no GitHub. Depois, vá na aba **Settings** (Configurações) do repositório, clique em **Collaborators** (Colaboradores) no menu lateral esquerdo e clique no botão verde para adicionar o usuário do seu amigo.

> **Verification:** O amigo deve acessar o e-mail dele e aceitar o convite do GitHub para ter permissão de escrita.

### 2. Acessar as regras de Branch
**Preparação para o bloqueio.** Ainda dentro da aba **Settings** do repositório, localize a opção **Branches** no menu lateral esquerdo e clique em **Add branch protection rule** (Adicionar regra de proteção de branch).

### 3. Configurar a exigência de Pull Requests
**Forçando o fluxo de revisão.** No campo "Branch name pattern" (Padrão de nome da branch), digite exatamente a palavra `main`. Abaixo, marque a caixa **Require a pull request before merging** (Exigir um pull request antes de fazer o merge).

### 4. Exigir a aprovação do revisor
**Validação cruzada.** Ao marcar a opção anterior, novas caixas aparecerão. Marque **Require approvals** (Exigir aprovações) e garanta que o número exigido ao lado seja 1. Role a página até o final e clique em **"Create"** ou **"Save changes"**.

> **Verification:** A partir de agora, se qualquer um de vocês tentar rodar um `git push origin main` direto do terminal local para enviar código sem passar pela revisão, o GitHub rejeitará o comando emitindo um erro no console.
