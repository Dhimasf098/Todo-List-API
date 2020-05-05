const express = require('express')
const app = express()
const port = 2020

// Routes
const userRouter = require('./routes/userRoutes')
const todoRouter = require('./routes/todoRoutes')

app.use(express.json())
app.use(userRouter)
app.use(todoRouter)


app.get('/', (req, res) => {
   res.send(`<h1>API Running at ${port}</h1>`)
})

app.listen(port, () => console.log(`API Running at ${port}`))