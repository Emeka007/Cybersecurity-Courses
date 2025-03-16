const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Registration Page');
});

module.exports = router;
