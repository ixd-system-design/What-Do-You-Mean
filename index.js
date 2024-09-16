//import libraries
// import fetch from 'node-fetch';   
import express from 'express';    

const app	= express();                   // initialize express
app.use( express.json() );               // enable JSON parsing in express

// Tell Express to serve up our frontend
// See also: https://expressjs.com/en/starter/static-files.html
app.use('/', express.static('public'))  

// Create a backend endpoint to listen for requests from the frontend
app.get('/search/:word', (req, res) => {
  
  // Discover which word the user is searching for.
  let word = req.params.word; // retrieve a word from the URL.
  
  // Build an Endpoint URL to fetch data from the Oxford API
  // let url = `https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}` 
  let url = `https://od-api-sandbox.oxforddictionaries.com/api/v2/entries/en-us/${word}`
  
  
  // Create authentication headers as specified by Oxford API documentation
  // See also: https://developer.oxforddictionaries.com/documentation/getting_started
  const options = {
    method: 'GET',  
    headers: {
      // Retrieve API Credentials stored as variables in the environment 
      // See also: https://12factor.net/config
      app_key: process.env.OXFORD_KEY, 
      app_id: process.env.OXFORD_ID
    }
  } 
  // fetch data from Oxford and relay it back to the frontend
  fetch(url, options)
    .then(response => response.json())
    .then(data =>  res.send( data ) )
    .catch(error => res.send( { error: error.message }) )
 
});

// Tell express to start listening for HTTP Requests
app.listen(process.env.PORT, () => {
  console.log(`We are live.`)
})

