import LoginPage from "../support/pageObjects/LoginPage";
import cards from '../fixtures/cards.json';

context('Cards Management', () => {
    const columnName = cards.create.columnName;
    const boardName = cards.create.boardName;
    const cardName = cards.create.cardName;
    const loginPage = new LoginPage();
    let boardsPage;
    let boardPage;

    beforeEach(() => {
        //Login to Trello
        boardsPage = loginPage.loginToApp(); 

        //Create a Column
        boardPage = boardsPage.clickBoard(boardName);
        boardPage.addColumn(columnName);
    })

    it('Create a card', () => {
        //Create a Card
        boardPage.addCard(columnName, cardName);
        boardPage.getAddedCard(columnName).should("exist");

        //Verify if the card created is displayed in the column looking for its name
        boardPage.getAddedCard(columnName).text().then((actualCardName) => {
            expect(actualCardName, 'Create card').to.equal(cardName);
          });
    })

    afterEach(() => {
        //Archive Card
        boardPage.clickEditCardIcon(columnName, cardName);
        boardPage.clickArchiveCardByEditIcon();

        //Archive Column
        boardPage.clickEditColumn(columnName);
        boardPage.clickArchiveColumn();

        //Logout Trello
        boardsPage.logOut();
    })
})