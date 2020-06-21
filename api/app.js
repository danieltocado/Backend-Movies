const express = require('express');
const app = express();
const PORT = 3000;

// middleware
const cors = require('./middleware/cors');

// routes
const UserRouter = require('./routes/users');
const MovieRouter = require('./routes/movies');
const OrderRouter = require('./routes/orders');
// express to JSON
app.use(express.json());
// encoded url
app.use(express.urlencoded({ extended: true }));

app.use(cors);

app.use('/users', UserRouter);
app.use('/movies', MovieRouter);
app.use('/orders', OrderRouter);

// port
app.listen(PORT, () => console.log('server running on port ' + PORT))

