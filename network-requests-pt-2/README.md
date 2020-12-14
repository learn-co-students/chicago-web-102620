# CRUD-AJAX
Code with solution branch at: https://github.com/helloRupa/js-crud

## By the end of this lesson, you should be able to:
Perform all of the CRUD actions using fetch() and update the DOM with that data

## Buy why?
Being able to create, read, update, and destroy data from the frontend allows users to interact with websites and persist their changes. Imagine going to Facebook, you make a post, you see the post on the page, but then you refresh and your post is gone (not because you posted something naughty, but because the HTTP request was never made). Not a great experience, eh!

## How we'll get there:
- [ ] Create `fetch` requests (including `POST`, `PATCH`, `DELETE`) (We have already done GET)
- [ ] Manipulate the DOM in conjunction with `fetch` calls
- [ ] Understand optimistic vs pessimistic rendering
    - Updating UI/DOM

### Deliverables (User Stories)
As a user, I can:
- [x] See all the cat gifs and their comments
- [ ] Create a new cat gif post (image with comment)
- [ ] Delete a cat gif post
- [ ] Edit a comment for a post already on the page

All changes should _persist_ in our database.

### Single Page Applications (SPA)

**Why** are we doing all of this with `fetch`? 🤷

* We want to make our User Experience (UX) feel smooth and responsive.
* No more refreshing!
* No more request <=> response for every action we want to perform.
* Instead, we will load (new) content onto the page and make changes with JavaScript.
  * Changes will be made with `fetch` and it will be asynchronous.
* For example, like Twitter
  * => No refreshing; things just happen!
  * Sometimes we have to wait, but we can have indicators to show us that stuff is happening rather than waiting for the page to refresh.

### From CRUD to FETCH

Persisting data/change? Well _crud_... how do we do that? 🤔

| CRUD              | FETCH         |
| ----------------- | ------------- |
| Create            | POST          |
| Read              | GET           |
| Update            | PATCH or PUT  |
| Delete / Destroy  | DELETE        |

[Using `fetch` Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

`PUT` vs `PATCH`

The existing HTTP PUT method only allows a complete replacement of a document. This proposal adds a new HTTP method, PATCH, to modify an existing HTTP resource.

### Fetching ⚾️ <== 🐕

**About**

* `fetch` will always **return** a [_Promise_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) and it is promising to do something **if** it returns. We can think of this as the **promise** of an eventual value
  * There is **NO** guarantee of when it will come back!
  * There is **NO** guarantee that it will succeed!
* We **want** `fetch` to be **asynchronous _BECAUSE_**:
  * **If** `fetch` calls were **synchronous**, we would be stuck waiting for the call to finish before the code could proceed.
  * So **rather than _blocking_** any other JavaScript from running, we want `fetch` calls to be asynchronous. We want to write code around the eventual success or failure of some _asynchronous_ ⏳ operation such as an HTTP request.

**Usage**

* The `body` data **HAS** to be a string in a `POST`, `PUT`, or `PATCH` `fetch` call.
* You need `headers` in `POST`, `PUT`, or `PATCH` to tell the server what kind of content (`Content-Type`) you are sending to it. For example:
  * `'Content-Type': 'application/json'` is telling the server that you are sending a string of JSON in the `body` of your `fetch` request. You can [read more about the different types of data that can be sent here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

## Optimistic vs Pessimistic Rendering

#### Optimistic

* You can manipulate the DOM synchronously (outside the `.then()`).
* This is referred to as optimist rendering because you are **not waiting** for the async response to resolve.

**Pros**:
* Super responsive! User Experience++!

**Cons**:
* `fetch`es (aka: the "Promise") can lie!! If the `fetch` fails, data can become out of sync.
* `fetch`es are also **NOT** guaranteed to run in order.
  * What if we create a Pokemon and then update it relying all on optimistic rendering? The `PATCH` might reach the server _before_ your `POST`!!

Very interesting example of optimistic rendering that is handled _robustly_: **Reddit**

> When you vote, your vote isn’t instantly processed—instead, it’s placed into a queue.
>
> Source: [Caching at Reddit](https://redditblog.com/2017/1/17/caching-at-reddit/)

[Hacker News commenter's insight](https://news.ycombinator.com/item?id=13433793):

> I remember looking into this a while ago and was bewildered to find that when I upvoted or downvoted, there was no XHR call to the backend! There was no hidden iframe/image, no silent form post. Absolutely no network activity. Yet when I refreshed, my vote was shown correctly. I thought I was going crazy.
>
> This was long ago so I'm a bit fuzzy on the details but after a bit of digging, I found the most elegant data collection technique I've ever seen. Instead of sending network data when I voted, a local cookie was set with the link id and vote value. Then when I went to another page, my browser naturally sent the cookie to the server, where I believe it was processed, and then a fresh cookie was sent back to my browser. I could vote on 10 links, the local cookie would get large and then on the next page refresh, the backend would receive my batch of votes, process them, and send me a fresh cookie again.

#### Pessimistic

* You can manipulate the DOM asynchronously (inside the `.then()`) using the response from the server.
* Doing this is called pessimistic rendering because you **are waiting until** the async response has return to complete the action. In other words, you're pessimistic about the success of the request.
* This is to make sure the data on your page is consistent with the database.

**Pros**:
* What is reflected in the _client_ will always be in sync with the _server_.

**Cons**:
* If the `fetch` is slow, the UI will appear to not respond! (**hint** maybe good UX will signal to the user that something is happening)

![loading spinner](https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif)

Example of a feature you might want to always do pessimistically: **user signup**

* Think about registration forms on the web. What do they normally all do?
  * Disable things once you submit?
  * Show a spinner?
  * Anything else?
* You want to confirm that a new user was successfully created before redirecting your user somewhere. In this case, pessimistic rendering is preferable.