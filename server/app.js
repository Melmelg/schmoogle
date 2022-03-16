const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 3000;
//const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Google Schmoogle PORT:${PORT}!`);
});





/* const flower = [
  {title: "Flower Delivery", url: "https://www.interflora.co.uk/" },
  {title: 'Flower - Wiktionary', url: `https://en.wikipedia.org/wiki/Flower` },
  {title: 'LED Flower Bouquet', url: `https://hackaday.com/2022/03/15/led-flower-bouquet-is-a-radiant-hacker-desk-decoration/` },
  {title: 'Top 10 Most Popular Flowers In The World', url: `https://chelseaflowers.co.uk/top-10-most-popular-flowers-in-the-world/` },
]

const bulb = [
  {title:" Bulb | The energy company" url: "https://bulb.co.uk/"},
  {title:" Bulb - Facebook | Home" url: "https://www.facebook.com/bulb/"},
  {title:" Bulb | LinkedIn" url: "https://www.linkedin.com/company/bulb-uk"},
  {title:" Buy flower bulbs with Avon Bulbs" url: "https://www.avonbulbs.co.uk/"},
  {title:" Plants, seeds & Bulbs" url: "https://www.diy.com/departments/outdoor-garden/plants-seeds-bulbs/bulbs/DIY581228.cat"},
  {title:" Bulbasaur" url: "https://next-pokedex.netlify.app/1"},
  {title:" Bulbasaurus" url: "https://bulbasaurus.netlify.app"},

]

const root = [
  {title:"Root | Board Game | BoardGameGeek" url: "https://boardgamegeek.com/boardgame/237182/root"},
  {title:"Root - Wikipedia" url: "Root - Wikipedia"},
  {title:"" url: ""},
  {title:" Root Definition & Meaning - Merriam-Webster" url: "https://www.merriam-webster.com/dictionary/root"},
  {title:" Root - Dire Wolf Digital" url: "https://www.direwolfdigital.com/root/"},
] */

queries = [ "flower", "bulb", "root" ]

function search(entry) {
  if (entry.lower in queries) {

  }

}

app.get('/search/:something', (req, res) => {
  console.log(req.params)
  const entry = req.params.something
  const query = queries.find(query => query.toLowerCase() === entry.toLowerCase())
  res.json(query)
})

app.get('/', (req, res) => res.send('What have you argued with your friends about and finally decided to schmoogle?'))

app.get('/data', (req, res) => {
  res.json(queries)
})

app.get('/quotes/:entry', (req, res) => {
  const entry = (req.params);

})




module.exports = app;


