# Oxford Dictionary API Demo
[![Open in Coder](https://ixdcoder.com/open-in-coder.svg)](https://ixdcoder.com/templates/Node/workspace?name=Oxford&mode=auto&param.git_repo=https://bender.sheridanc.on.ca/system-design/oxford&param.code_template=custom)

## Context
This is a demo page to fetch and display data from the [Oxford Dictionaries API](https://developer.oxforddictionaries.com/) via a NodeJS backend. This iteration also uses NodeJS as a relay to satisfy the requirements of [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). NodeJS takes care of both the frontend and the backend via a framework called [Express](https://expressjs.com). For the backend API, We use Express to create a search endpoint for relaying requests. For the frontend, We also use Express library to serve up a public folder of [static assets](https://expressjs.com/en/starter/static-files.html). We use Environment Variables to safely store API Keys on the NodeJS Server.

## How to 
You will need to create a free trial account for the [Oxford Dictionaries API](https://developer.oxforddictionaries.com/). You should get an `app id` and an `app key` in the Oxford dashboard. You'll need to paste these into your `.env` file, which is used to store environment variables. NodeJS pulls the variables from `.env` and makes them available in the script. Here's an Example of what you might add to the end of your `.env` file. If you look in `index.js` around line 30, you will see these variables being pulled in by NodeJS.

```
OXFORD_ID=123abc*****
OXFORD_KEY=a1b2c3d4e5f6g7h8*****
```

## About 
Created by [Harold Sikkema](https://nsitu.ca) in the context of Systems Design in the [Interaction Design](https://ixd.sheridancollege.ca/program.html) program at [Sheridan College.](https://www.sheridancollege.ca/) Fonts via [Monotype](https://enterprise.monotype.com/). Thanks to [Oxford Dictionaries](https://developer.oxforddictionaries.com/) for all the words.