/*console.log(__dirname)
setInterval(() => {
    console.log('hello world')
},1000)*/
  
/*const http = require('http');   
    
const server = http.createServer((req,res) => {   
   if(req.ulr === '/'){
    res.end('Welcome to our homepage')
   }
   if(req.ulr === '/about'){
    res.end('Here is our short history')
   }
   res.end(`
    <h1>Oops</h1>
    <p> We can't seem to find the page you are looking</p>
    <a href ="/">back home</a>
    `)
   
})

  server.listen(5000)*/

  const _ = require('lodash')

  const items = [1, [2, [3, [4]]]]
  const newItems = _.flattenDeep(items)
  console.log(newItems)


