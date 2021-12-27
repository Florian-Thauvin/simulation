import { AbstractData } from "../AbstractData";
import { Point } from "../geometry/Point";
import { Vector } from "../geometry/Vector";
import { EState } from "./State";

export class Person extends AbstractData {
  public state: EState;

  public position: Point;

  public vector: Vector;

  constructor() {
    super();

    this.state = EState.CLEAN;
    this.position = new Point();
    this.vector = new Vector();
  }
}
