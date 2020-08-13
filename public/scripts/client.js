/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */










const createTweetElement = (tweet) => {
  const user = tweet.user;
  const content = tweet.content.text;
  const created_at = Date.now();

  const newTweet = `<article class="tweet">
  <header>
    <div>
      <img src="/images/profile-hex.png">
      <h3>${user.name}</h3>
    </div>
    <p>${user.handle}</p>
  </header>
  <p>${content}</p>
  <footer>
    <p>${created_at}</p>
    <div>
      <i class="fas fa-flag"></i>
      <i class="fa fa-retweet" aria-hidden="true"></i>
      <i class="fa fa-heart" aria-hidden="true"></i>
    </div>
  </footer>
</article>`

return newTweet;
}


// render tweet array according to format
const renderTweets = (tweetArr) => {
  tweetArr.forEach(tweet => {
    $('#tweets').prepend(createTweetElement(tweet))
  });
}



// load tweets from /tweets location and render them one by one
const loadTweets = () => {
  $.ajax('http://localhost:4040/tweets', {method: 'GET'})
    .then((data) => {
      console.log('hi', data)
      renderTweets(data)
    })
};




$(document).ready(() => {

  loadTweets();



  $('#generate').on('click', ()=> {
    const newText = createTweetElement(tweetData);
    $('#tweets').append(newText)
  });



  // submission of tweet via form
  $form = $('#tweetSubmit');
  $form.on('submit', (event)=> {
    event.preventDefault();

    //check for user input
    const inputVal = $('#tweet-text').val();
    if (!inputVal) {
      alert('NO input')
      const errorMsg = `No input`
      document.querySelector('.error-msg').innerHTML = errorMsg;
    }
    const serialized = $form.serialize();
    console.log(serialized);
    
    $.ajax({
      url: 'http://localhost:4040/tweets',
      method: 'POST', 
      data: serialized})
      .then(()=> {
        loadTweets();
        $('.counter').text(140);
      })
    
    //clear input field after tweet submitted
    $('#tweet-text').val("");
    })


});



