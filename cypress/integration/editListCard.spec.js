import LoginPage from "../support/pageObjects/loginPage";
import boardCardListName from "../fixtures/projectNames";

describe('Edit list and card', () => {
    const loginPage = new LoginPage();
    let boardPage;
    let boardsPage

    before(() => {
        boardsPage = loginPage.loginToApp();
        boardPage = boardsPage.clickExistingBoard(boardCardListName.boardName.projectChampion);
    });

    /**
     * Test that validate that name of the list and card are changed.
     */
    it('should can change list and card name', () => {
        boardPage.setNewListName(boardCardListName.listName.complete, boardCardListName.listName.bloqued);
        boardPage.getArrayNameList().text().then((text) => {
            expect(text).to.include(boardCardListName.listName.bloqued);
        });
        boardPage.setNewCardName(boardCardListName.cardName.implement, boardCardListName.cardName.codeReview);
        boardPage.getArrayCardName(boardCardListName.cardName.codeReview).text().then((cardName) => {
            expect(cardName).to.contain(boardCardListName.cardName.codeReview);
        });
        boardPage.setNewCardTitle(boardCardListName.cardName.codeReview, boardCardListName.cardName.implement);
        boardPage.getArrayCardName(boardCardListName.cardName.implement).text().then((cardName) => {
            expect(cardName).to.contain(boardCardListName.cardName.implement);
        });
    });

    afterEach(()=>{
        boardsPage.logOut();
    })
});