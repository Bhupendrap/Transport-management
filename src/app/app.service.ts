import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
items: any;

  constructor() { }

  setitems(item) {
    this.items = item;
  }

  getMyItems() {
    return this.items;
  }
}
