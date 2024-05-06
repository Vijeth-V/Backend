const os = require('os')

const user = os.userInfo()
console.log('user info - ',user);

const osDetails ={
    name: os.type(),
    version: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log("osDetails - ",osDetails);

