const { getDate } = require('./Date');
function log(text) { 
    let welcome = "[NotifyKeep] (" + getDate() + ") >> ";
    console.log(welcome + text);
}
function buildHTML(data){
    return "<html><body><b>Monitoring serwisów WWW:</b><br>" + data +
    "<br><br>" + getDate() + "</body></html>";
}
module.exports = { log, buildHTML }