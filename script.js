const randomNumber = Math.floor(Math.random()*100)+1;
const input = document.querySelector(".input");
const message = document.querySelector(".message");
const guesses = document.querySelector(".guesses");
let count = 0;
function play(){
        let number = input.value;
        if(count>=10){
            message.classList.add("fail");
            message.innerHTML = "You lost!";
            input.disabled = 'true';
            return;
        }
        if(number==randomNumber){
            message.classList.remove("try");
            message.classList.add("success");
            message.innerHTML = "The number matched";
            input.disabled = 'true';
        }
        else if(number<randomNumber){
            guesses.textContent = guesses.textContent+` ${number}`;
            count++;
            message.classList.add("try");
            message.innerHTML = "Your guess is smaller";
        }
        else if(number>randomNumber){
            guesses.textContent = guesses.textContent+` ${number}`;
            count++;
            message.classList.add("try");
            message.innerHTML = "Your guess is greater";
        }

    
}
function refresh(){
    location.reload();
}
const button = document.querySelector(".submit");
const restart = document.querySelector(".restart");
restart.addEventListener("click",refresh);
button.addEventListener("click",play);
