'use strict';
import moment from 'moment';

/**
 * The class model the Card Page.
 */
export class CardPage {
    /**
     * Constructor.
     */
    constructor() {
        this.contentConfiguratioCard = '.window';
        this.addToCardMemberButton = '.js-change-card-members';
        this.addToCardLabelsButton = '.js-edit-labels';
        this.addToCardCheckListButton = '.js-add-checklist-menu';
        this.addToCardExpirationButton = '.js-add-due-date';
        this.addToCardAttachedButton = '.js-attach';
        this.actionsMoveButton = '.js-move-card';
        this.actionsCopyButton = '.js-copy-card';
        this.actionsFollowButton = '.toggle-button';
        this.actionsFileButton = '.js-archive-card';
        this.actionsShareButton = '.js-more-menu';
        this.addCommentField = '.js-new-comment-input';
        this.saveDescriptionButton = '.edit-controls .primary';
        this.saveCommnetButton = '.comment-controls .primary';
        this.descriptionCardField = '.card-description';
        this.formatGuideButton = '.js-format-help';
        this.addMoreDetailLink = '.js-hide-with-draft';
        this.editDescriptionButton = '.description-title .js-show-with-desc';
        this.contentEyeIconCard = '.mod-card-detail-icons-smaller .icon-subscribe';

        this.descriptionText = '.js-desc p';
        this.cardFollowing = '.is-on';
        this.followCardCheckBox = '.js-comment-subscribe';
        this.contentCommentSaved = '.js-list-actions';
        this.contentElementSavedComment = '.mod-comment-type';
        this.textCommnetSaved = '.js-open-card p';
        this.editComment = '.js-edit-action';
        this.deleteSaveComment = '.js-confirm-delete-action';
        this.confirmationButton = '.js-confirm';
        this.commentEdited = '.js-text';
        this.saveEditCommentButton = '.js-save-edit';
        this.closeIcon = '.icon-close';

        this.contentLabel = '.js-card-detail-labels';
        this.contentDetailCard = '.card-detail-data';
        this.colorLabel = '.card-label';
        this.optionsContentButtons = '.no-back';
        this.editLableButton = '.js-details-edit-labels';
        this.editDescriptionButton = '.description-title .js-edit-desc';
        this.labelSelected = '.active';
        this.contentColorLabel = '.js-labels-list';
        this.contentUserInvited = '.js-member .member-initials';
        this.searchElement = '.js-autofocus';
        this.sendEmailInviteButton = '.js-send-email-invite';
        this.timeInputField = '.js-dpicker-time-input';
        this.dropDownReminder = '.js-custom-reminder';
        this.saveDateButton = '.wide';
        this.removeDateButton = '.js-remove-date';
        this.checkBoxExpirationDate = '.js-details-toggle-due-date-complete';
        this.expirationDateLabel = '.js-card-detail-due-date';
        this.expirationDateText = '.js-details-edit-due-date';
    }

    /**
     * Method that get the date actually.
     * @returns {date} date and hour actually.
     */
    getDateActually() {
        return {
            dateActually: moment().format('MM/DD/YYYY'),
            hoursActually: moment().format('LT')
        }
    }

    /**
     * Method that return a date future.
     * @returns {date} date and hour future.
     */
    getDateFuture() {
        return {
            dateFuture: moment().add(1, 'months').format('MM/DD/YYYY'),
            hoursFuture: moment().add(1, 'hours').format('LT')
        }
    }

    /**
     * Method that return a date past.
     * @returns {date} date past and hour actually.
     */
    getDatePast() {
        return {
            datePast: moment().subtract(5, 'days').format('MM/DD/YYYY'),
            hoursPast: moment().format('LT')
        }
    }

    /**
     * Method that return a date soon.
     * @returns {date} next date and hour.
     */
    getDateSoon() {
        return {
            nextDate: moment().add(1, 'days').format('MM/DD/YYYY'),
            nextHours: moment().subtract(1, 'hours').format('LT')
        }
    }

    /**
     * Method that add a description.
     * @param {string} description card description.
     */
    addDescriptionTocard(description) {
        this.clickAddDescriptiondetail();
        this.setDescription(description);
        this.clickSaveDescription();
    }

    /**
     * Method that clicking for enabled the add more description field.
     */
    clickAddDescriptiondetail() {
        cy.get(this.contentConfiguratioCard).find(this.addMoreDetailLink).click();
    }

    /**
     * Method that set a description for card.
     * @param {string} description card description.
     */
    setDescription(description) {
        cy.get(this.descriptionCardField).type(description);
    }

    /**
     * Method that clicking in save button of a description. 
     */
    clickSaveDescription() {
        cy.get(this.saveDescriptionButton).click();
    }

    /**
     * Method tha treturn the elemnt of edit buton of a description.
     * @returns {Object} promise.
     */
    isPresentEditDescriptionButton() {
        return cy.get(this.editDescriptionButton);
    }

    /**
     * Method that return the description saved.
     * @returns {Object} promise.
     */
    getDescriptiontext() {
        return cy.get(this.descriptionText);
    }

    /**
     * Method that add a commentario.
     * @param {string} comment card comment.
     */
    addCommentToCard(comment) {
        this.setComment(comment);
        this.clickSaveCommnet();
    }

    /**
     * Method that set a comment to a card.
     * @param {string} comment card comment.
     */
    setComment(comment) {
        cy.get(this.addCommentField).click().type(comment);
    }

    /**
     * Method that clicking in save button of a comment.
     */
    clickSaveCommnet() {
        cy.get(this.saveCommnetButton).click();
    }

    /**
     * Method that clikcin in checkBox of following a card
     */
    selectCardFollowing() {
        cy.get(this.followCardCheckBox).check();
    }

    /**
     * Mehod that edit a comment specific.
     * @param {string} commentName commnet.
     */
    editCommentByCommentName(commentName) {
        this.clickEditButton(commentName);
    }

    /**
     * method that change the commnet.
     * @param {string} newComment new comment.
     */
    changeComment(newComment) {
        this.setNewComment(newComment);
        this.clickSaveButton();
    }

    /**
     * Method that clicking a comment specific.
     * @param {string} commentName comment.
     */
    clickEditButton(commentName) {
        cy.get(this.contentConfiguratioCard).find(this.contentElementSavedComment)
            .find(this.textCommnetSaved).contains(commentName)
            .closest(this.contentCommentSaved).within(() => {
                cy.get(this.editComment).click();
            });
    }

    /**
     * Method that set the new commnet.
     * @param {string} newComment comment 
     */
    setNewComment(newComment) {
        cy.get(this.commentEdited).clear().type(newComment);
    }

    /**
     * Method that clicking in save button after edit commnet
     */
    clickSaveButton() {
        cy.get(this.contentElementSavedComment).
            find(this.saveEditCommentButton)
            .click();
    }

    /**
     * Method that return the comment saved.
     * @returns {Object} promise.
     */
    getCommnetSaved() {
        return cy.get(this.contentConfiguratioCard)
            .find(this.contentElementSavedComment)
            .find(this.textCommnetSaved);
    }

    /**
     * Method that return the content to all of the comment.
     * @returns {Object} promise.
     */
    getContentSComentSaved() {
        return cy.get(this.contentConfiguratioCard).find(this.contentCommentSaved);
    }

    /**
     * Method that return the text area of the comment.
     * @returns {Object} promise.
     */
    isPresentTextFieldComment() {
        return cy.get(this.commentEdited);
    }

    /**
     * Method that delte a comment by comment specific.
     * @param {string} commentName  comment.
     */
    delteCommentByCommentName(commentName) {
        this.clickDeleteButon(commentName);
        this.clickConfirmationButton();
    }

    /**
     * Method that clicking in delete comment.
     * @param {string} commentName comment.
     */
    clickDeleteButon(commentName) {
        cy.get(this.contentConfiguratioCard).find(this.contentElementSavedComment)
            .find(this.textCommnetSaved).contains(commentName)
            .closest(this.contentCommentSaved).within(() => {
                cy.get(this.deleteSaveComment).click();
            });
    }

    /**
     * Method that clicking in confirmation button.
     */
    clickConfirmationButton() {
        cy.get(this.confirmationButton).click();
    }

    /**
     * Methos that following a card.
     */
    followingCard() {
        this.clickActionsFollowButton();
    }

    /**
     * Method that clicking in follow button.
     */
    clickActionsFollowButton() {
        cy.get(this.actionsFollowButton).click();
    }

    /**
     * Methos tha return the follow button after clicking.
     * @returns {Object} promise. 
     */
    isPresentFollowCardIcon() {
        return cy.get(this.cardFollowing);
    }

    /**
     * Method that return the element of the eye icon.
     * @returns {Object} promise.
     */
    isPresentEyeIcon() {
        return cy.get(this.contentEyeIconCard);
    }

    /**
     * Method that close the configuration table of a card.
     */
    closeCardConfiguration() {
        cy.get(this.contentConfiguratioCard).find(this.closeIcon).click();
    }

    /**
     * Method that added a color label with the label button. 
     * @param {string} color color label. 
     */
    addColorLabelToCardWithLabelButton(color) {
        this.clickAddToCardLabelsButton();
        this.selectColor(color);
        this.clickCloseIcon();
    }

    /**
     * Method that added another color label with add label icon.
     * @param {string} color color label. 
     */
    addColorLabelToCardWithLabelEdit(color) {
        this.clickEditlabel();
        this.selectColor(color);
        this.clickCloseIcon();
    }

    /**
     * Method that clicking in close icon.
     */
    clickCloseIcon() {
        cy.get(this.optionsContentButtons).find(this.closeIcon).click();
    }

    /**
     * Method that select a color.
     * @param {string} color color label
     */
    selectColor(color) {
        cy.get(this.optionsContentButtons).find(`.card-label-${color}`).click();
    }

    /**
     * Method that clicking in label button.
     */
    clickAddToCardLabelsButton() {
        cy.get(this.addToCardLabelsButton).click();
    }

    /**
     * Method that clicking in edit label icon.
     */
    clickEditlabel() {
        cy.get(this.editLableButton).click();
    }

    /**
     * Method that return the color label added.
     * @param {string} color color label.
     * @returns {Object} promise.
     */
    isPresentColorAssigned(color) {
        return cy.get(this.contentDetailCard).find(this.contentLabel).find(`.card-label-${color}`);
    }

    /**
     * Method that return of the element add button.
     * @returns {Object} promise.
     */
    isPresentAddColorLabel() {
        return cy.get(this.editLableButton);
    }

    /**
     * Method that return of the elemet label.
     * @returns {Object} promise.
     */
    isPresentLabel() {
        return cy.get(this.contentDetailCard).find(this.contentLabel);
    }

    /**
     * Method that clicking in edit description button
     */
    clickEditDescriptionButton() {
        cy.get(this.contentConfiguratioCard).find(this.editDescriptionButton).click();
    }

    /**
     * Method that delete or erase a description.
     */
    deleteDescription() {
        this.clickEditDescriptionButton();
        cy.get(this.descriptionCardField).clear();
        this.clickSaveDescription();
    }

    /**
     * Method that update the description.
     * @param {string} newdescription description.
     */
    editDescription(newdescription) {
        this.clickEditDescriptionButton();
        cy.get(this.descriptionCardField).clear().type(newdescription);
        this.clickSaveDescription();
    }

    /**
     * Method that deselect the color label selected.
     */
    deselectLabel() {
        this.clickAddToCardLabelsButton()
        cy.get(this.contentColorLabel).find(this.colorLabel).each((colors) => {
            colors.filter(this.labelSelected).click();
        });
    }

    /**
     * Method that clicking button.
     * @param {locator} locator locaotr.
     */
    clickButton(locator) {
        cy.get(locator).click();
    }

    /**
     * Method that added expiration date.
     * @param {string} date 
     * @param {string} hour 
     * @param {string} reminder 
     */
    addExpirationDate(date, hour, reminder) {
        this.clickExpirationButton();
        this.getDateValid(date);
        this.setHourValid(hour);
        this.clickSelectReminder(reminder);
        this.clickSaveDateButton();
    }

    /**
     * Method that clicking on expiration button.
     */
    clickExpirationButton() {
        this.clickButton(this.addToCardExpirationButton);
    }

    /**
     * Method that set the date.
     * @param {string} date date.
     */
    getDateValid(date) {
        cy.get(this.searchElement).clear().type(date);
    }

    /**
     * Method that set the hour.
     * @param {string} hour hour.
     */
    setHourValid(hour) {
        cy.get(this.timeInputField).clear().type(hour);
    }

    /**
     * Method that select a reminder type.
     * @param {string} reminder reminder.
     */
    clickSelectReminder(reminder) {
        cy.get(this.dropDownReminder).select(reminder);
    }

    /**
     * Method that clicking on save date button.
     */
    clickSaveDateButton() {
        this.clickButton(this.saveDateButton)
    }

    /**
     * Method that delete an expiration date.
     */
    deleteExpirationDate() {
        this.clickExpirationButton();
        this.clickCloseDateButton();
    }

    /**
     * Method that clicking on close date button.
     */
    clickCloseDateButton() {
        this.clickButton(this.removeDateButton);
    }

    /**
     * Method that update the date, hour and reminder.
     * @param {string} newDate 
     * @param {string} newHour 
     * @param {string} newReminder 
     */
    updateExpirationDate(newDate, newHour, newReminder) {
        this.clickExpirationButton();
        this.getDateValid(newDate);
        this.setHourValid(newHour);
        this.clickSelectReminder(newReminder);
        this.clickSaveDateButton();
    }

    /**
     * Method that active the expiration date.
     */
    activateExpirationDate() {
        cy.get(this.checkBoxExpirationDate).click({ force: true });
    }

    /**
     * Method that return element of the expiration date.
     * @returns {Object} promise.
     */
    isPresentExpirationDate() {
        return cy.get(this.expirationDateLabel);
    }

    /**
     * Method that return the text of the expiration date.
     * @returns {Object} promise.
     */
    getExpirationDateText() {
        return cy.get(this.expirationDateText);
    }

    /**
     * Method that return the detail of the expiration date.
     * @param {string} dateActual detail.
     * @returns {Object} promise.
     */
    isSelectedExpirationDate(dateActual) {
        return cy.get(`.card-detail-item .is-due-${dateActual}`)
    }
}
