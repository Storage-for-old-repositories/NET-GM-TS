
// /**
//  * Read the string up to the terminating character `'\n'`
//  * @param offset in bytes
//  * @returns Returns the number of bytes read and a string in the format `[bytes, string]`
//  */


export function bufferReadString<T extends Buffer>(
  buffer: T,
  offset = 0
): [number, string] {
  let end = offset;
  for (; end < buffer.byteLength; ++end) {
    if (buffer.readUInt8(end) === 0) {
      break;
    }
  }
  const sub = buffer.subarray(offset, end);
  return [sub.byteLength, sub.toString()];
}
