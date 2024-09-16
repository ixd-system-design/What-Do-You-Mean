# Oxford Dicitonary API Demo
[![Open in Coder](https://ixdcoder.com/open-in-coder.svg)](https://ixdcoder.com/templates/Static/workspace?name=Oxford&mode=auto&param.git_repo=https://bender.sheridanc.on.ca/system-design/oxford)

## Context
This is a demo page to fetch and display data from the [Oxford Dictionaries API](https://developer.oxforddictionaries.com/) via a NodeJS backend. This iteration also uses NodeJS as a relay to satisfy the requirements of [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). NodeJS takes care of both the frontend and the backend via a framework called [Express](https://expressjs.com). For the backend API, We use Express to create a search endpoint for relaying requests. For the frontend, We also use Express library to serve up a public folder of [static assets](https://expressjs.com/en/starter/static-files.html. We use Environment Variables to safely store API Keys on the NodeJS Server.

## About 
Created by [Harold Sikkema](https://nsitu.ca) in the context of Systems Design in the [Interaction Design](https://ixd.sheridancollege.ca/program.html) program at [Sheridan College.](https://www.sheridancollege.ca/) Fonts via [Monotype](https://enterprise.monotype.com/). Thanks to [Oxford Dictionaries](https://developer.oxforddictionaries.com/) for all the words.