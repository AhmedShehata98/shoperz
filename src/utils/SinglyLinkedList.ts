class ListNode {
  public data: any | null = null;
  public next: any | null = null;
  constructor(data: null, next?: any | null) {
    this.data = data || null;
    this.next = next || null;
  }
}

export class SinglyLinkedList {
  private head: ListNode | null = null;
  private tail: ListNode | null = null;
  private size: number = 0;
  constructor() {}

  public push(data: any) {
    const node = new ListNode(data);
    if (data.id !== this.tail?.data) {
      if (!this.head) {
        this.tail = this.head = node;
      } else {
        this.tail!.next = node;
        this.tail = node;
      }
      this.size++;
      return this;
    } else {
      return null;
    }
  }
  public pop() {
    let temp = this.head;
    let pre = null;
    while (temp?.next) {
      pre = temp;
      temp = temp.next;
    }

    temp = pre;
    pre!.next = null;
    return pre;
  }
  public update(oldData: any, newData: any) {
    let current = this.head;

    while (current) {
      if (current.data.id === oldData) {
        console.log(current.data.id === oldData);

        if (typeof newData === "object" || Array.isArray(newData)) {
          current.data = { ...current.data, ...newData };
        } else {
          current.data = { ...current.data, newData };
        }

        return true;
      } else {
        current = current.next;
      }
    }
    return -1;
  }
  public getById(data: any) {
    let current = this.head;
    while (current) {
      if (current.data.id === data) {
        return current.data;
      }
      current = current.next;
    }

    return -1;
  }
  public getByData(data: any) {
    let current = this.head;
    while (current) {
      // Object.keys(current.data)
      current = current.next;
    }

    return -1;
  }
  public margeAllData() {
    const fullData = {};
    let current = this.head;

    while (current) {
      Object.assign(fullData, { ...current.data });
      current = current.next;
    }

    return JSON.stringify(fullData) !== "{}" ? fullData : false;
  }
  public get printTail() {
    return this.tail;
  }
}
