//=======================
// New example of student record api
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send("Welcome to User API!"));

app.post('/register', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Missing Fields' });
        //Simulate DB save
    res.status(201).json({ message: `Registered: ${name} (${email})`});   
});

app.get('/users', (req, res) => {
    // Simulate fetching users from DB
    res.json({id: req.params.id, name: "Sample User" });
});

app.listen(3000, () => console.log('API live on port 3000'));