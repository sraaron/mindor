angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  // --------------------- Pie Chart Configuration -----------------------------
  $scope.pieLabels = ["Leisure", "Health and Beauty", "Daily Expenses", "Housing and Utilities", "Emergency"];
  $scope.pieData = [300, 500, 400, 200, 100];

  // --------------------- Line Chart Configuration ----------------------------
  $scope.lineSeries = ['Active', 'Inactive'];
  $scope.lineLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  $scope.lineData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];


  // --------------------- animation for green color .badge-notification icon---
  anime({
    targets: ['.badge-notify'],
    scale: [1.2, 1],
    delay: 1800,
    duration: 2000,
  });

  // --------------------- animation for blue  color .badge --------------------
  anime({
    targets: ['.badge'],
    rotate: {
      value: 720,
      delay: 300,
      duration: 1500,
      easing: 'easeInOutQuad'
    },
    direction: 'normal'
  });

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, Chats, $stateParams) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SocialCtrl', function($scope, Socials, $stateParams, $ionicPopup, $timeout) {
  $scope.items = Socials.all();

  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.confirm({
     title: 'First time registration',
     template: 'Do you approve <b>Gatecoin</b> to receive your name, email address, HKID, and proof of address for registration purposes?'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for advice.');
   });
 };

})

.controller('AccountCtrl', function($scope, Accounts, $stateParams) {
  $scope.items = Accounts.all();
})

.controller('PiggyCtrl', function($scope, Piggies, $stateParams) {
  $scope.piggies = Piggies.all();
  $scope.currentVal;
});