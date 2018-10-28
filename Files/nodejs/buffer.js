var dgram = require("dgram");
var socket = dgram.createSocket("udp4");

socket.bind(3012);