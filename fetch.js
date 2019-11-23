const fetch = require("node-fetch");


fetch('https://official-joke-api.appspot.com/jokes/random')
  .then(response => {
    return response.json();
  })
  .then(a => console.log('json', a));

// Note that the fetch is asynchronous. These logs that appear
// after in the code, will appear first noin the output.

console.log('after fetch');
console.log('after fetch 2');