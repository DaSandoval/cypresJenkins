'use strict';

import BoardPage from "./boardPage";
const NAMEPARAMETER = "<name>";

/**
 * The class models the Boards page.
 */
export default class BoardsPage {
    constructor() {
        this.boardsLink = '[href*="/boards"] > span:nth-of-type(2)';
        this.createNewBoardButton = '.mod-add';
        this.titleBoard = '.subtle-input';
        this.dropDown = '.vis-chooser-trigger';
        this.permits = '.pop-over-list>li';
        this.confirmationButton = '.js-confirm';
        this.createBoardButton = '.primary';
        this.boardsList = '.boards-page-board-section-list-item';
        this.nameTable = '.board-tile-details-name>div';

        this.homeIcon = '.BPThuIGuFRW2Dg>a';
        this.userMenu = "[data-test-id='header-member-menu-button']";
        this.logout = "[data-test-id='header-member-menu-logout']";
        this.labelTo = 'a';

        this.board = ".board-tile-details-name";
        this.projectName = `div.content-all-boards [title='<name>']`;
    }

    /**
     * Method to return the current pathname.
     * @returns  Cypress.Chainable<Location> current pathname value.
     */
    getPathName() {
        return cy.location('pathname');
    };

    /**
     * Method to verify is boards link is present.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getBoardsLink() {
        return cy.get(this.boardsLink);
    }

    /**
     * Method to get text from Boards link
     * @param {string} value from boards link
     * @returns {Object} promise.
     */
    getBoardsLinkText() {
        return cy.getText2(this.boardsLink);
    }

    /**
     * Method that clicking in create a new Board button.
     */
    clickNewBoardButton() {
        cy.get(this.createNewBoardButton).first().click();
    }

    /**
     * Method that clicking in create board button.
     */
    clickCreateBoardButton() {
        cy.get(this.createBoardButton).click();
    }

    /**
     * Method that set a name for the new board.
     * @param {string} title title of the board.
     */
    setBoardName(title) {
        cy.get(this.titleBoard).type(title);
    }

    /**
     * Method that clicking in permits option for create a new board.
     */
    clickConfigurationPermits() {
        cy.get(this.dropDown).click();
    }

    /**
     * Method that select a private permit.
     */
    selectPrivatePermits() {
        this.clickConfigurationPermits();
        cy.get(this.permits).find(this.labelTo).first().click();
    }

    /**
     * Method that select a public permit.
     */
    selectPublicPermits() {
        this.clickConfigurationPermits();
        cy.get(this.permits).find(this.labelTo).last().click();
        cy.get(this.confirmationButton).click();
    }

    /**
     * Method that crete a new board.
     * @param {string} boardName board name.
     * @return {BoardPage} instance.
     */
    createBoard(boardName) {
        this.clickNewBoardButton();
        this.setBoardName(boardName);
        this.selectPublicPermits();
        this.clickCreateBoardButton();
        return new BoardPage();
    }

    /**
     * Method that selecc a board that exist.
     * @return {BoardPage} instance.
     */
    clickExistingBoard(boardName) {
        cy.get(this.boardsList)
            .find(this.nameTable).contains(boardName).closest(this.labelTo).click();
        return new BoardPage();
    }

    /**
     * Method that return all board.
     * @return {Object} promise.
     */
    getAllBoards() {
        return cy.get(this.boardsList).find(this.nameTable);
    }

    /**
     * Method that clicking in home icon.
     */
    clickHomeIcon() {
        cy.get(this.homeIcon).click();
    }

    /**
     * Click on User Menu element.
     */
    clickUserMenu() {
        cy.get(this.userMenu).click();
    }

    /**
     * Click on Logout option.
     */
    clickLogoutOption() {
        cy.get(this.logout).click();
    }

    /**
     * Logout of Trello.
     */
    logOut() {
        this.clickUserMenu();
        this.clickLogoutOption();
    }

    /**
     * Click on Board element 
     * @param {string} boardName
     * @returns {BoardPage} 
     */
    clickBoard(boardName) {
        cy.get(this.board).contains(boardName).click();
        return new BoardPage();
    }

    /** 
     * Method to open a project
     * @param {string} title Title of the project
     * @returns {object} New page instance for project board
     */
    openProject(title) {
        cy.get(this.projectName.replace(NAMEPARAMETER, title)).click();
        return new BoardPage();
    }
}
