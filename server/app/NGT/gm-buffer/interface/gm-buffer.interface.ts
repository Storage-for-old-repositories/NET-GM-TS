import { GMBufferEnumSeek } from "../enums";

export interface IGMBufferController {
  get align(): number;
  get size(): number;
  get buffer(): Buffer;

  getAnchor(): number;
  setAnchor(anchor: number, from: GMBufferEnumSeek): void;

  calcAnchor(): number;
  moveAnchor(anchor: number): void;
}

export interface IGMBufferType {
  controller: IGMBufferController;
  get buffer(): Buffer;
}
