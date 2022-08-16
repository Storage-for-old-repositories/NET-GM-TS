import net from "net";
// import dgram from "dgram";

const server = new net.Server();

server.on("connection", (socket) => {
  socket.on("data", buffer => {

    const [x, y, z, w] = [
      buffer.readUInt32LE(0),
      buffer.readUInt32LE(4),
      buffer.readUInt32LE(8),
      buffer.readUInt32LE(12),
    ];

    console.log([x, y, z, w]);

    const buf = Buffer.allocUnsafe(4 * 2);
    buf.writeInt32LE(254);
    buf.writeInt32LE(20013, 4);

    console.log(buf);

    socket.write(buf);
  });
});

server.listen(7184, "localhost", () => {
  console.log('Server start');
});


// const socket = new WebSocket("");

// socket.addEventListener("open", (event) => {
//   event.target?.addEventListener("")
// });