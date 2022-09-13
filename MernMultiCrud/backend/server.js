let express = require('express');
const http = require('http')
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Route
const subjectRoute = require('../backend/routes/subject.route')
const studentRoute = require('../backend/routes/student.route')
const resultMasterRoute = require('../backend/routes/resultMaster.route')
const resultDetailsRoute = require('../backend/routes/resultDetails.route')


// Configure mongoDB Database
mongoose.connect("mongodb://localhost:27017/MultiCrud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
console.log('Database successfully connected!')
},
error => {
	console.log('Could not connect to database : ' + error)
}
)


const app = express();
app.use(bodyParser.urlencoded({
extended: false
}));
app.use(bodyParser.json());


app.use(cors());
app.use('/subject', subjectRoute)
app.use('/student', studentRoute)
app.use('/resultMaster', resultMasterRoute)
app.use('/detail', resultDetailsRoute)

const PORT=5000;

app.get('/', (req,res)=>

res.send(`Our Multi_Crud_App is running successfully on Port ${PORT}`)
);

app.listen(PORT,()=>
console.log(`Your Multi_Crud_App is running successfully on Port ${PORT}`)
);
// PORT
// const port = process.env.PORT || 5000;
// const server = app.listen(port, () => {
// console.log('Connected to port ' + port)
// })

// // 404 Error
// app.use((req, res, next) => {
// res.status(404).send('Error 404!')
// });

// app.use(function (err, req, res, next) {
// console.error(err.message);
// if (!err.statusCode) err.statusCode = 500;
// res.status(err.statusCode).send(err.message);
// });
