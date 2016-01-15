

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.collection = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  var obj = {};
  obj.value = node;
  obj.edgeMates = {};
  this.collection[node] = obj;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if (this.collection[node]) {
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var item = this.collection[node];
  if (item) {
    for (var edgeMate in item.edgeMates){
      delete edgeMate.edgeMates[node];
    }
    delete this.collection[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.collection[fromNode].edgeMates[toNode] === this.collection[toNode] && this.collection[toNode].edgeMates[fromNode] === this.collection[fromNode];
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.collection[fromNode].edgeMates[toNode] = this.collection[toNode];
  this.collection[toNode].edgeMates[fromNode] = this.collection[fromNode];
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.collection[fromNode].edgeMates[toNode];
  delete this.collection[toNode].edgeMates[fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this.collection, function(node) {
    return cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// item.edgeMates = { 'puppy': { value: 'puppy', edgeMates: ''} }

