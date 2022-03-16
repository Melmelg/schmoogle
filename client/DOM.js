const lucky = document.getElementById('lucky');
const search = document.getElementById('search')

lucky.addEventListener('click', randomSearch);
search.addEventListener('click', standSearch);

function search(e) {
/*   e.preventDefault() */
  let quote;
  fetch('http://localhost:3000')
    .then(resp => resp.json())
}

function randomSearch(e) {

}

function standSearch(e) {
    
}
