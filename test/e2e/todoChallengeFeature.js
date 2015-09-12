describe("Todo Challenge", function() {

  beforeEach(function() {
    browser.get("localhost:3000")
  });

  it("has a title", function() {
    expect(browser.getTitle()).toEqual("Todo Challenge");
  });
});