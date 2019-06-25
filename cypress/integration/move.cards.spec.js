import LoginPage from "../support/pageObjects/loginPage";

describe("Move card", function() {
  const loginPage = new LoginPage();
  let projectBoardPage;
  beforeEach(() => {
    projectBoardPage = loginPage.loginToApp().clickBoard("something");
  });

  /**
   * This text cases verifies the movement of a card using the context menu option.
   * Validating that the card is in the end list and removed from the source.
   */
  it("Move card from contextual menu", function() {
    let cardName = "otro";
    let sourceList = "backlog";
    let endList = "mientras tanto";

    projectBoardPage.openContextMenuOnCard(cardName, sourceList);

    projectBoardPage
      .selectContextOptionOnCard("move")
      .doAction(...[, endList, "2"]);
    projectBoardPage.getAllCards(endList, cardName).should("be.visible");    
    projectBoardPage.getCardIn(endList, 1).attribute('href').then(displayedCardName => {
      expect(displayedCardName).to.include(cardName);
    });
  });

  /**
   * This text cases verifies the movement of a card using the context menu option.
   * Validating that the card is in the end list and removed from the source.
   */
  it("Move card using drag and drop", function() {
    let cardName = "accion";
    let sourceList = "next";
    let endList = "newColumn";
    projectBoardPage.dragAndDropCard(cardName, sourceList, endList, 1);    
    projectBoardPage.getAllCards(endList, cardName).should("be.visible");    
    projectBoardPage.getCardIn(endList, 1).attribute('href').then(displayedCardName => {
      expect(displayedCardName).to.include(cardName);
    }); 
  });

  /**
   * This text cases verifies the movement of a card using drag and drop action.
   * Validating that the card is in the end list and is still in the source.
   */
  it("Copy card from contextual menu", function() {
    let cardName = "tocopy";
    let sourceList = "backlog";
    let endList = "mientras tanto";

    projectBoardPage.openContextMenuOnCard(cardName, sourceList);

    projectBoardPage
      .selectContextOptionOnCard("copy")
      .doAction(...[, , endList, "2"]);    
    projectBoardPage.getAllCards(endList, cardName).should("be.visible");    
    projectBoardPage.getCardIn(endList, 1).attribute('href').then(displayedCardName => {
      expect(displayedCardName).to.include(cardName);
    });
  });

  afterEach(() => {
    cy.logout();
  });
});
