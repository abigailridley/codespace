describe("rock button test", () => {
  it("passes", () => {
    cy.visit("rps.html");
    cy.get("#rock").click();
    cy.get("#yourchoice").should("have.text", "rock");
  });
});

describe("paper button test", () => {
  it("passes", () => {
    cy.visit("rps.html");
    cy.get("#paper").click();
    cy.get("#yourchoice").should("have.text", "paper");
  });
});

describe("scissors button test", () => {
  it("passes", () => {
    cy.visit("rps.html");
    cy.get("#scissors").click();
    cy.get("#yourchoice").should("have.text", "scissors");
  });
});

describe("computer choice test", () => {
  it("passes", () => {
    cy.visit("rps.html");
    cy.get("button").first().click();
    cy.get("#computerchoice").should(($span) => {
      expect(["rock", "paper", "scissors"]).to.include($span.text());
    });
  });
});

describe("result test", () => {
  it("passes", () => {
    cy.visit("rps.html");
    cy.get("button").first().click();
    cy.get("#result").should(($span) => {
      expect(["You win!", "You lose!", "It's a draw!"]).to.include(
        $span.text()
      );
    });
  });
});

describe("full test", () => {
  //array of button ids
  const buttons = ["#rock", "#paper", "#scissors"];

  //loop through button by array to test all buttons
  buttons.forEach((btn) => {
    it("clicking button updates choices and result", () => {
      cy.visit("rps.html");
      //click each button
      cy.get(btn).click();

      //test 'yourchoice' matches button clicked
      cy.get("#yourchoice").should("have.text", btn.replace("#", ""));
      cy.get("#computerchoice").should(($span) => {
        expect(["rock", "paper", "scissors"]).to.include($span.text());
      });
      //check valid result
      cy.get("#result").should(($span) => {
        expect(["You win!", "You lose!", "It's a draw!"]).to.include(
          $span.text()
        );
      });
    });
  });
});
