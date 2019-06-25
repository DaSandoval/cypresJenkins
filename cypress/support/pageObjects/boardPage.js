'use strict';

import ContextMenuCardFactory from "./optionsContextMenuCard/contextMenuCardFactory";
import { CardPage } from "./cardPage";
const NAMEPARAMETER = "<name>";

/**
 * The class models the Board page.
 */
export default class BoardPage {
    constructor() {
        this.boardMain = '.board-main-content';
        this.addNewList = '.mod-add';
        this.closeIcon = '.icon-close';
        this.columnNameInput = ".list-name-input";
        this.addListButton = '.mod-list-add-button';

        this.inviteButton = '.board-header-btn-invite';
        this.changeName = '.mod-card-back-title';
        this.editIcon = '.icon-edit';
        this.editedCardOption = '.quick-card-editor';
        this.editCardName = '.list-card-edit-title';
        this.saveButton = '.js-save-edits';
        this.allListName = '.js-list-header>h2';

        this.listCardTitle = '.list-card-title';
        this.editedCardTable = '.window-overlay';
        this.listNameEdit = '.is-editing';

        this.headerListName = '.js-list-header';
        this.controlAddNewList = '.list-add-controls';
        this.cardsList = '.js-list .list-cards';
        this.headerCardName = '.list-card';

        this.addColumnLink = ".placeholder";
        this.addColumnButton = ".primary.js-save-edit";
        this.baseColumn = ".js-list-content .js-list-header";
        this.addCardLink = ".js-add-a-card";
        this.cardNameInput = ".list-card-composer-textarea";
        this.addCardButton = ".primary.js-add-card";
        this.archiveCardEditIcon = '.js-archive';
        this.columns = '.js-list';
        this.archiveColumn = '.js-close-list';
        this.openCardComposer = '.open-card-composer';
        this.listCardDetails = '.list-cards .js-card-details';
        this.openListMenu = '.js-open-list-menu';
        this.containerList = ".list.js-list-content";
        this.listName = `.js-list-header [aria-label*='${NAMEPARAMETER}']`;
        this.cardsLocator = "a.list-card";
        this.cardLocator = `a.list-card[href*='${NAMEPARAMETER}']`;
        this.options = { move: "move-card", copy: "copy-card" };

        this.titleBoard = '.js-board-editing-target';
        this.deleteMesssage = '.big-message>h1';
        this.backIconMenuTable = '.board-menu-header-back-button';
        this.moreOptionMenu = '.js-open-more';
        this.closeBoard = '.js-close-board';

        this.deleteBoard = '.js-delete';
        this.contentAddList = '.js-add-list';
        this.archivedButton = '.js-archive-card';
        this.boardCardConfiguration = '.js-tab-parent';
        this.archivedItemMenu = '.js-open-archive';
        this.archivedItems = '.archived-list-card';
        this.containsArchivedItems = '.js-archive-content';
        this.contentListaName = '.js-list-content';
        this.archivedCard = '.js-archive-cards';
        this.closeConfirmationButton = '.js-confirm';
        this.contentCardName = '.js-list-cards';
        this.nameBoardInvite = '.pop-over-header-title';
        this.emailOrNameField = '.autocomplete-input';
        this.sendInviteButton = '.autocomplete-btn';
        this.usersInvited = '.js-list-draggable-board-members>.js-member';
        this.removeUserInvited = '.js-remove-member';
        this.unarchivedItem = '.js-reopen';
        this.switchCardList = '.js-switch-section';
        this.contentNameArcivedList = '.item-name';
        this.contentArchivedList = '.u-clearfix';
    }

    /**
     * Method that search a card specific.
     * @param {string} cardName card name.
     */
    clickCard(cardName) {
        cy.get(this.cardsList).within(() => {
            cy.get(this.listCardTitle).contains(cardName).closest(this.headerCardName).click({ force: true });
        });
        return new CardPage();
    }

    /**
     * Method that clear the name of the card and set a new name.
     * @param {string} newNameCard  new name for the card.
     * @param {string} carNameActual card actual to modify.
     */
    setNewCardName(cardNameActual, newNameCard) {
        this.clickCard(cardNameActual);
        cy.get(this.changeName).click().clear().type(newNameCard);
        cy.get(this.editedCardTable).find(this.closeIcon).first().click();
    }

    /**
     * Method that clicking in a name list specific.
     * @param {string} listName a list especific.
     */
    clickEditListName(listName) {
        cy.get(this.contentListaName).find(this.allListName).contains(listName).closest(this.headerListName).click();
    }

    /**
     * Method that set the new list name.
     * @param {string} newListName new name.
     * @param {string} listNameActual list actual to modify.
     */
    setNewListName(listNameActual, newListName) {
        this.clickEditListName(listNameActual);
        cy.get(this.listNameEdit).type(newListName);
        cy.get(this.addNewList).click();
        this.clickCloseIcon(this.controlAddNewList);
    }

    /**
     * Method that close a window specific.
     * @param {locator} locator  container.
     */
    clickCloseIcon(locator) {
        cy.get(locator).find(this.closeIcon).click();
    }

    /**
     * Method that edit a specific card clicking in edit icon.
     * @param {string} cardName specific card.
     */
    clickCardEditIconByCardName(cardName) {
        cy.get(this.cardsList).within(() => {
            cy.get(this.listCardTitle).contains(cardName).closest(this.headerCardName).find(this.editIcon).click({ force: true });
        });
    }

    /**
     * Method that change the name of the card.
     * @param {string} newCardName new name.
     */
    setNewCardTitle(cardNameActual, newCardName) {
        this.clickCardEditIconByCardName(cardNameActual);
        cy.get(this.editedCardOption).find(this.editCardName).type(newCardName, { force: true });
        cy.get(this.saveButton).click({ force: true });
    }

    /**
     * Method that return a object with url.
     * @returns {Object} promise that contains the url of the page actual.
     */
    getUrlBoardPage() {
        return cy.url();
    }

    /**
     * Method that return a object to array list.
     * @returns {Object} promise name of the lists.
     */
    getArrayNameList() {
        return cy.get(this.contentListaName).find(this.allListName);
    }

    /**
     * Method that return a object to array of card.
     * @param {string} cardName list name. 
     * @returns {Object} promise of card list.
     */
    getArrayCardName(cardName) {
        return cy.get(this.cardsList).within(() => {
            cy.get(this.listCardTitle).contains(cardName)//.closest(this.headerCardName);
        });
    }

    /**
     * Gets the Add column link and click on it.
     */
    clickAddColumnLink() {
        cy.get(this.addColumnLink).click();
    }

    /**
     * Type the column name into the input.
     * @param {string} columnName 
     */
    typeColumnName(columnName) {
        cy.get(this.columnNameInput).type(columnName);
        this.actualColumn = columnName;
    }

    /**
     * Click on Add Column button.
     */
    clickAddColumnButton() {
        cy.get(this.addColumnButton).click();
    }

    /**
     * Click on Add Card Link of a specific column
     * @param {string} columnName 
     */
    clickAddCardLink(columnName) {
        this.getAddCardLink(columnName).click();
    }

    /**
     * Type the card Name into the input.
     * @param {string} cardName 
     */
    typeCardName(cardName) {
        cy.get(this.listCardTitleInput).type(cardName);
    }

    /**
     * Click on Add Card Button.
     */
    clickAddCardButton() {
        cy.get(this.addCardButton).click();
    }

    /**
     * Add a Column.
     * @param {string} columnName 
     */
    addColumn(columnName) {
        this.clickAddColumnLink();
        this.typeColumnName(columnName);
        this.clickAddColumnButton();
        return new BoardPage();
    }

    /**
     *  Add a Card.
     * @param {string} columnName 
     * @param {string} cardName 
     */
    addCard(columnName, cardName) {
        this.clickAddCardLink(columnName);
        this.typeCardName(cardName);
        this.clickAddCardButton();
        return new BoardPage();
    }

    /**
     * Method to get the column element created
     * @param {string} columnName
     * @returns  {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAddedColumn(columnName) {
        return cy.get(this.baseColumn).contains(columnName).parent();
    }

    /**
     * Method to get the Add card element of a column
     * @param {string} columnName 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAddCardLink(columnName) {
        return cy.get(this.baseColumn).contains(columnName).parent().parent().find(this.openCardComposer);
    }

    /**
     * Method to get the card element created
     * @param {string} cardName 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getAddedCard(columnName) {
        return cy.get(this.baseColumn).contains(columnName).parent().parent().find(this.listCardTitle);
    }

    /**
     * Clicking on edit icon of a card of a specific column
     * @param {string} columnName 
     * @param {string} cardName 
     */
    clickEditCardIcon(columnName, cardName) {
        cy.get(this.columns).contains(columnName).parent().parent().find(this.listCardDetails).contains(cardName).parent().parent().within(() => {
            cy.get(this.editIcon).click({ force: true });
        })
    }

    /**
     * Click on Edit of a specific column
     * @param { string } columnName 
     */
    clickEditColumn(columnName) {
        this.getAddedColumn(columnName).contains(columnName).parent().find(this.openListMenu).click();
    }

    /**
     * Click on Archive column option
     */
    clickArchiveColumn() {
        cy.get(this.archiveColumn).click();
    }

    /**
   * Given a card in list, it drags and drops the card to other or same list in other position
   * @param {string} name Card name
   * @param {string} fromList Source list
   * @param {string} nextList End list
   * @param {string} nextPosition Position of the card in the list
   */
    dragAndDropCard(name, fromList, nextList, nextPosition) {
        cy.get(this.listName.replace(NAMEPARAMETER, fromList))
            .parents(this.containerList)
            .within(parent => {
                cy.get(this.cardLocator.replace(NAMEPARAMETER, name)).trigger(
                    "mousedown",
                    {
                        which: 1
                    }
                );
            });

        cy.get(this.listName.replace(NAMEPARAMETER, nextList))
            .parents(this.containerList)
            .within(parent => {
                cy.get(this.cardsLocator)
                    .eq(nextPosition)
                    .trigger("mousemove", "top")
                    .trigger("mouseup", { force: true });
            });
    }

    /**
     * Given a list name and a position, it returns a card.
     * @param {string} listName List where the card will be searched.
     * @param {string} position The position on the list.   
     */
    getCardIn(listName, position) {
        return this.getAllCards(listName).eq(position);
    }

    /**
     * This method opens the context menu over a card
     * @param {string} name Card name
     * @param {string} fromList List name
     */
    openContextMenuOnCard(name, fromList) {
        cy.get(this.listName.replace(NAMEPARAMETER, fromList))
            .parents(this.containerList)
            .within(parent => {
                cy.get(this.cardLocator.replace(NAMEPARAMETER, name))
                    .eq(0)
                    .trigger("contextmenu");
            });
    }

    /**
     * Select option from a card context menu
     * @param {string} option Action displayed on context menu
     * @returns {object} New popup page instance according to option selected
     */
    selectContextOptionOnCard(option) {
        const optionsFactory = new ContextMenuCardFactory();
        cy.get(`.js-${this.options[option]}`).click();
        return optionsFactory.getPageFromOption(option);
    }

    /**
     * Get all cards from a List
     * @param {string} fromList List Name.
     * @param {string} name  Name of the card. Optional. With the default value it searches all cards in the list.
     * @returns {object} List of all card objects.
     */
    getAllCards(fromList, name = "/") {
        return cy
            .get(this.listName.replace(NAMEPARAMETER, fromList))
            .parents(this.containerList)
            .within(parent => {
                return cy.get(this.cardLocator.replace(NAMEPARAMETER, name));
            });
    }

    /**
     * Method that return a object that contains the title of the board.
     * @returns {Object} promise.
     */
    getBoardTitle() {
        return cy.get(this.titleBoard);
    }

    /**
     * Method that clicking in the option back icon of the menu table.
     */
    clickBackIconMenuTable() {
        cy.get(this.backIconMenuTable).click();
    }

    /**
     * Method that cilcking more options button of the menu.
     */
    clickMenuMoreOption() {
        cy.get(this.moreOptionMenu).click();
    }

    /**
     * Method that close the board.
     */
    clickCloseBoard() {
        cy.get(this.closeBoard).click();
        this.clickCloseConfirmationButton();
    }

    /**
     * Method that delete the board.
     */
    clickDeleteBoard() {
        cy.get(this.deleteBoard).click();
        cy.get(this.closeButtonConfirmation).click();
    }

    /**
     * Method that return the message after delete the board.
     * @returns {Object} promise.
     */
    getVerificationMessage() {
        return cy.get(this.deleteMesssage);
    }

    /**
     * Method that remove a board.
     */
    removeBoard() {
        this.clickBackIconMenuTable();
        this.clickMenuMoreOption();
        this.clickCloseBoard();
        this.clickDeleteBoard();
    }

    /**
     * Method that clicking on the archive button.
     */
    clickArchivedLink() {
        cy.get(this.archivedButton).click();
    }

    /**
     * Method that close the configuration board of a card
     */
    clickCloseIconCard() {
        cy.get(this.boardCardConfiguration).find(this.closeIcon).first().click();
    }

    /**
     * Method that archive a card.
     * @param {string} cardName name of the card.
     */
    archiveByCardName(cardName) {
        this.clickCard(cardName);
        this.clickArchivedLink();
        this.clickCloseIconCard();
    }

    /**
     * Method that return all cards.
     * @returns {Object} promise.
     */
    isPresentCard() {
        return cy.get(this.cardsList).find(this.listCardTitle);
    }

    /**
     * Method that return the archived items.
     * @returns {Object} promise.
     */
    getArchivedItems() {
        return cy.get(this.archivedItems).find(this.listCardTitle);
    }

    /**
     * Method that show all items archived.
     */
    dispalyArchivedItems() {
        this.clickBackIconMenuTable();
        this.clickMenuMoreOption();
        this.clickMenuArchivedItems();
    }

    /**
     * Method that return the archived items for see if these are present.
     * @returns {Object} promise.
     */
    isDispalyedArchivedItems() {
        return cy.get(this.containsArchivedItems);
    }

    /**
     * Method that clicking in archive items in the board menu.
     */
    clickMenuArchivedItems() {
        cy.get(this.archivedItemMenu).click();
    }

    /**
     * Method that archived the card after clicking in edit icon of a card.
     */
    clickArchivedCardByEditIcon() {
        cy.get(this.archiveCardEditIcon).click();
    }

    /**
     * Method that archived a card after clicking in edit icon.
     * @param {string} cardName card name.
     */
    ardcivedCardByEditIcon(cardName) {
        this.clickCardEditIconByCardName(cardName);
        this.clickArchivedCardByEditIcon();
    }


    /**
     * Method that clicking in extra list menu of a list specific.
     * @param {string} listName list name.
     */
    clickExtraListMenu(listName) {//298 clickEditColumn()
        cy.get(this.contentListaName).find(this.allListName)
            .contains(listName).closest(this.contentListaName).within(() => {
                cy.get(this.openListMenu).click({ force: true });
            })
    }

    /**
     * Method that clicking in archived card link
     */
    clickArchiveCardLink() {
        cy.get(this.archivedCard).click();
    }

    /**
     * Method that clikcing on invite button
     */
    clickInviteButton() {
        cy.get(this.inviteButton).click();
    }

    /**
     * Method that return the name of the board after clicking on invite buton.
     * @returns {Object} promise.
     */
    isDisplayedBoardInvite() {
        return cy.get(this.nameBoardInvite);
    }

    /**
     * Method that set the email or user.
     * @param {string} emailOrName invite user.
     */
    setEmailOrName(emailOrName) {
        cy.get(this.emailOrNameField).click().type(emailOrName);
    }

    /**
     * Method that clicking on send invite button.
     */
    clickSendEnviteButton() {
        cy.get(this.sendInviteButton).click();
    }

    /**
     * Method that return the number of users invited.
     * @returns {Object} promise. 
     */
    numberUsersInvited() {
        return cy.get(this.usersInvited);
    }

    /**
     * Method that add to new user to the proyect. 
     * @param {string} newUser invite user. 
     */
    addUserToProyect(newUser) {
        this.clickInviteButton();
        this.setEmailOrName(newUser);
        this.clickSendEnviteButton();
    }

    /**
     * Methos that clicking to the last user invited.
     */
    clickUserInvited() {
        cy.get(this.usersInvited).first().click();
    }

    /**
     * Method that clicking on remove user invited.
     */
    clickRemoveUserInvited() {
        cy.get(this.removeUserInvited).click();
    }

    /**
     * Method that clicking on confirmation button for remove user invited. 
     */
    clickCloseConfirmationButton() {
        cy.get(this.closeConfirmationButton).click();
    }

    /**
     * Method that archived all cards of a list specific.
     * @param {string} listName list name. 
     */
    archivedAllCardByListName(listName) {
        this.clickEditColumn(listName);
        this.clickArchiveCardLink();
        this.clickCloseConfirmationButton();
    }

    /**
     * Method that return the table that contains the cards.
     * @returns {Object} promise.
     */
    isVisibleCardTable(listName) {
        return cy.get(this.contentListaName).find(this.allListName)
            .contains(listName).closest(this.contentListaName)
            .find(this.contentCardName)
    }

    /**
     * Method that archived a list specific.
     * @param {string} listName  list name
     */
    archivedListByName(listName) {
        this.clickEditColumn(listName);
        this.clickArchiveColumn();
    }

    /**
     * Method that remove to an user
     */
    removeUserAdded() {
        this.clickUserInvited();
        this.clickRemoveUserInvited();
        this.clickCloseConfirmationButton();
    }

    /**
     * Method that unarchive all cards.
     */
    unarchiveCards() {
        this.clickBackIconMenuTable();
        this.clickMenuMoreOption();
        this.clickMenuArchivedItems();
        cy.get(this.archivedItems).each(() => {
            cy.get(this.unarchivedItem).first().click();
        });
    }

    /**
     * Method that unarchive a list specific.
     * @param {string} list list name.
     */
    unarchiveList(list) {
        this.clickBackIconMenuTable();
        this.clickMenuMoreOption();
        this.clickMenuArchivedItems();
        this.clickSwitchCardList();
        cy.get(contentNameArcivedList).contains(list).closest(contentArchivedList).within(() => {
            cy.get(this.unarchivedItem).first().click();
        });
    }

    /**
     * Method that clicking in switch card to list or vice versa.
     */
    clickSwitchCardList() {
        cy.get(this.switchCardList).click();
    }
}
