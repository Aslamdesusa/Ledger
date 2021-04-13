const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

let ENV = process.env.NODE_ENV || 'production';

const config = require(`./${ENV}.config.json`);

app.use(express.static(__dirname + `/temp/${ENV}/`));
// Handle SPA
app.get(/.*/, (req, res) => res.sendFile(__dirname + `/temp/${ENV}/index.html`));

app.listen(config.application.port, () => console.log(`Server started on port ${config.application.port}`));