(function(angular) {
  'use strict';
angular.module('dcm-ui.grid')
  .controller('GridExampleCtrl', ['$scope', //  'datasource', '$log', 'filters', '$q', '$timeout',
    function ($scope) { // , datasource, $log, filters, $q, $timeout

    $scope.tableData = [
      {fname: 'James', lname: 'Andersen', age: 41, uuid: 'ad6d4f60-27dd-41a4-bc58-4b66eb8cc2f7'},
      {fname: 'Albertine', lname: 'Roquefort', age: 19, uuid: 'a3483f04-6d88-4cab-94e8-f37d47140112'},
      {fname: 'Harry', lname: 'Elfsport', age: 52, uuid: '752501b5-8c9c-4bf8-8dbf-549d247c54de'},
      {fname: 'Mojune', lname: 'Starkadder', age: 27, uuid: 'ed788226-7fd5-4c64-8065-63e88b5414df'},
      {fname: 'Julia', lname: 'Hazeldene', age: 84, uuid: 'da428eb5-3b7d-4c21-8b04-b0deaf54c4a0'}
    ];

  }]);
})(window.angular);