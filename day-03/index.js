class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (this.value > node.value) {
      if (this.left === null) {
        this.left = node;
      }
      else {
        this.left.add(node);
      }
    }
    else {
      if (this.right === null) {
        this.right = node;
      }
      else {
        this.right.add(node);
      }  
    }
  }

}

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (this.value > node.value) {
      if (this.left === null) {
        this.left = node;
      }
      else {
        this.left.add(node);
      }
    }
    else {
      if (this.right === null) {
        this.right = node;
      }
      else {
        this.right.add(node);
      }  
    }
  }

  findPerson(name) {
    let result;
    if (this.value < name) {
      return this.right.findPerson(name);
    }
    else if (this.value > name) {
      return this.left.findPerson(name);
    }
    else {
      result = this.person.person;
    }
    return result;
  }
}

module.exports = {
  BinaryTreeNode,
  PersonTreeNode,
};
