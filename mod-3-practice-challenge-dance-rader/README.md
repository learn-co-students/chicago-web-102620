# Dance Rader

Today you'll be building an app for viewing and editing dancers. You will be using a local API and building out the frontend for our app, Dance Rader.

## Testing

This practice code challenge includes a test suite. Keep in mind that the actual code challenge will not include a test suite. To get the most out of this, manually test your code as you would during a code challenge. After you've completed the Core Deliverables and are satisfied with your progress, run the tests for the Core Deliverables. Do the same for the Advanced Deliverables.

### Test Commands:
- `npm run core`
- `npm run adv`

To exit the tests, type `^C`. Doing so should free up port 3000 from all processes.

> Note: If exiting the tests doesn't free up the port (Error: could not bind to port 3000), run the following command: `lsof -i :3000`, locate the PID, and then run `kill -9 <PID>`. Alternatively, you can try `killall node`.

## Setup

- Fork and clone this repository
- Run `npm install`
- Run `json-server --watch db.json` or `npm run json` to get the backend started
- Open `index.html` in your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints are:

- GET **one** dancer with their feedback included: `/dancers/[:id]?_embed=feedback`
    - Will respond with one of the dancers with all of their their feedback embedded
- GET **all** dancers with their feedback included: `/dancers?_embed=feedback`
    - Will respond with all of the dancers with each of their feedback embedded in each dancer object
- PATCH `/dancers/[:id]`
    - Will respond with the updated dancer object if successful
- DELETE `/dancers/[:id]`
    - Responds with nothing, so nothing
- POST `/feedback`
    - Responds with the feedback if it posted successfully

## Core Deliverables

As a user, I can:

- See the first dancer's details, including their **name, image, description, likes, and feedback**, when the page loads
- Like the dancer and **still see the new number of likes when reloading the page**
- Leave feedback for the dancer (no persistence needed, will disappear on refresh)

Please write your code in the files inside of the `src` directory. `api.js` is loaded before `index.js`. You can put all of your code in `index.js` if you like, but if you want to separate your code into multiple files, you may.

## Advanced Deliverables

These deliverables are not required, but if you have the extra time, they are a great way to stretch your skills. Consider refactoring your current code before moving on.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I can:

- Still see the feedback after refreshing the page (Once you implement this, the core test for feedback may fail)
- Delete feedback (persistent) (For tests to work, make the LI delete on click instead of adding a button)
- Reduce the likes by clicking on a button (persistent) without going below 0 likes
- See a menu of dancers. Clicking a dancer's name should update the page to show that dancer's details (it's not necessary for patch or post requests to work)

## Rubric

You can find the rubric for this assessment [here](https://github.com/learn-co-curriculum/se-rubrics/blob/master/module-3.md).
