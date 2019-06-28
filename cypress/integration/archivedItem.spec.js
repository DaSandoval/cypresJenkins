import boardCardListName from "../fixtures/projectNames";
import LoginPage from '../support/pageObjects/loginPage'

describe('Archive items', () => {
    const loginPage = new LoginPage();
    let boardsPage;
    let boardPage;

    beforeEach(() => {
        boardsPage = loginPage.loginToApp();
        boardPage = boardsPage.clickExistingBoard(boardCardListName.boardName.projectOtan);
    });

    /**
     * Verify that a card is archive
     */
    it('Should can archive a card', () => {
        boardPage.archiveByCardName(boardCardListName.cardName.implement);
        boardPage.isPresentCard().text().then((cards) => {
            expect(cards).to.not.contain(boardCardListName.cardName.implement);
        });
        boardPage.dispalyArchivedItems();
        boardPage.isDispalyedArchivedItems().should('be.visible');
        boardPage.getArchivedItems().text().then((archivedcard)=>{
            expect(archivedcard).to.contain(boardCardListName.cardName.implement);
        });

        boardPage.ardcivedCardByEditIcon(boardCardListName.cardName.research);
        boardPage.isPresentCard().text().then((cards) => {
            expect(cards).to.not.contain(boardCardListName.cardName.research);
        });
        boardPage.getArchivedItems().text().then((archivedcard)=>{
            expect(archivedcard).to.contain(boardCardListName.cardName.research);
        });
    });

    /**
     * Verify that can unarchived all cards.
     */
    it('should can unarchive cards',()=>{
        boardPage.unarchiveCards();
        boardPage.isPresentCard().text().then((cards) => {
            expect(cards).to.contain(boardCardListName.cardName.implement);
        });
        boardPage.isPresentCard().text().then((cards) => {
            expect(cards).to.contain(boardCardListName.cardName.research);
        });
    });

    /**
     * Verify that several card are archive
     */
    it('Should can archive several cards', () => {
        boardPage.archivedAllCardByListName(boardCardListName.listName.bloqued);
        boardPage.isVisibleCardTable(boardCardListName.listName.bloqued).should('not.be.visible');
    });

    /**
     * Verify that a list is archive
     */
    it('Should can archive a list', () => {
        boardPage.archivedListByName(boardCardListName.listName.bloqued);
        boardPage.getArrayNameList().text().then((listName)=>{
            expect(listName).to.not.contain(boardCardListName.listName.bloqued);
        });
    });

    /**
     * Verify that can unarchive a list.
     */
    it('Should can unarchive a list',()=>{
        boardPage.getBoardTitle().should('be.visible')
        boardPage.unarchiveList(boardCardListName.listName.bloqued);
        boardPage.getArrayNameList().text().then((listName)=>{
            expect(listName).to.contain(boardCardListName.listName.bloqued);
        });
        boardPage.isVisibleCardTable(boardCardListName.listName.bloqued).should('be.visible');
    });

    afterEach(()=>{
        boardsPage.logOut();
    });
});