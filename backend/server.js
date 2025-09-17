// filepath: c:\Users\brahm\Desktop\FlowTalk\backend\server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const{sampleData, chats} = require('./data/data.js');

// ... your other routes and middleware



app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});