const os = require('os');

//Info about current user
const user = os.userInfo()
console.log(user);
    
//method returns the system uptime in seconds   
console.log(`the System uptime is ${os.uptime()} seconds`)   

const currentOs = {   
    name:os.type(),
    release:os.release(),  
    totalMe:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs)
