const express = require('express')
const app = express()

app.use(express.json())


//Endpoints

const requestCtrl = require('./requestCtrl')

app.get('/api/requests', requestCtrl.getRequests)
app.post('/api/requests', requestCtrl.addRequest)
app.put('/api/requests/:id', requestCtrl.updateRequest)
app.delete('/api/requests/:id', requestCtrl.deleteRequest)

const port = 3050
app.listen(port, () => console.log(`server listening on port: ${port}`))