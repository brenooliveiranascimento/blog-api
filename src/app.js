const express = require('express');
const loginRouter = require('./routes/login.router');
const userRouter = require('./routes/user.routes');
const CategoryRouter = require('./routes/Category.router');
// ...

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', CategoryRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
