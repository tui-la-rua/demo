const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
app.get('/trangchu', (req, res) => {
  res.send('Hello World!')
})

const port = 3000
app.listen(port, ()=>{
  console.log(`Server is running at http://localhost:${port}`)
})