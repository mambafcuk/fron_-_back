const express = require('express')
const app = express()
const port = 3001

app.get('/', (req,res)=>{
    res.send("Backend is working!!!")
})


app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "Joke 1 is here haha"
        }
    ]
    res.send(jokes)
})


app.listen(port, ()=>{
    console.log(`service is running at ${port}`);
    
})