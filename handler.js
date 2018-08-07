const express=require('express')
const app = express()


app.get('/details',function(req, res) {
	
	const language=req.headers["accept-language"]
	const ipaddress = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress).split(",")[0];
	const software=req.headers["user-agent"]

	const json={"ipaddress": ipaddress, "language": language, "software": software}
	res.json(json)
	

	
})

app.listen(8080, function() {
	console.log("Listening on port 8080");
})