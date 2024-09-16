// let's locate important elements on the page so we can manipulate them
const searchForm = document.querySelector('form#searchForm')
const resultsSection = document.querySelector("section#results")

// listen for form submission
searchForm.addEventListener("submit", event => {    
  // prevent page from reloading
  event.preventDefault() 
  // retrieve user's word input from search box
  let word = document.querySelector('#searchText').value
  
  // Assemble an endpoint URL that includes the search word properly encoded
  // NOTE: This endopint is served up by Express Server in the backend
  // Learning Prompt: can you find where this search endpoint is defined? (index.js) 
  let endpointURL = '/search/'+ encodeURI(word)
  
  // Send the Request to Node/Express.
  // (Node will, in turn, fetch and forward data from Oxford API)
  fetch(endpointURL)
  	.then(response => response.json())
  	.then(data => displayResults(data))
  	.catch(err => console.error(err))  
})

// For each search result, display some HTML
const displayResults = (data) => {   
  // log data to help us understand JSON structure
  console.log(data)
  // check if we have results or not.
  if(data.error == "Authentication failed"){
    resultsSection.innerHTML = "<p>Unable to Authenticate. You may need to add an Oxford API Key to your NodeJS Server Environment.</p>"
  }
  else if(data.error){
     resultsSection.innerHTML = "<p>Oops, something went wrong. </p>"
  }
  else if (data.results){  
    // clear the stage (blank slate)
    resultsSection.innerHTML = '';  
    // drill down into JSON to find array of entries
    let lexicalEntries = data.results[0].lexicalEntries; 
    // render each word separately
    lexicalEntries.forEach( word => renderEntry(word) ) 
  }   
  else{
    // if there are no results, give the user some helpful feedback.
    resultsSection.innerHTML = "<p>Word not found.</p>"
  }  
}  


const renderEntry = (word) => {  
    // log the word ot the console so we can see the JSON structure 
    console.log(word)
    // drill down into JSON, find the first available entry
    // (i.e the zeroeth element in the array)
    let entry = word.entries[0] 
    // Let's locate JSON data about available mp3 audioFile(s)
    // We can use an array filter to find the most useful data
    // See also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    let audioInfo = entry.pronunciations.filter(data => data.audioFile)
    // if we have info about audio, render the first available file
    // (i.e the zeroeth element in the array) 
    //  otherwise leave it blank.
    let audioHTML = (audioInfo.length > 0) ?  
          renderAudio( audioInfo[0] ) :  ''  
    // each word may have multiple senses
    // let's filter for senses that actually have existing definitions
    // then let's render each of them, then join the HTML  snippets together.
    let definitionsHTML = entry.senses
      .filter(sense => sense.definitions)
      .map(sense => renderDefinition(sense))
      .join('') 
  
    // construct the overall template from all the above elements. 
    let template = 
      `<div class="lexicalEntry">
        <h2>
          <span>${word.text}</span>
          <span class="lexicalCategory">
            ${word.lexicalCategory.text}
          </span>
        </h2>
        <div class="entry">
          ${audioHTML}
          ${definitionsHTML}
        </div>
      </div>` 
    // add everything to the page.
    let div = document.createElement('div')
    div.classList.add('result') 
    div.innerHTML = template 
    resultsSection.appendChild(div) 
} 

const renderAudio = (audioInfo) => {  
  // console.log(audioInfo)
  // add an audio player based on the given mp3
  // include phonetic spelling. 
  return `<div class="pronunciation">
    <div class="phoneticSpelling">
     ${ audioInfo.phoneticSpelling }
    </div> 
    <audio controls>
      <source src="${audioInfo.audioFile}" type="audio/mpeg">
    </audio> 
  </div>`   
} 
 
const renderDefinition = (sense) =>{
  // console.log(sense)
  // for each sense, render the first available definition 
  // (i.e the zeroeth element in the array)
  return `<div class="sense">
    <p>${sense.definitions[0]}</p>
  </div>` 
}

