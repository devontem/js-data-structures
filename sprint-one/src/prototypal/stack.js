var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};

  return obj;
};

var stackMethods = {
  push: function(val) {
    this.storage[Object.keys(this.storage).length] = val;
  },
  pop: function() {
    var popped = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return popped;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


