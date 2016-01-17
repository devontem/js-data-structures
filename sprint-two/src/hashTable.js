var HashTable = function(){ // Time Complexity: O(1)
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){ // Time Complexity: O(n)
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  
  if (!bucket){
    bucket = [];
    this._storage.set(i, bucket);
  }
  
  var isSet = false;
  for (var j = 0; j < bucket.length; j++){
    var tuple = bucket[j];
    if (tuple[0] === k){
      tuple[1] = v;
      isSet = true;
      break;
    }
  }
  if (!isSet){ bucket.push([k, v]); }
  
};

HashTable.prototype.retrieve = function(k){ // Time Complexity: O(n)
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) {
    return null;
  }
  for (var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){ // Time Complexity: O(n)
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  
  if (!bucket){ return ; }
  
  for (var j = 0; j < bucket.length; j++){
    var tuple = bucket[j];
    if (tuple[0] === k){
      var value = tuple[1];
      bucket.splice(j, 1);
      return value;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
