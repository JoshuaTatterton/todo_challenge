todoChallenge.controller('TodoChallengeController', [function() {
  var self = this;

  self.taskList = [];
  self.count = 0;

  self.addTask = function() {
    if (self.taskText) {
      self.taskList = self.taskList.concat({text: self.taskText, id: self.count});
      self.count = self.count + 1;
    }
  };

  self.delTask = function(id) {
    for (i = 0; i < self.taskList.length; i++) {
      if (self.taskList[i].id===parseInt(id)) {
        self.taskList.splice(i,1)
      }
    }
  };
}]);