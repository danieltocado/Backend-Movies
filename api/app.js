const express = require('express');
const app = express();

const usersRouter = require('./routes/users');


const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', usersRouter);

app.listen(PORT, () => console.log('server running on port ' + PORT))
