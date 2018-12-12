/* global $ */
'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/khari-jordan';
  
  //returns data from GET request to items
  const getItems = function (callback) {
    callback('api module works!');
    $.getJSON(`${BASE_URL}/items`, callback);
  };
  

  //Sends POST request to items
  const createItem = function (name, callback) {
    console.log('createItem ran')
    const newItem = JSON.stringify({
        name: name,
    });
    $.ajax({
      'url': `${BASE_URL}/items`,
      'method': 'POST',
      'contentType': 'application/json',
      'data': newItem,
      'success': callback
    });
  };

  return {
    BASE_URL,
    getItems,
    createItem,
  };
	
}());

