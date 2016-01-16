var Set = function(){ // Time Complexity: O(1)
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){ // Time Complexity: O(1)
  this._storage[item] = item;
};

setPrototype.contains = function(item){ // Time Complexity: O(1)
  return !!this._storage[item];
};

setPrototype.remove = function(item){ // Time Complexity: O(1)
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
