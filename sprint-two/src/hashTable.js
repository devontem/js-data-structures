var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = this._storage.get(i);
  if (!tuple || tuple[0] === k){
  	this._storage.set(i, [k,v]);
  } else {
  	this._storage.set(i, [tuple, [k,v]]);
  }
};

HashTable.prototype.retrieve = function(k){
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

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = this._storage.get(i);
  if (!Array.isArray(tuple[0])) {
    this._storage.set(i, [k,null]);
  }
  else {
    for (var j = 0; j < tuple.length; j++) {
      if (tuple[j][0] === k) {
        tuple[j][1] = null; 
        //this._storage.set(i, tuple[j][1]);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
