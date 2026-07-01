//=======================
// New example of student record api
const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  //logs every request
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();// Pass to next handler (required!)
});

app.get('/', (req, res) => res.send("My Week 2 API!"));

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Missing Data' });
        //Simulate DB save
    res.status(201).json({ message: `Hello ${name}`});   
});

app.get('/user/:id', (req, res) => {
    // Simulate fetching users from DB
    const id = req.params.id;
    res.send(`User ${id} profile`);
    console.log(`User ID: ${id} profile requested`);
});

app.listen(3000, () => console.log('API live on port 3000'));