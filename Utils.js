const { getDate } = require('./Date');
function log(text) { 
    let welcome = "[NotifyKeep] (" + getDate() + ") >> ";
    console.log(welcome + text);
}
function buildHTML(dane){
    //pass table
    var start = "<html><body><b>Monitoring serwisów WWW:</b><br>";
    //loop table for add line

    //add st00pke with date/time
    var time = "<br><br>Dnia: " + "data" + "<br>" +
        "Godzina: " + "godzina";

    var end = "</body></html>";
}
module.exports = { log, buildHTML }