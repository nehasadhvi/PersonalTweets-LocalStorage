//Variable
const tweetList = document.getElementById('tweet-list');

//Event Listeners
eventListeners();

//Form Submission
function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet);

    //Remove the tweet
    tweetList.addEventListener('click', removeTweet);

    document.addEventListener('DOMContentLoaded', loadLocalStorage);
}

//Functions
function newTweet(e) {
    e.preventDefault();

    //Read the form content
    let tweet = document.getElementById('tweet').value;

    const li = document.createElement('li');
    li.textContent = tweet;

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';
    li.appendChild(removeBtn);

    tweetList.appendChild(li);

    addToLocalStorage(tweet);
}

function removeTweet(e) {
    if(e.target.classList.contains('remove-tweet')) {
        console.log(e.target.parentElement.remove());
    }
}

function addToLocalStorage(tweet) {
    let tweets = getFromLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getFromLocalStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    if(tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

function loadLocalStorage() {
    let tweets = getFromLocalStorage();

    tweets.forEach((tweet) => {
        const li = document.createElement('li');
        li.textContent = tweet;

        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';
        li.appendChild(removeBtn);

        tweetList.appendChild(li);
    });

}