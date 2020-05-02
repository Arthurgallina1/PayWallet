const express = require("express");
const cors = require("cors");

const app = express();
const routes = require("./routes");

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(routes);
// app.listen(8000, '0.0.0.0');
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
