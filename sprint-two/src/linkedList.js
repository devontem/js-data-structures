var LinkedList = function(){ // Complexity: O(1)
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){ // Time Complexity: O(1)
    var node = Node(value);
    if (!list.tail){
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){ // Time Complexity: O(1)
    if (list.head){
      var oldHead = list.head;
      list.head = list.head.next;
      return oldHead.value;
    }
  };

  list.contains = function(target){ // Time Complexity: O(n)
    var newVariable = list.head;
    if (list.tail.value === target) { return true };
    while (newVariable.next) {
      if (newVariable.value === target) {
        return true;
      }
      newVariable = newVariable.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){ // Time Complexity: O(1)
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
