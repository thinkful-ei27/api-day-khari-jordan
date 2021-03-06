/* global $ */
'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/khari-jordan';
  
  //returns data from GET request to items
  const getItems = function (callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };
  

  //Sends POST request to items
  const createItem = function (name, callback) {
    console.log('createItem ran');
    const newItem = JSON.stringify({
      name: name,
    });
    $.ajax({
      'url': `${BASE_URL}/items`,
      'method': 'POST',
      'contentType': 'application/json',
      'data': newItem,
      'success': callback,
      'error': function() {
        alert('Input is required in order to add item');
      }
    });
  };

  //Patches items based on ID
  const updateItem = function(id, updateData, callback){
    const newData = JSON.stringify(
      updateData
    );
    $.ajax({
      'url': `${BASE_URL}/items/${id}`,
      'method': 'PATCH',
      'contentType': 'application/json',
      'data': newData,
      'success': callback,
      'error': function() {
        alert('New update is invalid');
      }
      
    });
  };

  const deleteItem = function (id, callback) {
    $.ajax({
      'url': `${BASE_URL}/items/${id}`,
      'method': 'DELETE',
      'success': callback,
      'error': function() {
        alert('The item does not exist');
      }
    });
  };

  return {
    BASE_URL,
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
	
}());

