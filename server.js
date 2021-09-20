const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json(), express.urlencoded({ extended: true }), cors());

require("./server/config/config");
require("./server/routes/routes")(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));