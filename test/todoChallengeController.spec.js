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

  it("initialises total as 0", function() {
    expect(ctrl.totalTasks()).toEqual(0)
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

  it("can check a task", function() {
    ctrl.taskText = "Wash Dishes";
    ctrl.addTask();
    ctrl.check(0);
    expect(ctrl.taskList[0].status).toEqual("checked")
    ctrl.taskText = "Play";
    ctrl.addTask();
    ctrl.check(1);
    expect(ctrl.taskList[1].status).toEqual("checked")
  });

  it("can remove all completed tasks from the list", function() {
    ctrl.taskText = "Wash Dishes";
    ctrl.addTask();
    ctrl.check(0);
    ctrl.taskText = "Play";
    ctrl.addTask();
    ctrl.check(1);
    ctrl.delChecked();
    expect(ctrl.taskList[0]).toBeUndefined();
  });

  it("knows how many tasks there currently are", function() {
    ctrl.taskText = "Wash Dishes";
    ctrl.addTask();
    ctrl.taskText = "Play";
    ctrl.addTask();
    expect(ctrl.totalTasks()).toEqual(2)
  });

});