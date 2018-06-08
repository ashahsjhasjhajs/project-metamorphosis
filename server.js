const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const contentPath = __dirname + "/content/";
app.use(express.static(contentPath));

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

app.listen(port, () => {
	console.log("listening on port: ", port);
});
