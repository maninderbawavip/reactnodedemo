const app = require('express')

const server = app();

// endpoints

server.get('/', (req, res) => {
    res.send("Hello G")
})

server.get('/names', (req, res) => {
    const data = ["Maninder", "Deeksha", "Kunal", "Rajiv", "hello"]
    // send the data back in response

    // get the data from a database and then send it back to the client

    res.send(data)
})


server.get('/actors', (req, res) => {
    console.log('new request came')
    //get data from any data source

    res.send({ actors: ["a", "b", "c"]})
})

server.listen(5000, (err) => {
    if(err) {
        console.log("some error occured")
    } else {
        console.log("server is running")
    }
})