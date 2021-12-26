import { AbstractData } from "../AbstractData";
import { Point } from "../geometry/Point";
import { EState } from "./State";

export class Person extends AbstractData {
  public state: EState;

  public position: Point;

  constructor() {
    super();

    this.state = EState.CLEAN;
    this.position = new Point();
  }
}
