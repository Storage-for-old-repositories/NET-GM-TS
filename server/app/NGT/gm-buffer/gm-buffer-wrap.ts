import { bufferReadString } from "../utility/buffer";
import { GMBufferEnumSeek } from "./enums";
import { IGMBufferController, IGMBufferType } from "./interface";

export class GMBufferWrapRead implements IGMBufferType {
  // Constructor

  constructor(public controller: IGMBufferController) {}

  // Getters

  get buffer() {
    return this.controller.buffer;
  }

  //#region implements Main

  getSize() {
    return this.controller.size;
  }

  getAlign() {
    return this.controller.align;
  }

  getAnchor() {
    return this.controller.getAnchor();
  }

  setAnchor(anchor: number, from = GMBufferEnumSeek.start) {
    this.controller.setAnchor(anchor, from);
  }

  //#endregion

  //#region implements Read

  read_u8() {
    const anchor = this.controller.calcAnchor();
    return (
      this.controller.moveAnchor(anchor + 8 / 8), this.buffer.readUInt8(anchor)
    );
  }

  read_u16() {
    const anchor = this.controller.calcAnchor();
    return (
      this.controller.moveAnchor(anchor + 16 / 8),
      this.buffer.readUInt16LE(anchor)
    );
  }

  read_u32() {
    const anchor = this.controller.calcAnchor();
    return (
      this.controller.moveAnchor(anchor + 32 / 8),
      this.buffer.readUInt32LE(anchor)
    );
  }

  read_u64() {
    const anchor = this.controller.calcAnchor();
    return (
      this.controller.moveAnchor(anchor + 64 / 8),
      this.buffer.readBigUInt64LE(anchor)
    );
  }

  read_s8() {
    const anchor = this.controller.calcAnchor();
    return (
      this.controller.moveAnchor(anchor + 8 / 8), this.buffer.readInt8(anchor)
    );
  }

  read_s16() {
    const anchor = this.controller.calcAnchor();
    return (
      this.controller.moveAnchor(anchor + 16 / 8),
      this.buffer.readInt16LE(anchor)
    );
  }

  read_s32() {
    const anchor = this.controller.calcAnchor();
    return (
      this.controller.moveAnchor(anchor + 32 / 8),
      this.buffer.readInt32LE(anchor)
    );
  }

  read_f32() {
    const anchor = this.controller.calcAnchor();
    return (
      this.controller.moveAnchor(anchor + 32 / 8),
      this.buffer.readFloatLE(anchor)
    );
  }

  read_f64() {
    const anchor = this.controller.calcAnchor();
    return (
      this.controller.moveAnchor(anchor + 64 / 8),
      this.buffer.readDoubleLE(anchor)
    );
  }

  read_str() {
    const anchor = this.controller.calcAnchor();
    const [bytes, str] = bufferReadString(this.buffer, anchor);
    return this.controller.moveAnchor(anchor + bytes + 1), str;
  }

  //#endregion
}

export class GMBufferWrapWrite extends GMBufferWrapRead {
  // Constructor

  //#region implements Write

  write_u8(value: number) {
    const anchor = this.controller.calcAnchor();
    this.controller.moveAnchor(anchor + 8 / 8);
    this.buffer.writeUInt8(value, anchor);
  }

  write_u16(value: number) {
    const anchor = this.controller.calcAnchor();
    this.controller.moveAnchor(anchor + 16 / 8);
    this.buffer.writeUInt16LE(value, anchor);
  }

  write_u32(value: number) {
    const anchor = this.controller.calcAnchor();
    this.controller.moveAnchor(anchor + 32 / 8);
    this.buffer.writeUInt32LE(value, anchor);
  }

  write_u64(value: bigint) {
    const anchor = this.controller.calcAnchor();
    this.controller.moveAnchor(anchor + 64 / 8);
    this.buffer.writeBigUInt64LE(value, anchor);
  }

  write_s8(value: number) {
    const anchor = this.controller.calcAnchor();
    this.controller.moveAnchor(anchor + 8 / 8);
    this.buffer.writeInt8(value, anchor);
  }

  write_s16(value: number) {
    const anchor = this.controller.calcAnchor();
    this.controller.moveAnchor(anchor + 16 / 8);
    this.buffer.writeInt16LE(value, anchor);
  }

  write_s32(value: number) {
    const anchor = this.controller.calcAnchor();
    this.controller.moveAnchor(anchor + 32 / 8);
    this.buffer.writeInt32LE(value, anchor);
  }

  write_f32(value: number) {
    const anchor = this.controller.calcAnchor();
    this.controller.moveAnchor(anchor + 32 / 8);
    this.buffer.writeFloatLE(value, anchor);
  }

  write_f64(value: number) {
    const anchor = this.controller.calcAnchor();
    this.controller.moveAnchor(anchor + 64 / 8);
    this.buffer.writeDoubleLE(value, anchor);
  }

  write_str(value: string) {
    const anchor = this.controller.calcAnchor();
    const bytes = this.buffer.write(value, anchor);
    this.controller.moveAnchor(anchor + bytes + 1);
  }
}
