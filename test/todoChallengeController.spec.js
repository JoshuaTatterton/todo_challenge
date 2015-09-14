describe("TodoChallengeController", function() {
  beforeEach(module("TodoChallenge"));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller("TodoChallengeController");
  }));

  it("initialises with nothing inside", function() {
    expect(ctrl.taskText).toBeUndefined();
  });

  it("initialises task list as empty array", function() {
    expect(ctrl.taskList).toEqual([]);
  });

  it("can add a task to be completed", function() {
    ctrl.taskText = "Wash Dishes";
    ctrl.addTask();
    expect(ctrl.taskList[0].text).toEqual("Wash Dishes")
  });

  it("can remove a task from the list", function() {
    ctrl.taskText = "Wash Dishes";
    ctrl.addTask();
    ctrl.delTask(0);
    expect(ctrl.taskList[0]).toBeUndefined();
  });
});