describe("template spec", () => {
  before(() => {
    cy.log("Executando antes de todos os testes");
    cy.visit("https://bugbank.netlify.app/");
  });
  it("Cadastrar usuario", () => {
    cy.contains("Registrar").click();
    cy.get('input[name="email"]').eq(1).type("teste@teste.com", {force: true});
    cy.get('input[name="name"]').type("Teste", {force: true});
    cy.get('input[name="password"]').eq(1).type("test321", {force: true});
    cy.get('input[name="passwordConfirmation"]').type("test321", {force: true});
    cy.contains('button', 'Cadastrar').click({force: true});
    cy.get('a#btnCloseModal').click();
    cy.get('input[name="email"]').eq(0).type("teste@teste.com");
    cy.get('input[name="password"]').eq(0).type("Teste");
    cy.contains('button', 'Acessar').click();
    
  });
  it('Logar', () => {
    cy.visit('https://bugbank.netlify.app/home')
    cy.get('img[data-nimg="intrinsic"]').eq(0).should('be.visible');
  });
});
