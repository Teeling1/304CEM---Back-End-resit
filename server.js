const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const registerRoutes = require('./routes');

const port = 3005;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



registerRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
});
