todoChallenge.controller('TodoChallengeController', [function() {
  var self = this;

  self.taskList = [];
  self.count = 0;
  self.allTasks = [];

  self.addTask = function() {
    if (self.taskText) {
      self.taskList = self.taskList.concat({text: self.taskText, id: self.count, status: "unchecked"});
      self.count = self.count + 1;
      self.taskText = null
    }
  };

  self.delTask = function(id) {
    for (i = 0; i < self.taskList.length; i++) {
      if (self.taskList[i].id===parseInt(id)) {
        self.taskList.splice(i,1)
      }
    }
  };

  self.check = function(id) {
    for (i = 0; i < self.taskList.length; i++) {
      if (self.taskList[i].id===parseInt(id)&&(self.taskList[i].status==="unchecked")) {
        self.taskList[i].status = "checked"
      } else if (self.taskList[i].id===parseInt(id)&&(self.taskList[i].status==="checked")) {
        self.taskList[i].status = "unchecked"
      }
    }
  };

  self.delChecked = function() {
    var checked = [];
    self.taskList.forEach(function(task) {
      if (task.status==="checked") {
        checked.push(task.id)
      }
    });
    checked.forEach(function(id) {
      self.delTask(id)
    });
  };

  self.totalTasks = function() {
    return self.taskList.length
  };

}]);