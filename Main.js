const WebSocket = require('ws');
const nodemailer = require('nodemailer');
const { SMTP, port } = require('./config.json');
const transport = nodemailer.createTransport(SMTP);
const { getDate } = require('./Date');
const { log } = require('./Utils');
const wss = new WebSocket.Server({ port: port });
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    log('%s', message);
    //Add to table
    //table to buildhtml
    //send html
  });
});

