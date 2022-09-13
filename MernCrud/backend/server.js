let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
// let dbConfig = require('./database/db');

// Express Route
const studentRoute = require('../backend/routes/student.route')
const userRoute   = require('../backend/routes/user.route')
const assignroleRoute   = require('../backend/routes/assignrole.route')
// Configure mongoDB Database
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

// Connecting MongoDB Database
// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.db).then(() => {
// console.log('Database successfully connected!')
// },
// error => {
// 	console.log('Could not connect to database : ' + error)
// }
// )

mongoose.connect("mongodb://localhost:27017/reactDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(cors());
app.use('/api/students', studentRoute)
app.use('/api/user', userRoute)
app.use('/api/assignrole', assignroleRoute)

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
res.status(404).send('Error 404!')
});

app.use(function (err, req, res, next) {
console.error(err.message);
if (!err.statusCode) err.statusCode = 500;
res.status(err.statusCode).send(err.message);
});
