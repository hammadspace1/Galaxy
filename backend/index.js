const express = require("express")
// const bodyParser = require('body-parser');
const {Connection} = require("./Connection/Db_connection")
const router = require("./Routes/index.route")
const app = express();
const cors = require("cors")
app.use(express.json());
Connection();
app.use(cors());
app.use(router);

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.listen(5000, () => {
    console.log("app is running on port 5000")
})