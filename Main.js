const WebSocket = require('ws');
const fs = require('fs');
const nodemailer = require('nodemailer');
const { chkDate } = require('./Date');
const { log, buildHTML } = require('./Utils');
const { SMTP, port, sender } = require('./config.json');
const transport = nodemailer.createTransport(SMTP);
var emails = new Array();
let toSend = "";

Setup();
Sender();

const wss = new WebSocket.Server({ port: port });
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    log(message);
    toSend = toSend + message + "<br>";
  });
});

async function Sending(){
  for (j = 0; j < emails.length; j++) {
    let message = {
      from: sender,
      to: emails[j],
      subject: 'Monitoring Serwisów WWW',
      html: buildHTML(toSend)
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

async function Sender(){
  if(chkDate()) Sending();
  await new Promise(res=>setTimeout(res,60000));
  process.nextTick(Sender);
}

function Setup(){
  console.log("======START======");
  console.log("==[NOTIFYKEEPS]==");
  console.log("");
  log("Ładowanie emaili:");
  fs.readFileSync('./emails.txt', 'utf-8').split(/\r?\n/).forEach(function(line) { if (line != '') { emails.push(line); } });
  console.log(emails);
  console.log("=================");
  log("Praca w tle rozpoczęta...");
  log("Życzę miłego dnia i smacznej Kawusi :)")
}