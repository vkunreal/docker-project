const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ status: true })
})

app.listen(5000, () => {
  console.log('Server started on port ' + 5000)
})
