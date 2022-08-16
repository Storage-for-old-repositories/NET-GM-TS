
var b = buffer_create(400, buffer_fixed, 1);
var bw = new GMBufferWrapWrite(b);

bw.write_u16(255);

bw.write_u16(11);

var str = NGT_bufferToString(bw);

show_debug_message(str);

// <Buffer ff 00 0b 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 350 more bytes>
// <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 350 more bytes>