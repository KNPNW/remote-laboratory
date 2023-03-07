import socket from "./socket";

function getVideo(cb) {
    socket.on('image', image => cb(image));
}

export { getVideo };