
const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method

  switch (url) {
    case '/':
      res.setHeader('Content-Type', 'text/html')
      res.write('<html><body>')
      res.write('<form action="/test" method="POST"><input name="test"><button type="submit">test</button></form>')
      res.write('</body></html>')
      return res.end()
    case '/test':
      const body = []
      req.on('data', chunk => body.push(chunk))
      req.on('end', () => {
        parse = Buffer.concat(body).toString()
        console.log(parse.split('=')[1])
      })
      return res.end()
    default:
      res.setHeader('Content-Type', 'text/html')
      res.write('<html><body>')
      res.write('<h1>raw Nodejs server</h1>')
      res.write('</body></html>')
      return res.end()
  }
}

module.exports = requestHandler