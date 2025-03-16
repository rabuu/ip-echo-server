const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.set('trust proxy', true)

app.get("/", (req, res) => {
	console.log(`GET request by ${req.ip}`)
	res.set('Content-Type', 'text/plain')
	res.send(`${req.ip}\n`)
})

app.listen(port, () => {
	console.log(`App is listening on port ${port}...`);
})
