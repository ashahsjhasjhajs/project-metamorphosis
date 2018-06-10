const express = require("express"); //import express framework
const app = express(); //create an app
const port = process.env.PORT || 3000; //

const contentPath = __dirname + "/content/";
app.use(express.static(contentPath)); //serving static assets

// route main index.
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});


// add a diffferent route for each day.
app.get("/day1", (req, res) => {
	res.sendFile(contentPath + "day1/index.html");
});



// Catch-all route. If a bad url is requested, just respond with main index.
app.get("/*", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => { //opens a door in the server, whatever happens on that port, you get notified.
	console.log("listening on port: http://www.localhost:" + port);
});
