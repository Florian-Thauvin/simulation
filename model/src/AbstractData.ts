const uuidv4 = require("uuid/v4");

export class AbstractData {
  public id: number;

  constructor() {
    this.id = uuidv4();
  }
}
