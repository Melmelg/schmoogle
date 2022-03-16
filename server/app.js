const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 3000;
//const PORT = process.env.PORT || 3000;

/* app.use(cors()); */

app.listen(PORT, () => {
  console.log(`Google Schmoogle PORT:${PORT}!`);
});

app.get('/', (req, res) => res.send('What have you argued with your friends about and finally decided to schmoogle?'))


module.exports = app;


const bumbershoot = [
  {title: "Bumbershoot", url: "http://bumbershoot.org/" },
  {title: 'bumbershoot - Wiktionary', url: `https://en.wiktionary.org/wiki/bumbershoot` },
  {title: 'Word of the Day: Bumbershoot | Merriam-Webster', url: `https://www.merriam-webster.com/word-of-the-day/bumbershoot-2021-05-25` },
  {title: `Bumbershoot: It means umbrella, but it's not British for umbrella`, url: `https://slate.com/human-interest/2011/11/bumbershoot-it-means-umbrella-but-its-not-british-for-umbrella.html` },
  {title: 'Bumbershoot definition and meaning - English - Collins ...', url: `https://www.collinsdictionary.com/dictionary/english/bumbershoot` },
  {title: 'Bumbershoot Definition & Meaning | Dictionary.com', url: `https://www.dictionary.com/browse/bumbershoot` },
  {title: 'Bumbershoot - Wikipedia', url: `https://en.wikipedia.org/wiki/Bumbershoot` },
  {title: 'Bumbershoot - World Wide Words', url: `https://www.worldwidewords.org/qa/qa-bum2.htm` },
  {title: 'BUMBERSHOOT | meaning in the Cambridge English Dictionar', url: `https://dictionary.cambridge.org/dictionary/english/bumbershoot` },
  {title: 'Bumbershoot Policy Definition - Investopedia', url: `https://www.investopedia.com/terms/b/bumbershoot-policy.asp` },
  
]

const widdershins = [
  {title:"Widdershins - Wikipedia", url: "https://en.wikipedia.org/wiki/Widdershins"},
  {title: "Widdershins - March 11th, 2022", url: "https://widdershinscomic.com/"},
  {title: "Widdershins Definition & Meaning - Merriam-Webster", url: "https://www.merriam-webster.com/dictionary/widdershins"},
  {title: "widdershins - Wiktionary", url: "https://en.wiktionary.org/wiki/widdershins"},
  {title: "Puppetry and storytelling | Theatre of Widdershins | England", url: "https://www.widdershins.co.uk/"},
  {title: "Etymology, origin and meaning of widdershins by etymonline", url: "https://www.etymonline.com/word/widdershins"},
  {title: "Mermade/widdershins: OpenAPI / Swagger, AsyncAPI ...", url: "https://github.com/Mermade/widdershins"},
  {title: "WIDDERSHINS | meaning in the Cambridge English Dictionary", url: "https://dictionary.cambridge.org/dictionary/english/widdershins"},
  {title: "Whyborne & Griffin #1 - Widdershins - Goodreads", url: "https://www.goodreads.com/book/show/16128152-widdershins"},
  {title: "What does widdershins mean? - Definitions.net", url: "https://www.definitions.net/definition/widdershins"},
]
