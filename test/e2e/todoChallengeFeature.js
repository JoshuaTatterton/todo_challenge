describe("Todo Challenge", function() {

  beforeEach(function() {
    browser.get("http://localhost:3000")
  });
  
  var addBox = element(by.model("ctrl.taskText"));
  var addButton = element(by.className("btn"));
  var checkbox = element(by.className("checkbox"));
  var delButton = element(by.className("delbtn"));
  var delCheckedButton = element(by.className("delcheckedbtn"));
  var onlyTodoButton = element(by.className("todobtn"));

  it("has a title", function() {
    expect(browser.getTitle()).toEqual("Todo Challenge");
  });

  it("can enter in a new task", function() {
    addBox.sendKeys("Wash Dishes");
    addButton.click();

    var profiles = element.all(by.repeater("task in ctrl.taskList")).map(function(item) {
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
    var profiles = element.all(by.repeater("task in ctrl.taskList")).map(function(item) {
      return item.element(by.className("taskText")).getText();
    });
    expect(profiles).not.toContain("Wash Dishes"); 
  });

  it("can remove all tasks checked as done with one button", function() {
    addBox.sendKeys("Play Games");
    addButton.click();
    checkbox.click();
    addBox.sendKeys("Pretend to program");
    addButton.click();
    delCheckedButton.click();
    var profiles = element.all(by.repeater("task in ctrl.taskList")).map(function(item) {
      return item.element(by.className("taskText")).getText();
    });
    expect(profiles).not.toContain("Play Games"); 
    expect(profiles).toContain("Pretend to program");
  });

  it("shows the amount of tasks being displayed", function() {
    var count = element(by.className("count")).getText();
    expect(count).toEqual("Total Tasks: 0")
    addBox.sendKeys("Play Games");
    addButton.click();
    var count = element(by.className("count")).getText();
    expect(count).toEqual("Total Tasks: 1")
    addBox.sendKeys("Pretend to program");
    addButton.click();
    var count = element(by.className("count")).getText();
    expect(count).toEqual("Total Tasks: 2")
  });
});