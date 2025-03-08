const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const registerRoute = require('./routes/register');
app.use('/register', registerRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});