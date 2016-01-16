var BinarySearchTree = function(value){
  var obj = {};
  obj.value = value;
  obj.left = null; // smaller values
  obj.right = null; // larger values

  _.extend(obj, bstMethods);

  return obj;
};

var bstMethods = {};

bstMethods.insert = function(value) { // Time Complexity: O(n)
    if (value < this.value) {
      // go through the left side of the tree
      if (this.left === null) { 
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      // go to the right of the tree
      if (this.right === null) { 
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
};
bstMethods.contains = function(value) { // Time Complexity: O(n)
	if (value === this.value){
		return true;
	} else if (value < this.value && this.left){
	  return this.left.contains(value);
	} else if (value > this.value && this.right){
    return this.right.contains(value);
	} else {
	  return false;
	}
};
bstMethods.depthFirstLog = function(cb) { // Time Complexity: O(n)
  cb(this.value);
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
