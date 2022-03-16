const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 3000;
//const PORT = process.env.PORT || 3000;

app.use(cors());

const queries = [
    { mitcnick: 'a coding guy' },
    { students_mitcnick: 'guys/girls trying to code' },
    { students_mitnick_lectures: 'a scary slack channel' },
    { watercooler: 'memes' },
]


app.listen(PORT, () => {
  console.log(`Google Schmoogle PORT:${PORT}!`);
});

app.get('/', (req, res) => res.send('What have you argued with your friends about and finally decided to schmoogle?'))



module.exports = app;
