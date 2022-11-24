const os = require("os");

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})
