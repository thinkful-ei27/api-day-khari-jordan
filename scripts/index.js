/* global $, api, shoppingList, store */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems((items) => {
    console.log(items);
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});