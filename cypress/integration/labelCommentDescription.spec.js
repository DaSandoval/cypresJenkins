import LoginPage from '../support/pageObjects/loginPage';
import boardCardListNames from '../fixtures/projectNames';
import attributesCard from '../fixtures/cardConfiguration';

describe('Add commnet and description', () => {
    const loginPage = new LoginPage();
    let boardsPage;
    let boardPage;
    let cardPage;

    beforeEach(() => {
        boardsPage = loginPage.loginToApp();
        boardPage = boardsPage.clickBoard(boardCardListNames.boardName.projectOtan);
        cardPage = boardPage.clickCard(boardCardListNames.cardName.environment);
    });

    /**
     * Verify that can add a description to a card.
     */
    it('Should added description to a card', () => {
        cardPage.addDescriptionTocard(attributesCard.addDescription.codeReview);
        cardPage.isPresentEditDescriptionButton().should('be.visible');
        cardPage.getDescriptiontext().should('be.visible');
        cardPage.getDescriptiontext().text().then((description) => {
            expect(description).to.equal(attributesCard.addDescription.codeReview);
        });
    });

    /**
     * Verify that can edit a description
     */
    it('Should can edit a description', () => {
        cardPage.editDescription(attributesCard.addDescription.update);
        cardPage.isPresentEditDescriptionButton().should('be.visible');
        cardPage.getDescriptiontext().should('be.visible');
        cardPage.getDescriptiontext().text().then((description) => {
            expect(description).to.equal(attributesCard.addDescription.update);
        });
    });

    /**
     * Verify that can delete or erase a description
     */
    it('Should can delete a description', () => {
        cardPage.deleteDescription();
        cardPage.isPresentEditDescriptionButton().should('not.be.visible');
        cardPage.getDescriptiontext().should('not.be.visible');
    });

    /**
     * Verify that can added a comment.
     */
    it('Should added commnet to a card', () => {
        cardPage.addCommentToCard(attributesCard.addComment.commentMethod);
        cardPage.getCommnetSaved().should('be.visible');
        cardPage.getCommnetSaved().text().then((comment) => {
            expect(comment).to.equal(attributesCard.addComment.commentMethod);
        });
    });

    /**
     * Verify that can edit and change a comment
     */
    it('Should can to edit a commnet', () => {
        cardPage.editCommentByCommentName(attributesCard.addComment.commentMethod);
        cardPage.isPresentTextFieldComment().should('be.visible');
        cardPage.changeComment(attributesCard.addComment.commentMR);
        cardPage.getCommnetSaved().text().then((newCommnet) => {
            expect(newCommnet).to.equal(attributesCard.addComment.commentMR);
        });
    });

    /**
     * verify that deleted a comment.
     */
    it('Should can to delete a commnet', () => {
        cardPage.delteCommentByCommentName(attributesCard.addComment.commentMR);
        cardPage.getContentSComentSaved().should('not.be.visible');
    });

    /**
     * verify that can add label to a cardPage.
     */
    it('Should added label to a card',()=>{
        cardPage.addColorLabelToCardWithLabelButton(attributesCard.addLabels.green);
        cardPage.isPresentLabel().should('be.visible');
        cardPage.isPresentColorAssigned(attributesCard.addLabels.green).should('be.visible');
        cardPage.isPresentAddColorLabel().should('be.visible');
        cardPage.addColorLabelToCardWithLabelEdit(attributesCard.addLabels.purple);
        cardPage.isPresentColorAssigned(attributesCard.addLabels.purple).should('be.visible');
    });

    /**
     * Verify that can deselect color label assigned to a card.
     */
    it('Should can deselected color label assigned to a card',()=>{
        cardPage.deselectLabel();
        cardPage.isPresentLabel().should('not.be.visible');
        cardPage.isPresentAddColorLabel().should('not.be.visible');
    });
    
    afterEach(()=>{
        cardPage.closeCardConfiguration();
        boardsPage.logOut();
    });
});
