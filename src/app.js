const express = require('express');
const useRouter = require('./routes/user.router');

// ...

const app = express();

app.use(express.json());
app.use('/user', useRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
