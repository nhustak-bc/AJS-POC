let TodoComponent = {
    selector: "todoComp",
    template: "<todolist></todolist>"
};

angular
  .module("todo")
  .component(TodoComponent.selector, TodoComponent);