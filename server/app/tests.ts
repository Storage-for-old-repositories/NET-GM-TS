// import { GMBufferFixedWrite } from "./mod/gm-buffer";

import { GMBufferControllerFixed } from "./NGT/gm-buffer/gm-buffer-controller-fixed";
import { GMBufferWrapWrite } from "./NGT/gm-buffer/gm-buffer-wrap";

// // // const b1 = GMBufferFixed.from(4);
// // // const b2 = GMBufferFixed.from(b1);

// // // console.log(b1);
// // // console.log(b2);

// // const b = Buffer.alloc(80);

// // b.write("Hello Кирилл", 4);

// // console.log(b);

// // const mess = bufferReadString(b, 4);

// // console.log(`"${mess}"`);

// // console.log(b.readUInt8(mess[0] + 4));

// // const obj = {
// //     x: 1,
// //     f: function(y) { return this.x; };
// // }

// // console.log(obj.f.call(obj, 2));

// // const b1 = GMBufferFixed.from(32, 2);

const writes = new Map([
  ["buffer_u8", (b: GMBufferWrapWrite, v: unknown) => b.write_u8(v as number)],
  [
    "buffer_u16",
    (b: GMBufferWrapWrite, v: unknown) => b.write_u16(v as number),
  ],
  [
    "buffer_u32",
    (b: GMBufferWrapWrite, v: unknown) => b.write_u32(v as number),
  ],
  [
    "buffer_u64",
    (b: GMBufferWrapWrite, v: unknown) => b.write_u64(v as bigint),
  ],
  ["buffer_s8", (b: GMBufferWrapWrite, v: unknown) => b.write_s8(v as number)],
  [
    "buffer_s16",
    (b: GMBufferWrapWrite, v: unknown) => b.write_s16(v as number),
  ],
  [
    "buffer_s32",
    (b: GMBufferWrapWrite, v: unknown) => b.write_s32(v as number),
  ],
  // ["buffer_s64", (b: GMBufferWrapWrite, v: unknown) => b.write_s64(v as bigint)],
  [
    "buffer_f32",
    (b: GMBufferWrapWrite, v: unknown) => b.write_f32(v as number),
  ],
  [
    "buffer_f64",
    (b: GMBufferWrapWrite, v: unknown) => b.write_f64(v as number),
  ],
  [
    "buffer_string",
    (b: GMBufferWrapWrite, v: unknown) => b.write_str(v as string),
  ],
]);

const reades = new Map([
  ["buffer_u8", (b: GMBufferWrapWrite) => b.read_u8() as unknown],
  ["buffer_u16", (b: GMBufferWrapWrite) => b.read_u16() as unknown],
  ["buffer_u32", (b: GMBufferWrapWrite) => b.read_u32() as unknown],
  ["buffer_u64", (b: GMBufferWrapWrite) => b.read_u64() as unknown],
  ["buffer_s8", (b: GMBufferWrapWrite) => b.read_s8() as unknown],
  ["buffer_s16", (b: GMBufferWrapWrite) => b.read_s16() as unknown],
  ["buffer_s32", (b: GMBufferWrapWrite) => b.read_s32() as unknown],
  // ["buffer_s64", (b: GMBufferWrapWrite) => b.read_s64() as unknown],
  ["buffer_f32", (b: GMBufferWrapWrite) => b.read_f32() as unknown],
  ["buffer_f64", (b: GMBufferWrapWrite) => b.read_f64() as unknown],
  ["buffer_string", (b: GMBufferWrapWrite) => b.read_str() as unknown],
]);

function bwrite<T>(buffer: GMBufferWrapWrite, type: string, value: unknown) {
  const xx = buffer.getAnchor();
  writes.get(type)!(buffer, value);
  const yy = buffer.getAnchor();
  console.log([xx, yy]);
}

function bread<T>(buffer: GMBufferWrapWrite, type: string): any {
  const xx = buffer.getAnchor();
  const rs = reades.get(type)!(buffer);
  const yy = buffer.getAnchor();
  console.log([xx, yy, rs]);
}

const bb = Buffer.alloc(48);
const cc = new GMBufferControllerFixed(4, bb);
const buffer = new GMBufferWrapWrite(cc);

bwrite(buffer, "buffer_u8", 255);
bwrite(buffer, "buffer_u16", 121);
bwrite(buffer, "buffer_f32", 2.0057);
bwrite(buffer, "buffer_string", "Hello Кирилл;");
bwrite(buffer, "buffer_string", " -- ");
bwrite(buffer, "buffer_u8", 11);

console.log(buffer);
buffer.setAnchor(0);

bread(buffer, "buffer_u8");
bread(buffer, "buffer_u16");
bread(buffer, "buffer_f32");
bread(buffer, "buffer_string");
bread(buffer, "buffer_string");
bread(buffer, "buffer_u8");
