function successfullMessage(msg) {
    return "```" + msg + "```"
}
function errorMessage(msg) {
    return "```" + msg + "```"
}
function infoMessage(msg) {
    return "```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
