document.addEventListener('DOMContentLoaded', ()=> {
  

  const textArea = document.querySelector('#tweet-text');
  textArea.addEventListener("keyup", ()=> {

    // get the legth of text in TextArea
    const counter = document.querySelector('.counter');
    let charsLeft = 140 - Number(textArea.value.length);

    if (charsLeft < 0) {
      counter.style.color = 'red';
      const errorMsg = `<i class="fas fa-exclamation-triangle"></i>Be careful with cahracter limit<i class="fas fa-exclamation-triangle"></i>`;
      $('#error-msg').addClass('error-msg')
      document.querySelector('#error-msg').innerHTML = errorMsg
      counter.innerHTML = charsLeft;
    } else {
      counter.style.color = 'black';
      $('#error-msg').removeClass('error-msg')
      $('#error-msg').text("");
      counter.innerHTML = charsLeft;
    }
    
  });




});