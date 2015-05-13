'use strict';

/**
 * @ngdoc module
 * @name dcm-ui.select2
 * @description
 *
 * The `dcm-ui.select2` module provides a wrapper to the select2 jQuery library
 *
 * @example
   <example name="select2-demo" module="dcm-ui.select2">
    <file name="index.html">
      <div ng-controller="Select2ExampleCtrl">

        <input
          type="hidden"
          dcm-select2="{allowClear: true, placeholder: 'Select something...'}"
          data="tableData"
          ng-model="selectedId"
          model-selected="selected"
          class="input-large"
          id-field="uuid"
          text-field="name"
          icon-field="icon"
        >

        <div>Selected: {{selected.name}} - {{selectedId}}</div>

      </div>

    </file>
    <file name="script.js">
      angular.module('dcm-ui.select2')
        .controller('Select2ExampleCtrl', ['$scope',
          function ($scope) {

          $scope.tableData = [
            {name: 'James Andersen', age: 41, uuid: 'ad6d4f60-27dd-41a4-bc58-4b66eb8cc2f7'},
            {name: 'Albertine Roquefort', age: 19, uuid: 'a3483f04-6d88-4cab-94e8-f37d47140112'},
            {name: 'Harry Elfsport', age: 52, uuid: '752501b5-8c9c-4bf8-8dbf-549d247c54de'},
            {icon: 'fa fa-android', name: 'Mojune Starkadder', age: 27, uuid: 'ed788226-7fd5-4c64-8065-63e88b5414df'},
            {icon: 'fa fa-android', name: 'Julia Hazeldene', age: 84, uuid: 'da428eb5-3b7d-4c21-8b04-b0deaf54c4a0'}
          ];

        }]);

    </file>
  </example>
 */
angular.module('dcm-ui.select2', []);