'use strict';

import PopupBasePage from "./popupBasePage";
/**
 * Popup page for move card action
 */
export default class MoveCardPopupPage extends PopupBasePage {
  constructor() {
    super();
    this.selectBoard = ".js-select-board";
    this.selectList = ".js-select-list";
    this.selectPosition = ".js-select-position";
    this.submit = ".pop-over-content [type='submit'][value='Move']";
  }

  /**
   * Set value for ending board
   * @param {string} destinyBoard
   */
  selectNextBoard(destinyBoard) {
    cy.get(this.selectBoard).select(destinyBoard);
  }

  /**
   * Set value for ending list
   * @param {string} destinyList
   */
  selectNextList(destinyList) {
    cy.get(this.selectList).select(destinyList);
  }

  /**
   * Set value for ending position
   * @param {string} destinyPosition
   */
  selectNextPosition(destinyPosition) {
    cy.get(this.selectPosition).select(destinyPosition);
  }
  /**
   * Click on submit popup button
   */
  clickSubmit() {
    cy.get(this.submit).click();
  }
/**
   * Set values for card moving and then submit the changes   
   * @param {string} nextBoard 
   * @param {string} nextList 
   * @param {string} nextPosition 
   */
  doAction(nextBoard, nextList, nextPosition) {
    if (nextBoard != undefined) {
      this.selectNextBoard(nextBoard);
    }
    if (nextList != undefined) {
      this.selectNextList(nextList);
    }
    if (nextPosition != undefined) {
      this.selectNextPosition(nextPosition);
    }
    this.clickSubmit();
  }
}
