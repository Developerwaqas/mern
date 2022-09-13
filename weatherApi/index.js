let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'a54733e8595b75e3609f23f004bcf260';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
    //   let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      console.log(weather);
    }
  });

const app = express();
app.use(bodyParser.urlencoded({
extended: false
}));
app.use(bodyParser.json());


app.use(cors());

const PORT=9000;

app.get('/', (req,res)=>
res.send(`Our weather is running successfully on Port ${PORT}`)
);

app.listen(PORT,()=>
console.log(`Your weather is running successfully on Port ${PORT}`)
);