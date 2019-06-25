'use strict';

/**
 * Interface for popup card pages
 */
export default class PopupBasePage {
  constructor() {
    this.close = ".icon-close.pop-over-header-close-btn";
    if (!this.doAction) {
      throw new Error("doAction() is not implemented");
    }
  }
}
