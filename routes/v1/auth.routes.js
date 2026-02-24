const express = require('express');
const router = express.Router();
const User = require('../../models/Users');

router.get('/login', (req, res) => {
    res.json({ message: 'Login route' });
});

router.post('/register', async (req, res) => {
  
    
});
module.exports = router;