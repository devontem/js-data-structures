var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(val){
  this.storage[this.counter] = val;
  this.counter++;
}
Queue.prototype.dequeue = function(){
  var dequeued = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return dequeued;
}
Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
}
