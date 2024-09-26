const express = require('express');

const app = express();

app.use(express.json());

let users = [];

app.post('/api/users/add-user', (req, res) => {
    const { name, email } = req.body;

    if(!name || !email) {
        res.status(400).json({ state: 'failed', message: 'Name and Email must be required' });
    }

    const user = { name, email, id: users.length + 1};

    users.push(user);

    res.status(200).json({ state: 'success', message: 'Added successfully' });
})


app.get('/api/users', (req, res) => {
    const data = users;

    res.status(200).json({ state: 'success', message: 'Get data successfully', data });
})

app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    const data = users.find(e => e.id === id);

    if(data) {
        res.status(200).json({ state: 'success', message: 'Get data successfully', data });
    } else {
        res.status(400).json({ state: 'failed', message: 'No user has this id' });
    }
})

app.put('/api/users/update/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find(e => e.id === id);

    if(user) {
        const { name, email } = req.body;
        
        user.name = name || user.name;

        user.email = email || user.email;

        res.status(200).json({ state: 'success', message: 'Updated data successfully', user });
    } else {
        res.status(400).json({ state: 'failed', message: 'No user has this id' });
    }
})

app.delete('/api/users/delete/:id', (req, res) => {
    const { id } = req.params;

    const data = users.find(e => e.id === id);

    if(data) {
        users = users.filter(e => e.id !== id);

        res.status(200).json({ state: 'success', message: 'Deleted data successfully' });
    } else {
        res.status(400).json({ state: 'failed', message: 'No user has this id' });
    }
})

module.exports = app;