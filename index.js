const express = require('express');
const app = express();
const user = require('./routes/users');
app.use(user);

app.listen(3000);