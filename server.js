const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

let ENV = process.env.NODE_ENV || 'production';

app.use(express.static(__dirname + `/temp/${ENV}/`));
// Handle SPA
app.get(/.*/, (req, res) => res.sendFile(__dirname + `/temp/${ENV}/index.html`));

const port = process.env.PORT || 8080
app.listen(port)

app.listen(port, () => console.log(`Server started on port ${port}`));