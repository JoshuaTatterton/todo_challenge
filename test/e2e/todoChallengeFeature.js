describe("Todo Challenge", function() {

  beforeEach(function() {
    browser.get("http://localhost:3000")
  });
  
  var addBox = element(by.model("searchCtrl.taskText"));
  var addButton = element(by.className("btn"));
  var checkbox = element(by.className("checkbox"));
  var delButton = element(by.className("delbtn"));

  it("has a title", function() {
    expect(browser.getTitle()).toEqual("Todo Challenge");
  });

  it("can enter in a new task", function() {
    addBox.sendKeys("Wash Dishes");
    addButton.click();

    var profiles = element.all(by.repeater("task in searchCtrl.taskList")).map(function(item) {
      return item.element(by.className("taskText")).getText();
    });
    expect(profiles).toContain("Wash Dishes");  
  });

  it("can check off that a task is completed", function() {
    addBox.sendKeys("Wash Dishes");
    addButton.click();
    checkbox.click();
    expect(checkbox).toBeTruthy();
  });

  it("can delete tasks", function() {
    addBox.sendKeys("Wash Dishes");
    addButton.click();
    delButton.click();
     var profiles = element.all(by.repeater("task in searchCtrl.taskList")).map(function(item) {
      return item.element(by.className("taskText")).getText();
    });
    expect(profiles).not.toContain("Wash Dishes"); 
  });
  
});