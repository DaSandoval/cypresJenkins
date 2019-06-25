import  LoginPage  from "../support/pageObjects/loginPage";
import boardCardListName from "../fixtures/projectNames";

describe('Create and delte Board', () => {

    const loginPage = new LoginPage();
    let boardsPage;

    beforeEach(() => {
        boardsPage = loginPage.loginToApp(); 
    });

    /**
    * Test that verify if a board is created.
    */
    it('Should can create a new board', () => {
        let boardPage = boardsPage.createBoard(boardCardListName.boardName.projectElisc);
        boardPage.getBoardTitle().text().then((boardTitle) => {
            expect(boardTitle).to.equal(boardCardListName.boardName.projectElis);
        });
        boardPage.getUrlBoardPage().then((url) => {
            expect(url).to.contain(`/${(boardCardListName.boardName.projectElis).toLowerCase().replace(/ /g, '-')}`);
        });
    });

    /**
     * Test that verify that the board is remove.
     */
    it('should can remove a board', () => {
        const boardPage = boardsPage.clickExistingBoard(boardCardListName.boardName.projectElis);
        boardPage.removeBoard();
        boardPage.getVerificationMessage().text().then((message) => {
            expect(message).to.equal('Board not found.');
        });
        boardsPage.clickHomeIcon();
        boardsPage.getAllBoards().text().each((boards) => {
            expect(boards).to.not.include(boardCardListName.boardName.projectElis);
        });
    });

     afterEach(()=>{
        boardsPage.logOut();
    });
});