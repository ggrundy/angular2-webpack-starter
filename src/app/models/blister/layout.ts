// import { deserialize } from 'json-typescript-mapper';
import { Dose } from './dose';

export class Layout {
  public static fromJson(json: Object): Layout {
    // let a = deserialize(Layout, json);
    // console.log(json);
    // console.log(a);
    // return a;
    let a = new Layout();
    a.id = 20;
    return a;
  }

  public id: number;
  // public groups: Group[] = [];
  // constructor(){
  //
  // }

  public setDoses(doses: Dose[]) {
    // do nothing
  }

}
