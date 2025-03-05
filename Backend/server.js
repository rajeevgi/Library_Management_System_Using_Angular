const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Establishing a connection with mongoDB
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected Successfully..."))
.catch(() => console.error("Something went wrong!"));

const port = process.env.PORT;

// Routes
app.use('/api/books', bookRoutes);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})