var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    var dequeued = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    return dequeued;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};

// Object.keys(storage)[Object.keys(storage).length -1]