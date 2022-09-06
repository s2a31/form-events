const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const usernameInput = tweetForm.elements.username.value;
  const tweetInput = tweetForm.elements.tweet.value;
  const newTweet = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(usernameInput)
  newTweet.append(bTag);
  newTweet.append(` - ${tweetInput}`);
  tweetsContainer.append(newTweet);
});