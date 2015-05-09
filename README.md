# TwitterVelocity
a dashboard to explore live streaming tweets

## Running the app
This is a node.js app so go grab a copy if you don't have one. Node [0.12.x](https://nodejs.org/download) would be best. Once you have node, use npm to install the app's dependencies
    
    npm install
    
You will need to set your twitter credentials as environment variables for the app to connect to twitter's streaming API. Go ahead and set the following variables
- TWITTER_CONSUMER_KEY
- TWITTER_CONSUMER_SECRET
- TWITTER_ACCESS_TOKEN_KEY
- TWITTER_ACCESS_TOKEN_SECRET

With the dependencies installed and your environment configured, you can start the app with either of the following
    
    node app.js
    npm start
    
after that, the app will be served on [port 3000 of your localhost](http://localhost:3000)
