const lucky = document.getElementById('im_feeling_lucky');
const search = document.getElementById('smoogle_search')

/* lucky.addEventListener('click', randomSearch); */

const originalTEXT = lucky.textContent
lucky.addEventListener('mouseover', changeText);
lucky.addEventListener('mouseout', revertText);

search.addEventListener('click', function(){alert('HELP ME')});
search.addEventListener('click', search);


function changeText() {
    lucky.textContent = "PICK ME!";
}

function revertText(){
    lucky.textContent = originalTEXT
}

function search() {
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
