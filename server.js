var express = require ("express");
var app = express();
const cors = require('cors');

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    origin: "http://localhost:4200"
};
  
app.use(cors(corsOptions));

const db = [
    'Sao Paulo',
    'Nevada',
    'Dubai',
    'Dublin',
    'London',
    'Barcelona',
    'Paris',
];

app.get('/', (req, res) => {
    const data = req.query;
    console.log(data.q);

    let items = db.filter(item => item.includes(data.q))
    console.log(items);
    res.send(items);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000.`);
});