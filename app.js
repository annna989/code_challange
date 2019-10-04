const express = require('express')
const app = express()
const port = 3000


const middleware = require('./middleware/authorization');

const login = require('./login');
const encode = require('./encode')

app.use(express.json())
app.use(middleware());

app.post('/login', login)
app.post('/encode', encode);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))