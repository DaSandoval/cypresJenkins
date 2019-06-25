import LoginPage from "../support/pageObjects/loginPage.js";

describe('Login to Trello', () => {
    const loginPage = new LoginPage();

    /**
     * Test to validation login until Boards Page
     */
    it('Login with valid credentials', () => {
        const boardsPage = loginPage.loginToApp();

        boardsPage.getBoardsLink().should('exist');
        boardsPage.getBoardsLink().should('be.visible');

        boardsPage.getPathName().should('eq', '/samplecypress/boards');

        boardsPage.getBoardsLink().then($element => {
            expect($element.text()).to.equal('Boards');
        });

        boardsPage.getBoardsLink().getText3().then(text => {
            expect(text).to.equal('Boards');
        });

        boardsPage.getBoardsLinkText().then(text => {
            expect(text).to.equal('Boards');
        });
    });
});