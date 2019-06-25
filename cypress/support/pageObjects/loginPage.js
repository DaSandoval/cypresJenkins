'use strict';
import BoardsPage from "./boardsPage.js";
import credentials from '../../fixtures/credentials.json';
/**
 * The class models the Login page.
 */
export default class LoginPage {

    constructor() {
        this.user = "#user";
        this.password = "#password";
        this.login = "#login";
    }

    /**
     * Method to set Username
     * @param {string} userName value
     */
    setUsername(userName) {
        cy.get(this.user).type(userName);
    }

    /**
     * Method to set Password
     * @param {string} password value
     */
    setPassword(password) {
        cy.get(this.password).type(password);
    }

    /**
     * Method to click on Login button
     */
    clickLogin() {
        cy.get(this.login).click();
    }

    /**
     * Method to set url to login page
     */
    setLoginUrl() {
        cy.visit("/login");
    }

    /**
     * Method to login to Trello app
     * @param {string} username value
     * @param {string} password value
     * @returns {BoardsPage} instance
     */
    loginToApp(username = credentials.admin.username, password = credentials.admin.password) {
        this.setLoginUrl();
        this.setUsername(username);
        this.setPassword(password);
        this.clickLogin();
        return new BoardsPage();
    }
}
