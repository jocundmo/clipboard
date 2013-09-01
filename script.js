function clip($scope) {
  $scope.inputValue = 'Put your notes here!';
  $scope.addedClips = [];
  $scope.removedClips = [];

  $scope.toAdd = function() {
      $scope.addedClips.push($scope.inputValue);

  };

  $scope.toRemove = function() {
      $scope.removedClips.push("a");
  }
}