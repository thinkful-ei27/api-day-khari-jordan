/* global $ */
'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/khari-jordan';
  const getItems = function (callback) {
    callback('api module works!');
    $.getJSON(`${BASE_URL}/items`, callback);
  };
  return {
    BASE_URL,
    getItems,
  };
	
}());