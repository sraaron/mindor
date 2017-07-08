angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 1,
    name: 'Max Lynx',
    online: true,
    msgCount: 5,
    time: '11.35 AM',
    message: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    msgCount: 1,
    time: '10.35 AM',
    message: 'So careful with our relationship. Now you are part of us.',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    time: 'YESTERDAY',
    name: 'Perry Governor',
    online: true,

    message: 'You have mistaken I am not the person whom u r looking for!',
    face: 'img/perry.png'
  }, {
    id: 4,
    time: 'YESTERDAY',
    name: 'Mike Harrington',
    message: 'But I still have that voucher for mc donalds! What about that instead?',
    face: 'img/mike.png'
  }, {
    id: 5,
    msgCount: 2,
    time: 'FRIDAY',

    name: 'Alice Whitman',
    online: true,
    message: 'Thank You hunny. I love u sooooo much......',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Socials', function() {
  /*
    Governmet Bonds
    Corporate Bonds
    Emerging Market Stocks
    Small Company Stocks
    Large Company Stocks
    Real Estate Stocks
  */
  var socials = [{
    img: '../img/icons/highRisk.png',
    title: 'High Risk Investment',
    count: 6,
    color: '#000000',
    description: '<i class="italic thin">"Emerging Markets and Large corporation Stocks can provide high returns"</i> </br><span class="small"><b>70%</b> users recommend<span>'
  }, {
    img: '../img/icons/medRisk.png',
    title: 'Medium Risk Investment',
    count: 3,
    color: '#D0021B',
    color: '#D0021B',
    
    description: '<i class="italic thin">"Includes Corporate bonds from small and medium companies"</i></br><span class="small"><b>60%</b> users recommend<span>'
  }, {
    img: '../img/icons/lowRisk.png',
    title: 'Low Risk',
    count: 0.75,
    color: '#F5A623',
    url: 'https://twitter.com/deshatom',

    description: '<i class="italic thin">"Grow your capital slowly, with a guaranted"</i><span class="small"><b>20%</b> users recommend<span>'
  }, {
    img: '../img/icons/Saving.png',
    title: 'Buy Bitcoin',
    count: 576,
    color: '#FFD700',
    url: 'https://twitter.com/deshatom',

    description: '</br><i class="italic thin">"Get your house at The Peak today, or maybe next year"</i></br><span class="small"><b>99%</b> users recommend<span>'
  }
];

return {
  all: function() {
    return socials;
  },
};
})

.factory('Piggies', function(){
  var piggies = [
    {
      cathegory:"Leisure",
      icon:"ion-android-plane",
      defaultValue: "8"
    },
    {
      cathegory:"Sports",
      icon:"ion-android-bicycle",
      defaultValue: "4"
    },
    {
      cathegory:"Daily Expenses",
      icon:"ion-android-cart",
      defaultValue: "4"
    }
    ,
    {
      cathegory:"Housing",
      icon:"ion-android-home",
      defaultValue: "4"
    }
    ,
    {
      cathegory:"Emergency",
      icon:"ion-ios-medkit",
      defaultValue: "1"
    },
    {
      cathegory:"Education",
      icon:"ion-erlenmeyer-flask",
      defaultValue: "0"
    }   
    ];

    return {
      all: function() {
        return piggies;
      },
    };

})

.factory('Accounts', function() {
  var socials = [{
    img: '../img/icons/ionic-icon.png',
    title: 'Ionic Market',
    color: '#229cff',
    url: 'https://market.ionic.io/user/305270',
    description: 'You can find all of my <b>Premium </b> and  <b>Free</b> ionic  <b>Apps</b> from ionic Market.'
  },{
    img: '../img/icons/youtube.svg',
    title: 'Youtube',
    color: '#e52215',
    url: 'https://www.youtube.com/channel/UCXrvOXBvlugqfohxk76hvog',
    description: 'You <b>can access</b> My Videos in  <i class="italic thin"> Youtube. Feel free to <b>SUBSCRIBE</b> my channel</i>'
  }, {
    img: '../img/icons/twitter.svg',
    title: 'Twitter',
    color: '#2196f3',
    url: 'https://twitter.com/deshatom',
    description: 'Do you <b>need</b> to know my  <span class="thin ">last works..<b> Follow me on Twitter</b></span>'
  },{
    img: '../img/icons/pinterest.svg',
    title: 'Pinterest',
    color: '#bd0a1c',
    url: 'https://www.pinterest.com/deshatom/',
    description: 'You can <b>see </b> more <b>Projects</b> that <b>I </b> have done. Please follow me on  <b>Pinterest</b>'
  },
];

return {
  all: function() {
    return socials;
  },
};
});
