const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.getElementById('chat');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();


// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
      document.querySelector('input').value += emoji;
    });
  
    emojiBtn.addEventListener('click', () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

// send msg
function sendmessage(){
  console.log(userInput)
    let temp = `<div class="chat-area">
    <div class="income-msg">
      <img src="C:\Users\Shreyas S\OneDrive\Documents\GitHub\CoviBuddy\static\images\ch.png" class="avatar" alt="">
      <span class="msg"> Hi, How can I help you?</span>
    </div>   
   </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';
}


// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    console.log(userInput)
    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="C:\Users\Shreyas S\OneDrive\Documents\GitHub\CoviBuddy\static\images\ch1.png" class="avatar">
    </div>`;

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';

})