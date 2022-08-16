import { GMBufferEnumSeek } from "./enums";
import { IGMBufferController } from "./interface";

export class GMBufferControllerFixed implements IGMBufferController {
  // Constructor

  private anchor_ = 0;

  constructor(public readonly align_: number, private buffer_: Buffer) {}

  // Getters

  get align() {
    return this.align_;
  }

  get size() {
    return this.buffer_.byteLength;
  }

  get buffer(): Buffer {
    return this.buffer_;
  }

  // Method

  getAnchor() {
    return this.anchor_;
  }

  setAnchor(anchor: number, from: GMBufferEnumSeek) {
    if (from == GMBufferEnumSeek.start) {
      this.anchor_ = anchor;
    } else if (from == GMBufferEnumSeek.relative) {
      this.anchor_ += anchor;
    } else {
      this.anchor_ = this.buffer_.byteLength - anchor;
    }
  }

  calcAnchor() {
    return Math.ceil(this.anchor_ / this.align) * this.align;
  }

  moveAnchor(anchor: number) {
    this.anchor_ = anchor;
  }
}
