const { getDate } = require('./Date');
function log(text) { 
    let welcome = "[NotifyKeep] (" + getDate() + ") >> ";
    console.log(welcome + text);
}
function buildHTML(data){
    return "<html><body><b>Monitoring serwisów WWW:</b><br>" + data +
    "<br><br>" + getDate() + "</body></html>";
}
function Setup(emails){
    console.log('\x1b[36m%s', "======START======");
    console.log("==[NOTIFYKEEPS]==");
    console.log("=================", '\x1b[0m');
    log("Ładowanie emaili:");
    console.log(emails);
    console.log("=================");
    log("Praca w tle rozpoczęta...");
    log("Życzę miłego dnia i smacznej Kawusi :)");
  }
module.exports = { log, buildHTML, Setup }