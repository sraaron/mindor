angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  // --------------------- Pie Chart Configuration -----------------------------
  $scope.pieLabels = ["Leisure", "Daily Expenses", "Emergency"];
  $scope.pieData = [300, 200, 100];

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

.controller('ChatsCtrl', function($scope, Chats, Items) {
  $scope.chats = Chats.all(); 
  $scope.bitcoin = Items.all();
  $scope.$watch('bitcoin', function() {
      $scope.bitcoin = Items.all();
  });
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, Chats, $stateParams) {  
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SocialCtrl', function($scope, Socials, $stateParams, $ionicPopup, $timeout, Items) {
  $scope.items = Socials.all();

  $scope.exachangeInterface = function(exchangeID) {
    if(exchangeID == "gatecoin"){

    } else {
      // handle other exxcanges
      return
    }
  }

  /**
   * A set of functions that facilitate communication with the GateCoin RESTFull API
   * According to https://github.com/Gatecoin/RESTful-API-Implementation, API key limit # of requests per minute is 150
   * No rate limit for bublic API.
   * 
   * Dependencies: 
   *    http://crypto-js.googlecode.com/svn/tags/3.0.2/build/rollups/hmac-sha256.js
   *    http://crypto-js.googlecode.com/svn/tags/3.0.2/build/components/enc-base64-min.js
   */
  var gateCoinHelper = function() {

    this.sendRequiredHeader = function(publicKey,key) {
      $.ajaxSetup({
        beforeSend: function (jqXHR, settings) {
          //var publicKey = $("#input_public_key").val();          
          //var key = $("#input_key").val();
          if (publicKey == "") {
            publicKey = gPublicKey; // gPublicKey is a variable which stores the publicKey when login
          }
          if (key == "") {
            key = gApiKey; // gApiKey is a variable which stores the apiKey when login
          }
          if (publicKey != null && key != null) {
            var now = (new Date(Date.now())).getTime() / 1000;
            var httpMethod = settings.type;
            var ct = settings.contentType;
            if (ct == false) {
              ct = "multipart/form-data";
            }
            var contentType = (httpMethod == "GET") ? "" : ct;
            var message = settings.type + settings.url + contentType + now;
            var hash = CryptoJS.HmacSHA256(message.toLowerCase(), key);
            var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

            jqXHR.setRequestHeader("API_PUBLIC_KEY", publicKey);
            jqXHR.setRequestHeader("API_REQUEST_SIGNATURE", hashInBase64);
            jqXHR.setRequestHeader("API_REQUEST_DATE", now);
          }
        }
      });
    }


  }

  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.confirm({
     title: 'First time registration',
     template: 'Do you approve <b>Gatecoin</b> to receive your name, email address, HKID, and proof of address for registration purposes?'
   });

   alertPopup.then(function() {     
      var rv = Items.toggle();
      $scope.bitcoin = rv;    
      console.log('Thank you for advice. ' + rv);

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