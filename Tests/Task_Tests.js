/*
    Ao abrir um testes dentro de um tarefa, utilizarei a construção de um teste da seguinte forma para manter a organização:

    Nº;
    Plataforma (Web, Mobile, BackEnd, Front.);
    Sistema (Caso haja mais de um.);
    Tipo de Teste (Aceitação, Visual...);
    Localização (Página, Link, Tela...);
    Objetivo (Processamento, Alertas);
    Situação do teste;

    Ex:

    01.1 - Web - TxT - Funcional - Tela de Cadastro - Validar Opção Cadastrar - Cadastro do tipo inválido.

    Visualização de Teste:

        Test Plans:

            Para poder visualizar os testes e realizar a validação, será necessário ir no caminho:
                Board > Boards e depois adicionar um testes, após, será possível visualizar.

            Ou seja...

            Para criar um teste:
                1 - Devops > Board > Board > Cria testes a partir da US.
                2 - Task > New Item > LinkType: Tests > Work Ityem: Test Case
                    2.1 - No teste, vincular como Tests: US + Task 

    Extensões Para Configuração do Azure Devops:
*/