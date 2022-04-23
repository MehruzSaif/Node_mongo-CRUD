const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
;const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

// user: dbuser1
// password: v1Lv4PCTOmu6zfD2


const uri = "mongodb+srv://dbuser1:v1Lv4PCTOmu6zfD2@cluster0.pta9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('db connected');
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
    res.send('Running Node CRUD Server')
})

app.listen(port, () => {
    console.log('CRUD server is learning');
})