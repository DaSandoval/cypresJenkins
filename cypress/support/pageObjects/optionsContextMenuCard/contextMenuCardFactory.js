'use strict';

import MoveCardPopupPage from "./moveCardPopupPage";
import CopyCardPopupPage from "./copyCardPopupPage";

/**
 * Factory for card context menu options pages
 */
export default class ContextMenuCardFactory {
  constructor() {    
  }
  /**
   * This method creates a new page according to option selected
   * @param {string} optionName Value for option
   * @returns {object} 
   */
  getPageFromOption(optionName) {
    switch(optionName) {
      case "move": return new MoveCardPopupPage();
      case "copy": return new CopyCardPopupPage();
    }    
  }
}
