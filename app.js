//Variable
const tweetList = document.getElementById('tweet-list');

//Event Listeners
eventListeners();

//Form Submission
function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet);
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

    console.log(tweet);
    console.log('Form Submitted');
}