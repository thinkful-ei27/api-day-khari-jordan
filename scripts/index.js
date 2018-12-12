/* global $, api, shoppingList, store */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});

/*api.getItems(function(data) {
  console.log(data);
});

console.log(api.BASE_URL);
*/