import http from 'http'

const PORT = process.env.PORT || 8080

let count = 0
setInterval(()=> {
  count++
  console.log(count + ': rodando...')
}, 10000)

const server = http.createServer((req, res)=> {
  console.log('Recebi request')
  res.end('server ok')
})

server.listen(PORT, ()=> {
  console.log('server running in port ' + PORT)
})