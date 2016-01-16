var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = []; 

  _.extend(newTree,treeMethods); // Time Complexity: O(n);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){ // Time Complexity: O(1)
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){ // Time Complexity: O(n)
  if (this.value === target){
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) { 
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
