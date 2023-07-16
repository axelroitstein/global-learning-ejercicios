import http from 'node:http'

const port = process.env.port || 3000

const serverCallback = (_, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/plain; charset= utf-8')
  response.end('Shalom a todos')
}
/*
response.setHeader('Content-Type', 'application/json')
response.end(JSON.stringify({ message: 'Hello World', student: 'El pepe'}))
*/
const server = http.createServer(serverCallback)

server.listen(port, () => {
  console.log('Shalom a todos')
})
