/*
https://github.com/NitrossRoboto/bot
*/

function successfullMessage(msg) {
    return "β *NitrossBot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *NitrossBot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *NitrossBot*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}