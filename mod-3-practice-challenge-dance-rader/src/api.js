const BASE_URL = "http://localhost:3000";
const DANCERS_URL = `${BASE_URL}/dancers?_embed=feedback`;
const singleDancerUrl = (id) => `${BASE_URL}/dancers/${id}?_embed=feedback`;
const FIRST_DANCER_URL = `${BASE_URL}/dancers/1?_embed=feedback`;
const FEEDBACK_URL = `${BASE_URL}/feedback`;

function makeOptions(method, body = {}) {
  return {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
}

function generalFetch(url, options = {}) {
  return fetch(url, options)
  .then(res => res.json());
}

function fetchFirstDancer() {
  return generalFetch(FIRST_DANCER_URL);
}

function patchDancerLikes(id, likes) {
  return generalFetch(singleDancerUrl(id), makeOptions("PATCH", { likes }));
}

function postFeedback(dancerId, feedback) {
  return generalFetch(FEEDBACK_URL, makeOptions("POST", { dancerId, feedback }));
}

function deleteFeedback(feedbackId) {
  return generalFetch(`${FEEDBACK_URL}/${feedbackId}`, makeOptions("DELETE"));
}

function fetchAllDancers() {
  return generalFetch(DANCERS_URL);
}
