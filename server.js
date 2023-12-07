const express = require('express');
const app = express();
const port = 3000;





app.get('/greeting/:name', (req, res) => {
    console.log(req.params)
    res.send('Hello there ' + req.params.name)
})


app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params)
    let total = Number(req.params.total)
    let tipPercentage = Number(req.params.tipPercentage)
    let tip = total * tipPercentage / 100
    res.send(`your tip for total $${total} with the tip percent of ${tipPercentage}% should be $${tip.toFixed(2)}`)

})

const  responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]



app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    let magic8BallResponses = responses[Math.floor(Math.random()*responses.length)]
    console.log(req.params)
    console.log(magic8BallResponses);
    console.log(Math.floor(Math.random()*responses.length))
    res.send( `<h3> Will I be a millionaire ? </h3>
    <h1>${magic8BallResponses}</h1>`)
 
})



app.get('/', (req, res) => {
    res.send('<h1> Hello This is the root</h1>')
})





app.listen(port, () => {
    console.log('listening on port', port);
})