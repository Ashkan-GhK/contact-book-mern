const express = require('express');
const connectDB = require('./config/db')

const app = express();

// Connect database
connectDB();

// INIT MIDDLEWARE
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json('Welcome to ContactBook App'));

//Define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on prot ${PORT}`));