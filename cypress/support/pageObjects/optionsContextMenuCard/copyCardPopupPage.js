'use strict';

import MoveCardPopupPage from "./moveCardPopupPage";

/**
 * Popup page for copy card action
 */
export default class CopyCardsPopupPage extends MoveCardPopupPage {
  constructor() {
    super();
    this.cardTitle = ".pop-over [name='name']";
    this.submit = ".pop-over-content [type='submit'][value='Create Card']";
  }

  /**
   * This method sets the title of the new card
   * @param {string} title    
   */
  setTitle(title) {
    cy.get(this.cardTitle).type(title);
  }

  /**
   * Set values for card copying and then submit the changes
   * @param {string} title 
   * @param {string} nextBoard 
   * @param {string} nextList 
   * @param {string} nextPosition 
   */
  doAction(title, nextBoard, nextList, nextPosition) {
    if (title) {
      this.setTitle(title);
    }
    super.doAction(nextBoard, nextList, nextPosition);        
  }
}