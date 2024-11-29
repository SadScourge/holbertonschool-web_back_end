export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const Int8 = new Int8Array(buffer);
  if (position > Int8.length || position < 0) { throw new Error('Position outside range'); }
  Int8[position] = value;
  return new DataView(buffer);
}
