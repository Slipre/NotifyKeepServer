function chkDate(){
    const date = new Date();
    if (date.getHours() == 0 && date.getMinutes() == 0) return true;
    return false;
}
function getDate(){
    const date = new Date();
    return date.getFullYear().toString().slice(-2) + "-" + addZero(date.getMonth()+1) + "-" + addZero(date.getDate()) + " " +
    addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
}
function addZero(k){
    if (k < 10) { k = "0" + k; }
    return k;
}
module.exports = { getDate, chkDate }