angular.module("jitteryJoe", ["firebase"])
  .factory("JitteryTypes", ["$firebase", function($firebase) {
    var ref = new Firebase("https://radiant-fire-3825.firebaseio.com/types");
    return $firebase(ref);
  }])
  .factory("JitteryReviews", ["$firebase", function($firebase) {
    var ref = new Firebase("https://radiant-fire-3825.firebaseio.com/reviews");
    return $firebase(ref);
  }])
  .controller("JitteryController", ["$scope", "JitteryTypes", "JitteryReviews",
    function($scope, jitteryTypes, jitteryReviews) {
      // Get types & ratings.
      $scope.types = jitteryTypes;
      $scope.reviews = jitteryReviews;

      $scope.addReview = function() {
        // Get a Date object for the time.
        var d = new Date();

console.log($scope);

        // Build data object.
        var data = {
          blend: $scope.newBlend,
          comment: $scope.newComment,
          rating: $scope.newRating,
          date: d.getTime()
        };

        // Add it via $add on the service.
        $scope.reviews.$add(data);
        $scope.newBlend = $scope.newRating = $scope.newComment = "";
      };
    }
  ]);
