/* global Item */
'use strict';

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const findAndUpdate = function (id, newData) {
    const item = this.findById(id);
    Object.assign(item, newData);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
    findAndUpdate,
  };
  
}());


//const findAndUpdateName = function(id, name) {
//   try {
//     Item.validateName(name);
//     
//     item.name = name;
//   } catch(e) {
//     console.log('Cannot update name: ' + e.message);
//   }
// };

// const findAndToggleChecked = function(id) {
//   const item = this.findById(id);
//   item.checked = !item.checked;
// };