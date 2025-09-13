const express = require('express');

const app = express();

app.get("/",(req, res) => {
    res.send("Hello from the main server");
});

app.get("/test",(req, res) => {
    res.send("Hello from the test server");
});

app.get("/user",(req, res) => {
    res.send({firstName: "Rajan", lastName: "Soni"});
});

app.post("/user", (req, res) => {
    console.log("Save data to the Database");
    res.send("Data successfully saved to the database");
});


app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
});