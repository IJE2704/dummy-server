const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

app.get('/', (req,res) =>{
  res.send('cors is running');
})

app.get('/home', (req,res)=>{
  res.send('its running on home')
})

app.listen(port, ()=>{
  console.log("coffee server is running on port: 5000")
})