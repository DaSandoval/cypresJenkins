import LoginPage from "../support/pageObjects/LoginPage";
import columns from '../fixtures/columns.json';

context('Columns Creation', () => {
    const columnName = columns.create.columnName;
    const boardName = columns.create.boardName;
    const loginPage = new LoginPage();
    let boardsPage;
    let boardPage;

    beforeEach(() => {
        //Login Trello
        boardsPage = loginPage.loginToApp(); 
    })

    it('Create a column', () => {
        //Add a column
        boardPage = boardsPage.clickBoard(boardName);
        boardPage.addColumn(columnName);

        //Verify that column is created and visible
        boardPage.getAddedColumn(columnName).should("be.visible");
        boardPage.getAddCardLink(columnName).should("be.visible"); 
    })

    afterEach(() => {
        //Archive Column
        boardPage.clickEditColumn(columnName);
        boardPage.clickArchiveColumn();

        //Log out Trello
        boardsPage.logOut();
    })
})