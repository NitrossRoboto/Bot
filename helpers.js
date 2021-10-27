/*
https://github.com/NitrossRoboto/bot
*/

function successfullMessage(msg) {
    return "✅ *NitrossBot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *NitrossBot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *NitrossBot*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}