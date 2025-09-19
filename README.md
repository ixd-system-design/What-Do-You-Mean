# Oxford Dictionary API Demo 

## Context and CORS
This demo displays  word definitions by fetching data from the the [Oxford Dictionaries API](https://developer.oxforddictionaries.com/). The API has great data, but lacks headers to allow [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS). As such we cannot call it directly from frontend JavaScript. We therefore use NodeJS [Express](https://expressjs.com) server as a relay to call the Oxford API on behalf of the frontend. You can [read more about CORS on this FigJam](https://www.figma.com/board/y67IupAudMyeBCjnXwIema/Cross-Origin-Resource-Sharing).


## API Credentials and Environment Variables
To get your API Key, you'll need to [Sign Up for a Free trial with Oxford](https://account.oxforddictionaries.com/pricing). You should get an `app id` and an `app key` in the Oxford dashboard. When working locally, you'll need to paste these into your `.env` file. Be sure to name the variables to match their usage in the code (see example below).  The `.env` file is loaded by NodeJS when you run `npm start`. When deploying your app to the public web, (e.g. to [Vercel](https://vercel.com/)) you'll need to configure these same Environment Variables as part of your project settings.  
```
OXFORD_ID=123abc*****
OXFORD_KEY=a1b2c3d4e5f6g7h8*****
``` 

## About 
Created by [Harold Sikkema](https://nsitu.ca) in the context of Systems Design in the [Interaction Design](https://ixd.sheridancollege.ca/program.html) program at [Sheridan College.](https://www.sheridancollege.ca/) Fonts via [Monotype](https://enterprise.monotype.com/). Thanks to [Oxford Dictionaries](https://developer.oxforddictionaries.com/) for all the words.