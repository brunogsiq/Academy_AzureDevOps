# Documentação de Processo - Sistema de Gestão de Projetos

## 1) Issues

### Descrição:
As issues são utilizadas para relatar problemas de desenvolvimento, mesmo que o Q.A. tenha resolvido junto ao setor de Desenvolvimento.

### Como e onde criar:
1. Acesse Boards > Sprints > New > Issue.
2. Classifique a issue de acordo com o motivo para métricas precisas.

### Vinculação a User Story ou PBI:
1. Vincule a issue como "New Item" à User Story (US) ou Product Backlog Item (PBI).
2. Configure o link type como "Parent" e o work item type como "Issue".
3. Desvincule como child e vincule à US/PBI como Parent para uma visualização hierárquica no board.

### Informações da Issue:
1. Teste realizado e comportamento.
2. Regra de negócio.
3. Evidenciamento do erro/falha.
4. Sugestão de correção.

## 2) User Story (US)

### Descrição:
User Stories ajudam na compreensão do que deve ser entregue, contribuindo para a garantia de que as necessidades do usuário sejam atendidas. São estruturadas como Epic > Feature > User Story.

### Criação de US:
1. Crie uma Feature e, em Related Work, vincule uma US.
2. Configure o link type como "Child" e o work item type como "US".
3. Detalhe a US no formato Gherkin (Como > Quero > Para).
4. Inclua critérios de aceite para determinar quando a funcionalidade está pronta.

### Características de uma boa US:
- Independente, Negociável, Valiosa, Estimável, Pequena, Testável.

## 3) Original Estimate

### Descrição:
Projeção de tempo para conclusão de uma tarefa ou trabalho, incluindo tarefas de teste. Preenchida até a Sprint Planning.

## 4) Q.A. Estimate

### Descrição:
Projeção de tempo para conclusão de uma tarefa nos testes. Adicionada à Original Estimate. Preenchida até a Sprint Planning.

## 5) Definition of Done (DoD)

### Exemplo de DoD:
- Testes unitários variados.
- Testes funcionais aprovados.
- Critérios de aceite contemplados.
- Códigos revisados.
- Testes realizados.
- Product Owner (P.O) concorda com o realizado.

## 6) Expedite

### Descrição:
Identificação de itens de alta prioridade e atenção imediata, destacando itens críticos. Recomendado apenas um item com classificação "expedite" por Sprint.

## 7) Hierarquia

### Estrutura Hierárquica:
User Story (US) ou PBI > Task (Parent) > Issue (Parent)
Bugs são abertos na mesma hierarquia de uma PBI ou User Story, ou seja, abra uma issue para vincular à US ou PBI.