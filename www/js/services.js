angular.module('starter.services', [])

.factory('Apiaries', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var apiaries = [{
    id: 0,
    name: 'Carninca',
    year: '2019',
    lastText: 'Zander',
    image: 'img/ben.png'
  }, {
    id: 1,
    name: 'Buckfast',
    year: '2019',
    lastText: '2019',
    image: 'img/max.png'
  }
];

  return {
    all: function() {
      return apiaries;
    },
    remove: function(apiary) {
      apiaries.splice(apiaries.indexOf(apiary), 1);
    },
    add: function() {
      apiaries.push({id: 132, name : 'PowerBattle', year: '2019', image: 'img/max.png'});
    },
    get: function(apiaryId) {
      for (var i = 0; i < apiaries.length; i++) {
        if (apiaries[i].id === parseInt(apiaryId)) {
          return apiaries[i];
        }
      }
      return null;
    }
  };
});
