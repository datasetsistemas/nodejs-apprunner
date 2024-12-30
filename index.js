import https from 'https'

let count = 0
setInterval(()=> {
  count++
  console.log(count + ': rodando...')
}, 1000)

const server = https.createServer((req, res)=> {
  console.log('Recebi request')
  res.end('server ok')
})

server.listen(3333, ()=> {
  console.log('server running')
})