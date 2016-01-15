var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.counter = 0;

  return obj;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.counter] = val;
    this.counter++;
  },
  dequeue: function(){
    var dequeued = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return dequeued;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


