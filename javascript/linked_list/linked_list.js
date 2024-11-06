class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    } else {
      let current = this.head;

      while (current.next != null) {
        current = current.next;
      }
      current.next = new Node(data);
    }
  }

  exist(data, current = this.head) {
    if (current.data == data) {
      return true;
    }

    if (current.next == null) {
      return false;
    }

    return this.exist(data, (current = current.next));
  }

  list(current = this.head) {
    if (current.next == null) {
      console.log(current.data);
      return false;
    }

    console.log(current.data);
    this.list((current = current.next));
  }

  removeDuplicate(current = this.head, saved_data = []) {
    if (current.next == null) {
      if (saved_data.includes(current.data)) {
        current.data = null;
      }
      return this;
    }

    if (!saved_data.includes(current.data)) {
      saved_data.push(current.data);
    } else {
      current.data = current.next.data;
      current.next = current.next.next;
      return this.removeDuplicate(current, saved_data);
    }

    return this.removeDuplicate((current = current.next), saved_data);
  }

  delAllKey(data, current = this.head) {
    if (current.next == null) {
      if (current.data == data) {
        current.data = null;
      }
      return this;
    }

    if (current.data == data) {
      current.data = current.next.data;
      current.next = current.next.next;
      return this.delAllKey(data, current);
    }

    return this.delAllKey(data, (current = current.next));
  }
}

num = new LinkedList();

num.add(1);
num.add(2);
num.add(3);
num.add(4);
num.add(1);
num.add(1);
num.add(2);
num.add(2);
num.add(4);
num.add(4);
num.add(2);
num.add(5);
num.add(1);
num.add(5);
num.add(2);
num.add(1);
num.add(2);
num.add(2);

// console.log(num.exist(5))

// console.log(num)

// console.log(num.removeDuplicate());

num.delAllKey(2);
num.delAllKey(1);
num.delAllKey(4);

num.list();
