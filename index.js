import https from 'https'

let count = 0
setInterval(()=> {
  count++
  console.log(count + ': rodando...')
}, 1000)

const server = https.createServer((req, res)=> res.end('server ok'))

server.listen(8080)