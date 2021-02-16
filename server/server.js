const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();
require("./config/mongoose.config"); // This is new
require('dotenv').config();
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
require("./routes/user.routes")(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000");
});

