import LoginPage from '../support/pageObjects/loginPage';
import boardCardListNames from '../fixtures/projectNames';
import attributesCard from '../fixtures/cardConfiguration';

describe('Add expiration date', () => {
    const loginPage = new LoginPage();
    let boardsPage;
    let boardPage;
    let cardPage;

    /* beforeEach(() => {
        boardsPage = loginPage.loginToApp();
        boardPage = boardsPage.clickBoard(boardCardListNames.boardName.projectOtan);
        cardPage = boardPage.clickCard(boardCardListNames.cardName.environment);
    }); */

    /**
     * Verify that added a expiration date.
     */
    it('Should be able added a expiration date to the card', () => {
        //cardPage.addCheckList('added to the card');
        //cardPage.deleteChecklist();
        //cardPage.addElementsToCheckList('added a expiration date to the card');
        /* cardPage.addElementsToCheckList('prueba 2');
        cardPage.addElementsToCheckList('prueba 3') */;
        //cy.wait(3000)
    });

    /* afterEach(() => {
        cardPage.closeCardConfiguration();
        boardsPage.logOut();
    }); */
});