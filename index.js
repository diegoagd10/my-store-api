const express = require('express');
const cors = require('cors');
const routersApi = require('./routes');

const application = express();
const port = 3000;
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares');

application.use(express.json());

routersApi(application);

application.use(cors());
application.use(logErrors);
application.use(boomErrorHandler);
application.use(errorHandler);

application.listen(port, () => {
  console.log(`Service listening at http://localhost:${port}`);
});
