/// <reference types="cypress" />;

describe('Testes para a pagina de candidatura', () => {
     beforeEach(() => {
          cy.visit('https://ebac-jobs-e2e-bay.vercel.app/');
     });

     it('Deve renderizar levar o usuario até o formulario de inscrição', () => {
          cy.get('.Vaga_vagaLink__DeFkk').first().click();
          cy.get('input').should('have.length', 7);
     });

     it('Deve preencher o formulario de inscrição', () => {
          cy.get('.Vaga_vagaLink__DeFkk').first().click();
          cy.get('input[name="nome-completo"]').type('Yuri Romeu');
          cy.get('input[name="email"]').type('yuriteste@gmail.com');
          cy.get('input[name="telefone"]').type('21 9999-9999');
          cy.get('input[name="endereco"]').type('Rua dos bobos, 0');
          cy.get('select[name="escolaridade"]').select('outros');
          cy.get('#linux').check();
          cy.get('.Aplicacao_button__tw2AE').click();

          cy.on('window:alert', conteudo => {
               expect(conteudo).contain('Obrigado pela candidatura!');
          });
     });
});
