# plANtIME

Today, we'll be building out an app that displays anime plants from a database.

## Setup

- Fork and clone this repository
- Run `npm install`
- Run `json-server --watch db.json` or `npm run json` to get the backend started
- Open `index.html` in your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

There are two paths: `/plants` and `/feed`

## User Stores

I can:

* See all of the plants when the page loads
* See a feed of all of the comments that have been made about all of the plants when the page loads
* Select a plant and fill in my desired username and comment, and then:
    * See that comment in the feed
    * Post that comment to the feed in the backend
* Delete any comment in the feed by clicking on it:
    * from the backend
    * from the frontend

