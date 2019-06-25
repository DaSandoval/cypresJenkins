import boardCardListTitle from "../fixtures/boardTitle";
import email from "../fixtures/userEmail";
import LoginPage from "../support/pageObjects/loginPage";

describe('Invite member', () => {
    const loginPage = new LoginPage();
    let boardsPage;
    let boardPage;

    beforeEach(() => {
        boardsPage = loginPage.loginToApp();
        boardPage = boardsPage.clickExistingBoard(boardCardListTitle.boardName.board1);
    });

    /**
     * Verify that an user is invited.
     */
    it('Should can to invite another user',()=>{
        boardPage.addUserToProyect(email.user3);
        boardPage.isDisplayedBoardInvite().should('not.be.visible');
        boardPage.numberUsersInvited().then((numberUser)=>{
            expect(numberUser).to.have.length(2);
        });
    });

    /**
     * Verify that an user invited is remove.
     */
    it('Should can to remove to last user invited',()=>{
        boardPage.removeUserAdded();
        boardPage.numberUsersInvited().then((numberUser)=>{
            expect(numberUser).to.have.length(1);
        });
    });

    afterEach(() => {
        boardsPage.logOut();
    })
});
