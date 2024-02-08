const express = require("express");
const cors = require("cors");
const app = express();

const nick = [];
app.use(express.json());
app.use(cors());


app.post('https://jankes24.github.io/prezentacja1/quiz.html', (req, res) => {
    nick.push(req.body);
    console.log(nick);
    res.status(200).end();
    app.get('https://jankes24.github.io/prezentacja1/host.html', (req, res) => {
        const serverData = nick;
        res.json(serverData);
    });
})

app.listen(8888, () => {
    console.log('bzyyyyy bzzzzz');
});
