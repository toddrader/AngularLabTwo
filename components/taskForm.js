(function() {
  var taskForm = {
    bindings: {
    },
    templateUrl: "partials/taskForm.html",
    controller: function () {
      var $ctrl = this;
      $ctrl.todoList = [];
      $ctrl.addToDo = function(task) {
      $ctrl.todoList.push(task)
      $ctrl.task = ""
      }
      }
  }
  angular.module("app")
    .component("taskForm", taskForm)
})();
