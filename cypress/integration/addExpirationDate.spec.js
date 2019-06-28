import LoginPage from '../support/pageObjects/loginPage';
import boardCardListNames from '../fixtures/projectNames';
import attributesCard from '../fixtures/cardConfiguration';

describe('Add expiration date', () => {
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
     * Verify that added a expiration date.
     */
    it('Should be able added a expiration date to the card', () => {
        let date = cardPage.getDateFuture();
        cardPage.addExpirationDate(date.dateFuture, date.hoursFuture, attributesCard.reminder.before1440Min);
        cardPage.getExpirationDateText().text().then((message) => {
            expect(message).to.contain(`at ${date.hoursFuture}`);
        });
        cardPage.isPresentExpirationDate().should('be.visible');
        cardPage.isSelectedExpirationDate(attributesCard.expirationDate.future).should('be.visible');
    });

    /**
     * Verify that able modify the date actually to a date past due.
     */
    it('should be able to modify the current date to an expired date.', () => {
        let date = cardPage.getDatePast(); 
        cardPage.updateExpirationDate(date.datePast, date.hoursPast, attributesCard.reminder.before15Min);
        cardPage.getExpirationDateText().text().then((message) => {
            expect(message).to.contain('(past due)');
        });
        cardPage.isSelectedExpirationDate(attributesCard.expirationDate.past).should('be.visible');
    });

    /**
     * Verify that able modify the date atually to a date due soon.
     */
    it('should be able to modify the current date to a date that will expire soon.', () => {
        let date = cardPage.getDateSoon();
        cardPage.updateExpirationDate(date.nextDate, date.nextHours, attributesCard.reminder.before120Min);
        cardPage.getExpirationDateText().text().then((message) => {
            expect(message).to.equal(`tomorrow at ${date.nextHours} (due soon)`);
        });
        cardPage.isSelectedExpirationDate(attributesCard.expirationDate.soon).should('be.visible');
    });

    /**
     * Verify that able modify the date actually to a date recently pas due.
     */
    it('should be able to modify the current date to a date that has just expired', () => {
        let date = cardPage.getDateActually();
        cardPage.updateExpirationDate(date.dateActually, date.hoursActually, attributesCard.reminder.before5Min);
        cardPage.getExpirationDateText().text().then((message) => {
            expect(message).to.equal(`today at ${date.hoursActually} (recently past due!)`);
        });
        cardPage.isSelectedExpirationDate(attributesCard.expirationDate.now).should('be.visible');
    });

    /**
     * Verify that a expiration date is actived.
     */
    it('Should be able active a expiration date', () => {
        cardPage.activateExpirationDate();
        cardPage.isSelectedExpirationDate(attributesCard.expirationDate.complete).should('be.visible');
    });

    /**
     * Verify that a expiration date is deleted.
     */
    it('Should be able delte a expiration date', () => {
        cardPage.deleteExpirationDate();
        cardPage.isPresentExpirationDate().should('not.be.visible');
    });

    afterEach(() => {
        cardPage.closeCardConfiguration();
        boardsPage.logOut();
    });
});