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
        // Build data object.
        var data = {
          blend: $scope.newBlendRating,
          comment: $scope.newComment,
          rating: $scope.newRating
        };

        // Add it via $add on the service.
        $scope.reviews.$add(data);
        $scope.newBlendRating = $scope.newRating = $scope.newComment = "";
      };
    }
  ]);
