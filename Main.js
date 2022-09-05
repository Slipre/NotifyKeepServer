const WebSocket = require('ws');
const fs = require('fs');
const dates = new Map();
let emails = new Array();
fs.readFileSync('./emails.txt', 'utf-8').split(/\r?\n/).forEach(function(line) { if (line != '') { emails.push(line); } });
const nodemailer = require('nodemailer');
const { chkDate } = require('./Date');
const { log, buildHTML, Setup } = require('./Utils');
const { SMTP, port, sender, send_time, ask_time } = require('./config.json');
const transport = nodemailer.createTransport(SMTP);
const wss = new WebSocket.Server({ port: port });
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(msg) {
    try {
      const date = JSON.parse(msg);
      dates.set(date.name, date.left);
    }catch(err){ log(msg); }
  });
});
async function Asking() {
  wss.clients.forEach((client) => {
    client.send("dataplease");
  });
}
async function Sending(){
  let mail = getMap();
  for (j = 0; j < emails.length; j++) {
    let message = {
      from: sender,
      to: emails[j],
      subject: 'Monitoring Pamięci Serwisów WWW',
      html: buildHTML(mail)
    };
    transport.sendMail(message, (err) => {
      if (err) {
        log("Błąd wysyłania >> " + message.to);
        log(err.message);
        return false;
      } else {
        log("Wysłano >> "+ message.to);
        return true;
      }  
    });
  }
}
function getMap() {
  let callback = "";
  dates[Symbol.iterator] = function* () { yield* [...this.entries()].sort((a, b) => a[1] - b[1]); }
  for (let [key, value] of dates) { callback = callback + "Na: " + key + " pozostało: " + value + "<br>"; }
  return callback;
}
async function Sender(){
  if(chkDate(ask_time.hour, ask_time.minute)) Asking();
  if(chkDate(send_time.hour, send_time.minute)) Sending();
  await new Promise(res=>setTimeout(res,60000));
  process.nextTick(Sender);
}
Setup(emails);
Sender();