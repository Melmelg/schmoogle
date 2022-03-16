const lucky = document.getElementById('lucky');
const search = document.getElementById('search')

lucky.addEventListener('click', randomSearch);
search.addEventListener('click', standSearch);

const originalTEXT = lucky.textContent
lucky.addEventListener('mouseover', changeText);
lucky.addEventListener('mouseout', revertText);


function changeText() {
    H2.textContent = "PICK ME!";
}

function revertText(){
    H2.textContent= originalTEXT
}

function search(formEntry) {
    //entry = form input
    fetch(`http://localhost:3000/search/${entry}`)
        .then(resp => resp.json())
}

app.get('/cats/:name', (req, res) => {
    console.log(req.params)
    const requestedCatName = req.params.name
    const cat = cats.find(cat => cat.name.toLowerCase() === requestedCatName.toLowerCase())
    res.json(cat)
  })

function randomSearch(e) {

}

function standSearch(e) {
    
}

fetch("http://localhost:6000/mitnick").then(req => req.text()).then(console.log)
