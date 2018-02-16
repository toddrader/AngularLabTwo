(function() {
function hoverState() {
  return {
    link: function($scope, $element, $attrs) {
      $element.on("mouseover", function() {
        $element.css("font-weight", "bold");
        });
      $element.on("mouseleave", function() {
        $element.css("font-weight", "normal");
            });
    }
  }
}

angular
  .module("app")
  .directive("hoverState", hoverState);
})();
