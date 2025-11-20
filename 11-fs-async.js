

const { readFile, writeFile } = require('fs');
    
   //This is commit   
console.log('start')   
readFile('./content/subfolder/first.txt','utf8', (err, result) => {               
    if (err) {        
        console.log(err)         
        return           
    }    
    const first = result;   
    readFile('./content/subfolder/first.txt','utf8',(err,result) =>{     
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `Here is thee result : ${first}, ${second}`
        , (err,result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')
