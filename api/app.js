const express = require('express');
const app = express();
const PORT = 3000;

// middleware
const cors = require('./middleware/cors')

// routes
const UserRouter = require('./routes/users');
//const moviesRouter = require('./routes/movies');

// express to JSON
app.use(express.json());
// encoded url
app.use(express.urlencoded({ extended: true }));

app.use(cors);

app.use('/users', UserRouter);
//app.use('/movies', moviesRouter);

//port
app.listen(PORT, () => console.log('server running on port ' + PORT))

