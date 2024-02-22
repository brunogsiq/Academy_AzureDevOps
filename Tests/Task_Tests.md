# Documentação de Testes - Estrutura Padrão

Ao abrir um teste dentro de uma tarefa, utilize a seguinte estrutura para manter a organização:

1. **Nº:**
   - Um número sequencial para identificação única do teste.

2. **Plataforma:**
   - Indicação da plataforma na qual o teste será executado (Web, Mobile, Backend, Frontend).

3. **Sistema:**
   - Caso haja mais de um sistema envolvido, especificar a que sistema pertence.

4. **Tipo de Teste:**
   - Categoria do teste (Aceitação, Visual, etc.).

5. **Localização:**
   - Indicação específica do local no sistema onde o teste será executado (Página, Link, Tela, etc.).

6. **Objetivo:**
   - Descrição concisa do objetivo do teste, como processamento ou validação de alertas.

7. **Situação do Teste:**
   - Status atual do teste (Pendente, Em Execução, Concluído).

**Exemplo:**

```markdown
01.1 - Web - TxT - Funcional - Tela de Cadastro - Validar Opção Cadastrar - Cadastro do tipo inválido.
```

## Visualização de Teste:

### Test Plans:

Para visualizar e validar os testes, siga os passos:

1. Acesse DevOps > Board > Boards.
2. Adicione um teste, se necessário.
3. Para criar um teste:
    - Devops > Board > Board > Cria testes a partir da US.
    - Task > New Item > LinkType: Tests > Work Item: Test Case.
    - No teste, vincule como Tests: US + Task.