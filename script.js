class LinkedList {
  constructor(value) {
    this.nextNode = new Node(value);
  }
  append(value) {
    function recursive(value, nodeToSearch) {
      if (nodeToSearch === null) {
        nodeToSearch = new Node(value);
        return nodeToSearch;
      } else {
        nodeToSearch.nextNode = recursive(value, nodeToSearch.nextNode);
        return nodeToSearch;
      }
    }
    this.nextNode = recursive(value, this.nextNode);
  }
  prepend(value) {
    let oldNode = this.nextNode;
    this.nextNode = new Node(value);
    this.nextNode.nextNode = oldNode;
  }
  size() {
    let count = 0;
    let currentNode = this.nextNode;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }
  head() {
    this.nextNode;
  }
  tail() {
    let currentNode = this.nextNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  at(index) {
    let currentNode = this.nextNode;
    let currentIndex = index;
    while (currentIndex > 0) {
      currentNode = currentNode.nextNode;
      currentIndex--;
    }
    return currentNode;
  }
  pop() {
    let poppedNode;
    function recursive(node) {
      if (node.nextNode === null) {
        poppedNode = node;
        return null;
      } else {
        node.nextNode = recursive(node.nextNode);
        return node;
      }
    }
    this.nextNode = recursive(this.nextNode);
    return poppedNode;
  }
  contains(value) {
    let currentNode = this.nextNode;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  find(value) {
    let currentNode = this.nextNode;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return null;
  }
  toString() {
    let currentNode = this.nextNode;
    let string = `(${currentNode.value})`;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      string += ` -> (${currentNode.value})`;
    }
    return string;
  }
  insertAt(index, value) {
    function recursion(currentIndex, currentNode) {
      if (currentIndex === index || currentNode.nextNode === null) {
        currentNode = new Node(value, currentNode);
        return currentNode;
      } else {
        currentNode.nextNode = recursion(
          currentIndex + 1,
          currentNode.nextNode
        );
        return currentNode;
      }
    }
    this.nextNode = recursion(0, this.nextNode);
  }
  removeAt(index) {
    function recursion(currentIndex, currentNode) {
      if (currentIndex === index || currentNode.nextNode.nextNode === null) {
        currentNode = new Node(
          currentNode.nextNode.value,
          currentNode.nextNode.nextNode
        );
        return currentNode;
      } else {
        currentNode.nextNode = recursion(
          currentIndex + 1,
          currentNode.nextNode
        );
        return currentNode;
      }
    }
    this.nextNode = recursion(0, this.nextNode);
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
