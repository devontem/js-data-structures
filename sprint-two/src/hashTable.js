var HashTable = function(){ // Time Complexity: O(1)
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){ // Time Complexity: O(n)
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = this._storage.get(i);
  if (!tuple || tuple[0] === k){
    this._storage.set(i, [k,v]);
  } else {
    if (!Array.isArray(tuple[0])){
      this._storage.set(i, [tuple, [k,v]]); 
    } else {
      var isSet = false;
      for (var j = 0; j < tuple.length; j++) {
        if (tuple[j][0] === k) {
          tuple[j][1] = v;
          isSet = true;
        }
      }
      if (!isSet){ tuple.push([k, v]); }
      this._storage.set(i, tuple);
    }
  }
};

HashTable.prototype.retrieve = function(k){ // Time Complexity: O(n)
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = this._storage.get(i);
  if (!Array.isArray(tuple[0])) {
    return tuple[1];
  }
  else {
    for (var j = 0; j < tuple.length; j++) {
      if (tuple[j][0] === k) {
        return tuple[j][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k){ // Time Complexity: O(n)
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = this._storage.get(i);
  if (!Array.isArray(tuple[0])) {
    this._storage.set(i, [k,null]);
  }
  else {
    for (var j = 0; j < tuple.length; j++) {
      if (tuple[j][0] === k) {
        tuple[j][1] = null; 
        this._storage.set(i, tuple);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
