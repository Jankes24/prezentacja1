const express = require("express");
const cors = require("cors");
const app = express();

const nick = [];
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('oki');
    res.status(200).end();
});



app.post('/client.html', (req, res) => {
    nick.push(req.body);
    console.log(nick);
    res.status(200).end();
    app.get('/host.html', (req, res) => {
        const serverData = nick;
        res.json(serverData);
    });
})

app.listen(8888, () => {
    console.log('bzyyyyy bzzzzz');
});