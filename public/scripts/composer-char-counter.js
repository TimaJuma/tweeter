document.addEventListener('DOMContentLoaded', ()=> {
  

  const textArea = document.querySelector('#tweet-text');
  textArea.addEventListener("keyup", ()=> {

    // get the legth of text in TextArea
    const counter = document.querySelector('.counter');
    let charsLeft = 140 - Number(textArea.value.length);

    if (charsLeft < 0) {
      counter.style.color = 'red';
      counter.innerHTML = charsLeft;
    } else {
      counter.style.color = 'black';
      counter.innerHTML = charsLeft;
    }
    
  });




});